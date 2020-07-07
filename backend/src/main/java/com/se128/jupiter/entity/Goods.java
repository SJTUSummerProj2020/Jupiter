package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "goods")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Goods{

    @Id
    @Column(name = "goods_id")
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
    @Column(name = "goods_id")
    private List<GoodsDetail> goodsDetails;

    public void setImage(String image) {
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public Integer getGoodsType() {
        return goodsType;
    }

    public List<GoodsDetail> getGoodsDetails() {
        return goodsDetails;
    }

    public String getName() {
        return name;
    }

    public String getPlace() {
        return place;
    }

    public String getWebsite() {
        return website;
    }

    public void setGoodsDetails(List<GoodsDetail> goodsDetails) {
        this.goodsDetails = goodsDetails;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public void setGoodsType(Integer goodsType) {
        this.goodsType = goodsType;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
