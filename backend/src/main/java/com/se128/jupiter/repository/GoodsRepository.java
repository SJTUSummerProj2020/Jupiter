package com.se128.jupiter.repository;

import com.se128.jupiter.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods,Integer> {

    @Query("select g from Goods g")
    List<Goods> getAllGoods();
}
