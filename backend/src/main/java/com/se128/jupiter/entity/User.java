package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String username;
    private String password;

    private String phone;
    private Integer userType;

    @OneToMany()
    @JoinColumn(name="user_id")
    private List<Order> orders;

    public Integer getUserId() {
        return this.userId;
    }

    public String getUsername() {
        return this.username;
    }

    public Integer getUserType() {
        return this.userType;
    }

    public List<Order> getOrders(){
        return this.orders;
    }
}
