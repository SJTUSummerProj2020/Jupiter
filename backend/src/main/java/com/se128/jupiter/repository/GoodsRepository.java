package com.se128.jupiter.repository;

import com.se128.jupiter.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods,Integer> {

    @Query(value = "select g from Goods g")
    List<Goods> getAllGoods();

    Goods getGoodsByGoodsId(Integer goodsId);

    List<Goods> getGoodsByGoodsType(Integer goodsType);

    @Query(value = "from Goods where name = ?1")
    List<Goods> getGoodsByName(String name);
}
