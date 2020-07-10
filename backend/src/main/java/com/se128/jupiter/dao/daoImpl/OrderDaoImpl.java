package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public Order addOrder(Order order) {
        return orderRepository.saveAndFlush(order);
    }
}
