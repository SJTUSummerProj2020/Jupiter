package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public void addOrder(Order order) {

    }
}