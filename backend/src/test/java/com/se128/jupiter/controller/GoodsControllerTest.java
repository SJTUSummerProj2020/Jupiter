package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.util.msgutils.Msg;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import java.util.HashMap;
import java.util.Map;

import static org.skyscreamer.jsonassert.JSONAssert.assertEquals;

class GoodsControllerTest {

    // 模拟request,response
    private MockHttpServletRequest request;
    private MockHttpServletResponse response;

    // 注入loginController
    @Autowired
    private GoodsController goodsController ;

    // 执行测试方法之前初始化模拟request,response
    @BeforeEach
    void setUp() {
        request = new MockHttpServletRequest();
        request.setCharacterEncoding("UTF-8");
        response = new MockHttpServletResponse();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getGoodsByGoodsId() {
        Map<String, String> map = new HashMap<>();
        map.put("goodsId","513");
        Msg msg = goodsController.getGoodsByGoodsId(map);
        System.out.println(msg);
    }

    @Test
    void getAllGoods() {
    }

    @Test
    void getGoodsByGoodsType() {
    }

    @Test
    void editGoods() {
    }

    @Test
    void addGoods() {
    }

    @Test
    void deleteGoodsByGoodsId() {
    }
}
