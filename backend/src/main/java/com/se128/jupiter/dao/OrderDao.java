package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Order;

import java.util.List;

public interface OrderDao {

    Order addOrder(Order order,Integer detailId);

    List<Order> getAllOrders();
}
