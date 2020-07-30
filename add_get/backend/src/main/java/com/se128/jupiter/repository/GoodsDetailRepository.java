package com.se128.jupiter.repository;

import com.se128.jupiter.entity.GoodsDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface GoodsDetailRepository extends JpaRepository<GoodsDetail,Integer> {

    @Transactional
    @Modifying
    @Query(value ="delete from GoodsDetail where goods_id = ?1", nativeQuery = true)
    void deleteByGoodsId(Integer goodsId);

    
    GoodsDetail getGoodsDetailByDetailId(Integer detailId);
}
