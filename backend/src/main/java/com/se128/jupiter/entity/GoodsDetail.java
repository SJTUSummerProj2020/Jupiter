package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "goodsDetail")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class GoodsDetail {
    @Id
    @Column(name = "detailId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailId;

    @Transient
    private String image;
}
