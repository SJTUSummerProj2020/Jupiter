package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "goods")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Goods{

    @Id
    @Column(name = "goodsId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer goodsId;

    private String name;
    private String place;
    private String website;

    private Integer goodsType;

    @Transient
    private String image;

    @Transient
    @OneToMany
    @Column(name = "goodsId")
    private List<GoodsDetail> goodsDetails;

}
