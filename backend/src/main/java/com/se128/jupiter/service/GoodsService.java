package com.se128.jupiter.service;

import com.se128.jupiter.entity.Goods;
import org.springframework.data.domain.Page;

import java.util.List;

public interface GoodsService {

    Goods getGoodsByGoodsId(Integer goodsId);

    Goods editGoods(Goods goods);

    Goods addGoods(Goods goods);

    void deleteGoodsByGoodsId(Integer goodsId);

    List<Goods> getGoodsByGoodsType(Integer goodsType);

    List<Goods> getGoodsByName(String name);

    List<Goods> getGoodsByPageId(Integer pageId);

    Page<Goods> getAllGoods(Integer pageId, Integer pageSize, Integer goodsType);

    void saveViewCounter();
}
