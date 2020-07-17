package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.entity.Detail;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.repository.DetailRepository;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class GoodsDaoTest {
    @Autowired
    private GoodsDao goodsDao;
    @MockBean
    private GoodsRepository goodsRepository;
    @MockBean
    private GoodsDetailRepository goodsDetailRepository;
    @MockBean
    private DetailRepository detailRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getGoodsByGoodsId() {
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        Detail detail = new Detail();
        detail.setGoodsId(goodsId);
        detail.setDetail("Test website content");
        goods.setDetail(detail.getDetail());

        when(goodsRepository.getGoodsByGoodsId(goodsId)).thenReturn(goods);
        when(detailRepository.getDetailByGoodsId(goodsId)).thenReturn(detail);
        assertEquals(goods, goodsDao.getGoodsByGoodsId(goodsId));

    }

    @Test
    void editGoods() {
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        // goods1 != null
        when(goodsRepository.getGoodsByGoodsId(goodsId)).thenReturn(goods);
        when(goodsRepository.saveAndFlush(goods)).thenReturn(goods);
        assertEquals(goods, goodsDao.editGoods(goods));
        // goods1 = null
        when(goodsRepository.getGoodsByGoodsId(goodsId)).thenReturn(null);
        assertNull(goodsDao.editGoods(goods));
    }

    @Test
    void addGoods() {
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        List<GoodsDetail> detailList = new ArrayList<>();
        for(int i = 0; i < 10; ++i){
            GoodsDetail detail = new GoodsDetail();
            detail.setGoodsId(goodsId);
            detailList.add(detail);
        }
        goods.setGoodsDetails(detailList);

        when(goodsRepository.saveAndFlush(goods)).thenReturn(goods);
        when(goodsDetailRepository.saveAll(detailList)).thenReturn(detailList);
        assertEquals(goods, goodsDao.addGoods(goods));
    }

    @Test
    void deleteGoodsByGoodsId() {
        Integer goodsId = 1;
        doNothing().when(goodsDetailRepository).deleteByGoodsId(goodsId);
        doNothing().when(goodsRepository).deleteById(goodsId);
        goodsDao.deleteGoodsByGoodsId(goodsId);

        // 测试异常抛出
        doThrow(new RuntimeException("异常")).when(goodsDetailRepository).deleteByGoodsId(goodsId);
        goodsDao.deleteGoodsByGoodsId(goodsId);
    }

    @Test
    void getGoodsByGoodsType() {
        List<Goods> goodsList = new ArrayList<>();
        Integer goodsId = 1;
        Integer goodsType = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goods.setGoodsType(goodsType);
        goodsList.add(goods);
        goodsList.add(goods);

        when(goodsRepository.getGoodsByGoodsType(goodsType)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getGoodsByGoodsType(goodsType));
    }

    @Test
    void getGoodsByName() {
        List<Goods> goodsList = new ArrayList<>();
        Integer goodsId = 1;
        String name = "test_name";
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        goodsList.add(goods);
        goodsList.add(goods);

        when(goodsRepository.findAllByNameContains(name)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getGoodsByName(name));
    }

    @Test
    void getGoodsByPage() {
        List<Goods> goodsList = new ArrayList<>();
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goodsList.add(goods);
        goodsList.add(goods);
        Integer pageId = 1;

        when(goodsRepository.getGoodsByPageId(pageId)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getGoodsByPage(pageId));
    }

    @Test
    void getAllGoods() {
        List<Goods> goodsList = new ArrayList<>();
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goodsList.add(goods);
        goodsList.add(goods);
        Integer pageId = 1;
        Integer pageSize = 10;
        Integer goodsType = -1;
        PageRequest pageRequest = PageRequest.of(pageId, pageSize);
        Page<Goods> goodsPage = new PageImpl<>(goodsList);

        // goodsType = -1
        when(goodsRepository.findAll(pageRequest)).thenReturn(goodsPage);
        assertEquals(goodsPage, goodsDao.getAllGoods(pageId, pageSize, goodsType));
        // goodsType = -1 with exception
        doThrow(new RuntimeException("异常")).when(goodsRepository).findAll(pageRequest);
        assertNull(goodsDao.getAllGoods(pageId, pageSize, goodsType));
        // goodsType != -1
        goodsType = 1;
        when(goodsRepository.findByGoodsType(goodsType, pageRequest)).thenReturn(goodsPage);
        assertEquals(goodsPage, goodsDao.getAllGoods(pageId, pageSize, goodsType));
    }

    @Test
    void saveViewCounter() {
        HashMap<Integer, Integer> goodsViewCounter = new HashMap<>();
        Integer goodsId = 1;
        Integer viewCounter = 0;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goods.setViewCounter(viewCounter);
        int goodsNum = 10;
        for(int i = 0; i < goodsNum; ++i){
            goodsViewCounter.merge(goodsId, 1, Integer::sum);
        }
        when(goodsRepository.save(goods)).thenReturn(goods);
        doNothing().when(goodsRepository).flush();
        when(goodsRepository.getGoodsByGoodsId(goodsId)).thenReturn(goods);

        goodsDao.saveViewCounter(goodsViewCounter);
    }

    @Test
    void getPopularGoods() {
        Integer goodsType = -1;
        Integer number = 10;
        Integer goodsId = 1;
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        List<Goods> goodsList = new ArrayList<>();
        goodsList.add(goods);
        goodsList.add(goods);
        // goodsType = -1
        when(goodsRepository.getPopularGoodsInAll(number)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getPopularGoods(number, goodsType));
        // goodsType != -1
        goodsType = 1;
        when(goodsRepository.getPopularGoods(number, goodsType)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getPopularGoods(number, goodsType));
    }

    @Test
    void getAllAuctions() {
//        List<Auction> auctionList = new ArrayList<>();
//        Integer auctionId = 1;
//        Auction auction = new Auction();
//        auction.setActionId(auctionId);
//        auctionList.add(auction);
//        auctionList.add(auction);
    }

    @Test
    void getAuctionByAuctionId() {
    }

    @Test
    void getGoodsDetailByDetailId() {
        Integer detailId = 1945;
        GoodsDetail goodsDetail = new GoodsDetail();
        goodsDetail.setDetailId(detailId);
        when(goodsDetailRepository.getGoodsDetailByDetailId(detailId)).thenReturn(goodsDetail);
        assertEquals(goodsDetail, goodsDao.getGoodsDetailByDetailId(detailId));

        doThrow(new RuntimeException("异常")).when(goodsDetailRepository).getGoodsDetailByDetailId(detailId);
        goodsDao.getGoodsDetailByDetailId(detailId);
    }

    @Test
    void getRecommendGoodsByGoodsType(){
        Integer goodsType = 1;
        Integer number = 10;
        List<Goods> goodsList = new ArrayList<>();

        when(goodsRepository.getRecommendGoodsByGoodsType(goodsType, number)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getRecommendGoodsByGoodsType(goodsType, number));
    }

    @Test
    void getRecommendGoodsInAll(){
        Integer number = 1;
        List<Goods> goodsList = new ArrayList<>();

        when(goodsRepository.getPopularGoodsInAll(number)).thenReturn(goodsList);
        assertEquals(goodsList, goodsDao.getRecommendGoodsInAll(number));
    }
}
