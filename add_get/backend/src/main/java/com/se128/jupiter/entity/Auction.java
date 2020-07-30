package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;

import javax.persistence.*;

@Entity
@Table(name = "auction")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Auction {

    @Id
    @Column(name = "auction_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer auctionId;

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

    private Integer duration;

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

    public Integer getAuctionId() {
        return auctionId;
    }

    public Integer getDuration() {
        return duration;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setAuctionId(Integer actionId) {
        this.auctionId = auctionId;
    }

    public void setAddingPrice(Double addingPrice) {
        this.addingPrice = addingPrice;
    }

    public void setBestOffer(Double bestOffer) {
        this.bestOffer = bestOffer;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setStartingPrice(Double startingPrice) {
        this.startingPrice = startingPrice;
    }
}
