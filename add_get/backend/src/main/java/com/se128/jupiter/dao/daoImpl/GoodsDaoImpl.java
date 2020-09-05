package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.entity.Detail;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.repository.DetailRepository;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class GoodsDaoImpl implements GoodsDao {

    private  final GoodsRepository goodsRepository;
    private  final GoodsDetailRepository goodsDetailRepository;
    private  final DetailRepository detailRepository;

    @Autowired
    public GoodsDaoImpl(GoodsRepository goodsRepository, GoodsDetailRepository goodsDetailRepository, DetailRepository detailRepository) {
        this.goodsRepository = goodsRepository;
        this.goodsDetailRepository = goodsDetailRepository;
        this.detailRepository = detailRepository;
    }

    @Override
    public Goods getGoodsByGoodsId(Integer goodsId) {
        Detail detail;
        Goods goods = goodsRepository.getGoodsByGoodsId(goodsId);
        try{
            detail = detailRepository.getDetailByGoodsId(goodsId);
            goods.setDetail(detail.getDetail());
        }catch(Exception e){
        }
        return goods;
    }

    @Override
    public GoodsDetail getGoodsDetailByDetailId(Integer detailId) {
        GoodsDetail detail;
        try{
            detail = goodsDetailRepository.getGoodsDetailByDetailId(detailId);
        }catch(Exception e){
            detail = null;
        }
        return detail;
    }

    @Override
    public Goods editGoods(Goods goods) {
        Goods goods1 = goodsRepository.getGoodsByGoodsId(goods.getGoodsId());
        if(goods1 == null)
        {
            return null;
        }
        goods1.setName(goods.getName());
        goods1.setStartTime(goods.getStartTime());
        goods1.setEndTime(goods.getEndTime());
        goods1.setAddress(goods.getAddress());
        goods1.setWebsite(goods.getWebsite());
        goods1.setGoodsType(goods.getGoodsType());
        goods1.setImage(goods.getImage());
        goods1.setViewCounter(goods.getViewCounter());
        goods1.setBuyCounter(goods.getBuyCounter());
        return goodsRepository.saveAndFlush(goods1);
    }

    @Override
    public Goods addGoods(Goods goods) {

        Goods goods1 = goodsRepository.saveAndFlush(goods);
        Integer goodsId = goods1.getGoodsId();
        List<GoodsDetail> goodsDetails = goods1.getGoodsDetails();
        for(GoodsDetail item : goodsDetails)
        {
            item.setGoodsId(goodsId);
        }
        goodsDetailRepository.saveAll(goodsDetails);
        return goods1;
    }

    @Override
    public void deleteGoodsByGoodsId(Integer goodsId) {
        try{
            Goods goods = goodsRepository.getGoodsByGoodsId(goodsId);
            goods.setGoodsType(-1);
            List<GoodsDetail> goodsDetails = goods.getGoodsDetails();
            goodsRepository.saveAndFlush(goods);
            for(GoodsDetail item : goodsDetails)
            {
                item.setSurplus(-1);
            }
            goodsDetailRepository.saveAll(goodsDetails);

        }
        catch (Exception e){
            System.out.println("Can't delete");
        }
    }

    @Override
    public List<Goods> getGoodsByGoodsType(Integer goodsType) {
        return goodsRepository.getGoodsByGoodsType(goodsType);
    }

    @Override
    public List<Goods> getGoodsByName(String name) {
        return goodsRepository.findAllByNameContains(name);
        //return goodsRepository.findAllByNameLike("%"+name+"%");
    }

    @Override
    public List<Goods> getGoodsByPage(Integer pageId) {
        return goodsRepository.getGoodsByPageId(pageId);
    }

    @Override
    public Page<Goods> getAllGoods(Integer pageId, Integer pageSize, Integer goodsType) {
        PageRequest pageRequest = PageRequest.of(pageId,pageSize);
        if(goodsType==-1)
        {
            try {
                return goodsRepository.findAll(pageRequest);
            }
            catch (Exception e)
            {
                System.out.println("error");
                return null;
            }
        }
        else
        {
            return goodsRepository.findByGoodsType(goodsType,pageRequest);
        }
    }

    @Override
    public void saveViewCounter(HashMap<Integer, Integer> goodsViewCounter) {
        for(Map.Entry<Integer, Integer> entry: goodsViewCounter.entrySet())
        {
           Goods goods = goodsRepository.getGoodsByGoodsId(entry.getKey());
           goods.setViewCounter(goods.getViewCounter()+entry.getValue());
           goodsRepository.save(goods);
        }
        goodsRepository.flush();
    }

    @Override
    public List<Goods> getPopularGoods(Integer number, Integer goodsType) {
        if(goodsType==-1)
        {
            return goodsRepository.getPopularGoodsInAll(number);
        }
        else {
            return goodsRepository.getPopularGoods(number,goodsType);
        }
    }

    @Override
    public List<Goods> getRecommendGoodsByGoodsType(Integer goodsType, Integer number) {
        return goodsRepository.getRecommendGoodsByGoodsType(goodsType,number);
    }

    @Override
    public List<Goods> getRecommendGoodsInAll(Integer number) {
        return goodsRepository.getRecommendGoodsInAll(number);
    }
}
