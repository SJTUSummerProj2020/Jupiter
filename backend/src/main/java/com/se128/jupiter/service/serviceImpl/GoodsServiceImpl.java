package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    private GoodsDao goodsDao;

    public List<Goods> getAllGoods(){
        return goodsDao.getAllGoods();
    }

    @Override
    public Goods getGoodsByGoodsId(Integer goodsId) {
        return goodsDao.getGoodsByGoodsId(goodsId);
    }

    @Override
    public Goods editGoods(Goods goods) {
        return goodsDao.editGoods(goods);
    }

    @Override
    public Goods addGoods(Goods goods) {
        return goodsDao.addGoods(goods);
    }

    @Override
    public void deleteGoodsByGoodsId(Integer goodsId) {
        goodsDao.deleteGoodsByGoodsId(goodsId);
    }

    @Override
    public List<Goods> getGoodsByGoodsType(Integer goodsType) {
        return goodsDao.getGoodsByGoodsType(goodsType);
    }

    @Override
    public List<Goods> getGoodsByName(String name) {
        return goodsDao.getGoodsByName(name);
    }
}
