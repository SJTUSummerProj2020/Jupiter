package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "goodsDetail")
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
}
