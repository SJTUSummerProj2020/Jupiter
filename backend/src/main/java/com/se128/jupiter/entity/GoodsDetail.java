package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "goodsdetail")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class GoodsDetail {
    @Id
    @Column(name = "detail_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailId;

    @Column(name = "goods_id")
    private Integer goodsId;

    private Double price;

    private Integer surplus;

    private String time;

    private String ticketType;


    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public Integer getDetailId() {
        return detailId;
    }

    public void setDetailId(Integer detailId) {
        this.detailId = detailId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getSurplus() {
        return surplus;
    }

    public String getTicketType() {
        return ticketType;
    }

    public String getTime() {
        return time;
    }

    public void setSurplus(Integer surplus) {
        this.surplus = surplus;
    }

}
