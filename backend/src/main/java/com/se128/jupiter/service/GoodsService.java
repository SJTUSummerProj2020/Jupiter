package com.se128.jupiter.service;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.util.msgutils.Msg;

import java.util.List;

public interface GoodsService {
    List<Goods> getAllGoods();

    Goods getGoodsByGoodsId(Integer goodsId);

    Goods editGoods(Goods goods);

    Goods addGoods(Goods goods);

    void deleteGoodsByGoodsId(Integer goodsId);

    List<Goods> getGoodsByGoodsType(Integer goodsType);

    List<Goods> getGoodsByName(String name);
}
