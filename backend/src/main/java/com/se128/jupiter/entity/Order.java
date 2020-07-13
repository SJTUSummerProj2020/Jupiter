package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "orderlist")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Order {

    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;

    @Column(name = "user_id")
    private Integer userId;

    @OneToOne
    @JoinColumn(name = "detail_id")
    private GoodsDetail goodsDetail;

    @OneToOne
    @JoinColumn(name = "goods_id")
    private Goods goods;

    private Integer sourceId;
    private Integer number;

    private Double price;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private String time;

    public Double getPrice() {
        return price;
    }

    public GoodsDetail getGoodsDetail() {
        return goodsDetail;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public Integer getNumber() {
        return number;
    }

    public Integer getSourceId() {
        return sourceId;
    }

    public String getTime() {
        return time;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setGoodsDetail(GoodsDetail goodsDetail) {
        this.goodsDetail = goodsDetail;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setSourceId(Integer sourceId) {
        this.sourceId = sourceId;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setGoods(Goods goods) {
        this.goods = goods;
    }

    public Goods getGoods() {
        return goods;
    }
}
