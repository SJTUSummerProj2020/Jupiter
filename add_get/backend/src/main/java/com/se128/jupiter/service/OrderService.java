package com.se128.jupiter.service;

import com.se128.jupiter.entity.Order;

import java.util.List;

public interface OrderService {
    Order addOrder(Order order,Integer detailId);

    List<Order> getAllOrders();
}
