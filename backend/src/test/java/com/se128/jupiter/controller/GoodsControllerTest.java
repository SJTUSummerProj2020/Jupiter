package com.se128.jupiter.controller;

import com.alibaba.fastjson.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.transaction.Transactional;
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WebAppConfiguration
class GoodsControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getGoodsByGoodsId() {
        try{
            String goodsId = "513";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    void getAllGoods() {
        try{
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllGoods")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    void getGoodsByGoodsType() {
        try{
            String goodsType = "0";
            JSONObject param = new JSONObject();
            param.put("goodsType", goodsType);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllGoods")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    void editGoods() {
        try{
            String goodsId = "100";
            String name = "SJTU毕业会";
            String start_time = "2020-08-07";
            String end_time = "2020-08-07";
            String address = "菁菁堂";
            String website = "i.sjtu.edu.cn";
            String goodsType = "0";
            String image = "0";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            param.put("name", name);
            param.put("start_time", start_time);
            param.put("end_time", end_time);
            param.put("address", address);
            param.put("website", website);
            param.put("goodsType", goodsType);
            param.put("image", image);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/editGoods")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = false)
    void addGoods() {
        try{
            String price = "188";
            String surplus = "0";
            String time = "2020-08-07 星期五 20:00";
            String ticketType = "预售票（188.00）";
            String name = "SJTU毕业会";
            String startTime = "2020-08-07";
            String endTime = "2020-08-07";
            String address = "菁菁堂";
            String website = "i.sjtu.edu.cn";
            String goodsType = "0";
            String image = "0";
            JSONObject detail = new JSONObject();
            detail.put("price", price);
            detail.put("surplus", surplus);
            detail.put("time", time);
            detail.put("ticketType", ticketType);
            JSONArray goodsDetails = new JSONArray();
            goodsDetails.add(detail);
            JSONObject param = new JSONObject();
            param.put("name", name);
            param.put("startTime", startTime);
            param.put("endTime", endTime);
            param.put("address", address);
            param.put("website", website);
            param.put("goodsType", goodsType);
            param.put("image", image);
            param.put("goodsDetails",goodsDetails.toString());
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/addGoods")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void deleteGoodsByGoodsId() {
        try{
            String goodsId = "522";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/deleteGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
