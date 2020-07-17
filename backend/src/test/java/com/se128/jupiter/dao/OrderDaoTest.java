package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import com.se128.jupiter.repository.OrderRepository;
import com.se128.jupiter.repository.UserRepository;
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
class OrderDaoTest {
    @Autowired
    private OrderDao orderDao;
    @MockBean
    private OrderRepository orderRepository;
    @MockBean
    private GoodsRepository goodsRepository;
    @MockBean
    private GoodsDetailRepository goodsDetailRepository;
    @MockBean
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void addOrder() {
        Integer userId = 1;
        Integer orderId = 1;
        Integer number = 1;
        Integer detailId = 1890;
        Integer goodsId = 513;
        Integer goodsType = 0;
        Integer boughtNum = 0;
        Double price = 1.0;
        GoodsDetail goodsDetail = new GoodsDetail();
        goodsDetail.setDetailId(detailId);
        goodsDetail.setGoodsId(goodsId);
        goodsDetail.setPrice(price);
        Goods goods = new Goods();
        goods.setGoodsId(goodsId);
        goods.setGoodsType(goodsType);
        goods.setBuyCounter(0);
        Order anOrder = new Order();
        anOrder.setUserId(userId);
        anOrder.setOrderId(orderId);
        anOrder.setNumber(number);
        anOrder.setGoods(goods);
        anOrder.setGoodsDetail(goodsDetail);
        User user = new User();
        user.setUserId(userId);
        user.setBuy0(boughtNum);
        user.setBuy1(boughtNum);
        user.setBuy2(boughtNum);
        user.setBuy3(boughtNum);
        // getSurplus = 1
        goodsDetail.setSurplus(1);
        when(goodsDetailRepository.getGoodsDetailByDetailId(detailId)).thenReturn(goodsDetail);
        when(goodsRepository.getGoodsByGoodsId(goodsId)).thenReturn(goods);
        when(goodsRepository.saveAndFlush((goods))).thenReturn(goods);
        when(orderRepository.saveAndFlush(anOrder)).thenReturn(anOrder);
        when(userRepository.getUserByUserId(userId)).thenReturn(user);
        when(userRepository.saveAndFlush(user)).thenReturn(user);
        for(int i = 0; i<4;++i){
            goodsType = i;
            goods.setGoodsType(goodsType);
            assertEquals(anOrder, orderDao.addOrder(anOrder, detailId));
        }
        // getSurplus != 1
        goodsDetail.setSurplus(0);
        assertNull(orderDao.addOrder(anOrder, detailId));

    }

    @Test
    void getAllOrders() {
        Order anOrder = new Order();
        List<Order> orderList = new ArrayList<>();
        orderList.add(anOrder);
        orderList.add(anOrder);

        when(orderRepository.findAll()).thenReturn(orderList);
        assertEquals(orderList, orderDao.getAllOrders());

    }
}
