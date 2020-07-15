package com.se128.jupiter.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "auction")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Auction {

    @Id
    @Column(name = "auction_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer actionId;

    @OneToOne
    @JoinColumn(name = "detail_id")
    private GoodsDetail goodsDetail;

    @OneToOne
    @JoinColumn(name = "goods_id")
    private Goods goods;

    private Integer userId;

    private Double startingPrice;

    private Double addingPrice;

    private Double bestOffer;

    private String startTime;

    private String duration;

    public Goods getGoods() {
        return goods;
    }

    public void setGoods(Goods goods) {
        this.goods = goods;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setGoodsDetail(GoodsDetail goodsDetail) {
        this.goodsDetail = goodsDetail;
    }

    public Integer getUserId() {
        return userId;
    }

    public GoodsDetail getGoodsDetail() {
        return goodsDetail;
    }

    public Double getAddingPrice() {
        return addingPrice;
    }

    public Double getBestOffer() {
        return bestOffer;
    }

    public Double getStartingPrice() {
        return startingPrice;
    }

    public Integer getActionId() {
        return actionId;
    }

    public String getDuration() {
        return duration;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setActionId(Integer actionId) {
        this.actionId = actionId;
    }

    public void setAddingPrice(Double addingPrice) {
        this.addingPrice = addingPrice;
    }

    public void setBestOffer(Double bestOffer) {
        this.bestOffer = bestOffer;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public void setStartingPrice(Double startingPrice) {
        this.startingPrice = startingPrice;
    }
}
