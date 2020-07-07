package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "orderList")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class Order {

    @Id
    @Column(name = "listId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int listId;

    @OneToOne
    @Column(name = "userId")
    private User user;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Timestamp time;

}
