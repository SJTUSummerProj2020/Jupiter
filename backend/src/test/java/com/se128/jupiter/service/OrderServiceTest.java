package com.se128.jupiter.service;

import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Order;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class OrderServiceTest {
    @Autowired
    private OrderService orderService;

    @MockBean
    private OrderDao orderDao;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void addOrder() {
        Integer orderId = 1;
        Integer userId = 1;
        Integer detailId = 1;
        Order anOrder = new Order();
        anOrder.setOrderId(orderId);
        //anOrder.setUserId(userId);

        when(orderDao.addOrder(anOrder, detailId)).thenReturn(anOrder);
        assertEquals(anOrder, orderService.addOrder(anOrder, detailId));
    }

    @Test
    void getAllOrders() {
        Integer orderId = 1;
        Integer userId = 1;
        Integer detailId = 1;
        Order anOrder = new Order();
        anOrder.setOrderId(orderId);
        //anOrder.setUserId(userId);
        List<Order> orderList = new ArrayList<>();
        orderList.add(anOrder);
        orderList.add(anOrder);

        when(orderDao.getAllOrders()).thenReturn(orderList);
        assertEquals(orderList, orderService.getAllOrders());
    }
}
