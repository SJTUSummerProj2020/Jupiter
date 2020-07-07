package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "goods")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Goods{

    @Id
    @Column(name = "goodsId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer goodsId;

    @Transient
    private String image;

}
