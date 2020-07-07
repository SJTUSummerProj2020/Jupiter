package com.se128.jupiter.repository;

import com.se128.jupiter.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodsRepository extends JpaRepository<Goods,Integer> {
}
