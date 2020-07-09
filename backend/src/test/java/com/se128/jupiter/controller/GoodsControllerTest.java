package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.util.msgutils.Msg;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WebAppConfiguration
class GoodsControllerTest {

    @Autowired
    private GoodsController goodsController ;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getGoodsByGoodsId() {
        try{
            String goodsId = "513";
            Map<String, String> map = new HashMap<>();
            map.put("goodsId", goodsId);

            String name = "【杭州】「初夏人生」嘻哈派对";
            Msg msg = goodsController.getGoodsByGoodsId(map);
            assertEquals("get failed",0, msg.getStatus());
            assertEquals("get right",name, msg.getData().get("name"));
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    void getAllGoods() {
        try{
            List<Goods> orders = goodsController.getAllGoods();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    void getGoodsByGoodsType() {
        try{
            String goodsType = "0";
            Map<String, String> map = new HashMap<>();
            map.put("goodsType", goodsType);
            List<Goods> orders = goodsController.getGoodsByGoodsType(map);
        } catch (Exception e){
            e.printStackTrace();
        }
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
