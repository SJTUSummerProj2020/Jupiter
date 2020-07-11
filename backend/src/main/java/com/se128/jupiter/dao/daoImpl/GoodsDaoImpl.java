package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GoodsDaoImpl implements GoodsDao {

    private  final GoodsRepository goodsRepository;
    private  final GoodsDetailRepository goodsDetailRepository;

    @Autowired
    public GoodsDaoImpl(GoodsRepository goodsRepository, GoodsDetailRepository goodsDetailRepository) {
        this.goodsRepository = goodsRepository;
        this.goodsDetailRepository = goodsDetailRepository;
    }

    @Override
    public List<Goods> getAllGoods() {
        return goodsRepository.getAllGoods();
    }

    @Override
    public Goods getGoodsByGoodsId(Integer goodsId) {
        return goodsRepository.getGoodsByGoodsId(goodsId);
    }

    @Override
    public Goods editGoods(Goods goods) {
        return goodsRepository.saveAndFlush(goods);
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
            goodsDetailRepository.deleteByGoodsId(goodsId);
            goodsRepository.deleteById(goodsId);
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
        return goodsRepository.getGoodsByName(name);
    }

}
