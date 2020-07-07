package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Goods;

import java.util.List;

public interface GoodsDao {
    List<Goods> getAllGoods();

    Goods getGoodsByGoodsId(Integer goodsId);
}
