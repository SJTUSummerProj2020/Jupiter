package com.se128.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "user_name")
    private String username;

    @Column(name = "password")
    private String password;

    private String phone;
    private Integer userType;

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<Order> orders;

    private Integer buy0;
    private Integer buy1;
    private Integer buy2;
    private Integer buy3;

    public Integer getUserId() {
        return this.userId;
    }

    public String getUsername() {
        return this.username;
    }

    public Integer getUserType() {
        return this.userType;
    }

    public List<Order> getOrders() {
        return this.orders;
    }

    public String getPassword() {
        return this.password;
    }

    public String getPhone() {
        return phone;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setUserType(Integer userType) {
        this.userType = userType;
    }

    public Integer getBuy0() {
        return buy0;
    }

    public Integer getBuy1() {
        return buy1;
    }

    public Integer getBuy2() {
        return buy2;
    }

    public Integer getBuy3() {
        return buy3;
    }

    public void setBuy0(Integer buy0) {
        this.buy0 = buy0;
    }

    public void setBuy1(Integer buy1) {
        this.buy1 = buy1;
    }

    public void setBuy2(Integer buy2) {
        this.buy2 = buy2;
    }

    public void setBuy3(Integer buy3) {
        this.buy3 = buy3;
    }
}
