package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "orderlist")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Order {

    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "detail_id")
    private GoodsDetail goodsDetail;

    private Integer sourceId;
    private Integer number;

    private Double price;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Time time;

    public Double getPrice() {
        return price;
    }

    public GoodsDetail getGoodsDetail() {
        return goodsDetail;
    }

    public int getOrderId() {
        return orderId;
    }

    public Integer getNumber() {
        return number;
    }

    public Integer getSourceId() {
        return sourceId;
    }

    public Time getTime() {
        return time;
    }

    public User getUser() {
        return user;
    }

    public void setGoodsDetail(GoodsDetail goodsDetail) {
        this.goodsDetail = goodsDetail;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setSourceId(Integer sourceId) {
        this.sourceId = sourceId;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
