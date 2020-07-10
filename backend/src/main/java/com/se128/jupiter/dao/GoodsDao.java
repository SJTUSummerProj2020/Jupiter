package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Goods;

import java.util.List;

public interface GoodsDao {
    List<Goods> getAllGoods();

    Goods getGoodsByGoodsId(Integer goodsId);

    Goods editGoods(Goods goods);

    Goods addGoods(Goods goods);

    void deleteGoodsByGoodsId(Integer goodsId);

    List<Goods> getGoodsByGoodsType(Integer goodsType);

    List<Goods> getGoodsByName(String name);
}
