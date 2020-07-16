package com.se128.jupiter.service;

import com.se128.jupiter.dao.AuctionDao;
import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.entity.Goods;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class GoodsServiceTest {
    @Autowired
    private GoodsService goodsService;

    @MockBean
    private GoodsDao goodsDao;
    @MockBean
    private AuctionDao auctionDao;

    @Test
    void getGoodsByGoodsId() {
        Goods goods =  new Goods();
        Integer goodsId = 1;
        String name = "test";
        goods.setGoodsId(goodsId);
        goods.setName(name);

        when(goodsDao.getGoodsByGoodsId(goodsId)).thenReturn(goods);
        assertEquals(goods, goodsService.getGoodsByGoodsId(goodsId));
    }

    @Test
    void editGoods() {
        Goods goods =  new Goods();
        Integer goodsId = 1;
        String name = "test";
        goods.setGoodsId(goodsId);
        goods.setName(name);

        when(goodsDao.editGoods(goods)).thenReturn(goods);
        assertEquals(goods, goodsService.editGoods(goods));
    }

    @Test
    void addGoods() {
        Goods goods =  new Goods();
        Integer goodsId = 1;
        String name = "test";
        goods.setGoodsId(goodsId);
        goods.setName(name);

        when(goodsDao.addGoods(goods)).thenReturn(goods);
        assertEquals(goods, goodsService.addGoods(goods));
    }

    @Test
    void deleteGoodsByGoodsId() {
        Integer goodsId = 1;
        doNothing().when(goodsDao).deleteGoodsByGoodsId(goodsId);
        goodsService.deleteGoodsByGoodsId(goodsId);
    }

    @Test
    void getGoodsByGoodsType() {
        Integer goodsType = 1;
        Integer goodsId = 1;
        String name = "test";
        Goods goods =  new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        goods.setGoodsType(goodsType);
        List<Goods> goodsList = new LinkedList<>();
        goodsList.add(goods);
        goodsList.add(goods);

        when(goodsDao.getGoodsByGoodsType(goodsType)).thenReturn(goodsList);
        assertEquals(goodsList, goodsService.getGoodsByGoodsType(goodsType));
    }

    @Test
    void getGoodsByName() {
        Integer goodsId = 1;
        String name = "test";
        Goods goods =  new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        List<Goods> goodsList = new LinkedList<>();
        goodsList.add(goods);
        goodsList.add(goods);

        when(goodsDao.getGoodsByName(name)).thenReturn(goodsList);
        assertEquals(goodsList, goodsService.getGoodsByName(name));
    }

    @Test
    void getGoodsByPageId() {
        Integer goodsId = 1;
        String name = "test";
        Goods goods =  new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        List<Goods> goodsList = new LinkedList<>();
        goodsList.add(goods);
        goodsList.add(goods);
        Integer pageId = 1;

        when(goodsDao.getGoodsByPage(pageId)).thenReturn(goodsList);
        assertEquals(goodsList, goodsService.getGoodsByPageId(pageId));
    }

    @Test
    void getAllGoods() {
        Integer goodsType = 1;
        Integer goodsId = 1;
        String name = "test";
        Goods goods =  new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        goods.setGoodsType(goodsType);
        List<Goods> goodsList = new ArrayList<>();
        goodsList.add(goods);
        goodsList.add(goods);
        Integer pageId = 1;
        Integer pageSize = 1;
        Page<Goods> goodsPage = new PageImpl<>(goodsList);

        when(goodsDao.getAllGoods(pageId, pageSize, goodsType)).thenReturn(goodsPage);
        assertEquals(goodsPage, goodsService.getAllGoods(pageId, pageSize, goodsType));
    }

    @Test
    void saveViewCounter() {
        HashMap<Integer, Integer> goodsViewCounter = new HashMap<Integer,Integer>();
        Integer goodsId = 1;
        int goodsNum = 10;
        for(int i = 0; i < goodsNum; ++i){
            goodsViewCounter.merge(goodsId, 1, Integer::sum);
        }
        doNothing().when(goodsDao).saveViewCounter(goodsViewCounter);
        goodsService.saveViewCounter();
    }

    @Test
    void getPopularGoods() {
        Integer number = 10;
        Integer goodsType = 1;
        Integer goodsId = 1;
        String name = "test";
        Goods goods =  new Goods();
        goods.setGoodsId(goodsId);
        goods.setName(name);
        goods.setGoodsType(goodsType);
        List<Goods> goodsList = new ArrayList<>();
        goodsList.add(goods);
        goodsList.add(goods);

        when(goodsDao.getPopularGoods(number, goodsType)).thenReturn(goodsList);
        assertEquals(goodsList, goodsService.getPopularGoods(number, goodsType));
    }

    @Test
    void getAllAuctions(){
        Auction auction = new Auction();
        List<Auction> auctionList = new ArrayList<>();
        auctionList.add(auction);
        auctionList.add(auction);
        when(auctionDao.getAllAuctions()).thenReturn(auctionList);
        assertEquals(auctionList, goodsService.getAllAuctions());
    }

    @Test
    void getAuctionByAuctionId(){
        Integer auctionId = 1;
        Auction auction = new Auction();
        auction.setAuctionId(auctionId);
        when(auctionDao.getAuctionByAuctionId(auctionId)).thenReturn(auction);
        assertEquals(auction, goodsService.getAuctionByAuctionId(auctionId));
    }

    @Test
    void updateAuction(){
        Integer auctionId = 1;
        Integer userId = 1;
        Double offer = 1.0;
        Double newOffer = 2.0;
        Auction auction = new Auction();
        auction.setAuctionId(auctionId);
        auction.setBestOffer(offer);

        when(auctionDao.getAuctionByAuctionId(auctionId)).thenReturn(auction);
        when(auctionDao.saveAuction(auction)).thenReturn(auction);
        assertEquals(auction, goodsService.updateAuction(auctionId, userId, newOffer));
    }
}
