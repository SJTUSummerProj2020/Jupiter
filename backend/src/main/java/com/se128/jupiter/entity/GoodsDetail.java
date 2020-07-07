package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "goodsdetail")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class GoodsDetail {
    @Id
    @Column(name = "detail_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailId;

    @ManyToOne
    @JoinColumn(name = "goods_id")
    private Goods goods;

    private Double price;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Time time;

    private String sessions;

    @Column(name = "ticket_type")
    private Integer ticketType;
    @Transient
    private String image;

    public void setTime(Time time) {
        this.time = time;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Time getTime() {
        return time;
    }

    public Double getPrice() {
        return price;
    }

    public Goods getGoods() {
        return goods;
    }

    public Integer getDetailId() {
        return detailId;
    }

    public Integer getTicketType() {
        return ticketType;
    }

    public String getImage() {
        return image;
    }

    public String getSessions() {
        return sessions;
    }

    public void setDetailId(Integer detailId) {
        this.detailId = detailId;
    }

    public void setGoods(Goods goods) {
        this.goods = goods;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setSessions(String sessions) {
        this.sessions = sessions;
    }

    public void setTicketType(Integer ticketType) {
        this.ticketType = ticketType;
    }
}
