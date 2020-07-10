package com.se128.jupiter.service;

import com.se128.jupiter.entity.Order;

public interface OrderService {
    Order addOrder(Order order,Integer detailId);
}
