package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private GoodsDao goodsDao;

    @Override
    public Order addOrder(Order order,Integer detailId) {
         return orderDao.addOrder(order,detailId);
    }
}
