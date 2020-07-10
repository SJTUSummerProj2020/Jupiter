package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GoodsDaoImpl implements GoodsDao {

    @Autowired
    GoodsRepository goodsRepository;
    @Autowired
    GoodsDetailRepository goodsDetailRepository;

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
        return goodsRepository.saveAndFlush(goods);
    }

    @Override
    public void deleteGoodsByGoodsId(Integer goodsId) {

        goodsRepository.deleteById(goodsId);
        goodsDetailRepository.deleteByGoodsId(goodsId);
    }

    @Override
    public List<Goods> getGoodsByGoodsType(Integer goodsType) {
        return goodsRepository.getGoodsByGoodsType(goodsType);
    }

}
