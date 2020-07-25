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
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WebAppConfiguration
class GoodsControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;
    private MockHttpSession session;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        session = new MockHttpSession();
    }

    @AfterEach
    void tearDown() {
    }

    void loginWithAdmin() throws Exception {
        com.alibaba.fastjson.JSONObject userInfo = new com.alibaba.fastjson.JSONObject();
        userInfo.put("username", "root");
        userInfo.put("password", "root");
        mockMvc.perform(MockMvcRequestBuilders
                .post("/login")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(JSON.toJSONString(userInfo))
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .session(session)
        ).andReturn();
    }

    @Test
    void getGoodsByGoodsId() {
        //OK
        try {
            String goodsId = "513";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);

            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 下架 goodsType<0
        try {
            String goodsId = "2680";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);

            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //No such goodsId
        try {
            String goodsId = "200";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);

            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //No goodsId
        try {
            JSONObject param = new JSONObject();

            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getGoodsByName() {
        //Ok
        try {
            String name = "水";
            JSONObject param = new JSONObject();
            param.put("name", name);

            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByName")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getGoodsByName")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().is4xxClientError())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getAllGoods() {
        //OK
        try {
            String pageId = "0";
            String pageSize = "10";
            String goodsType = "-1";
            JSONObject param = new JSONObject();
            param.put("pageId", pageId);
            param.put("pageSize", pageSize);
            param.put("goodsType", goodsType);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().is4xxClientError())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void editGoods() {
        //OK
        try {
            loginWithAdmin();

            String goodsId = "2000";
            String name = "SJTU毕业会";
            String start_time = "2020-08-07";
            String end_time = "2020-08-07";
            String address = "菁菁堂";
            String website = "i.sjtu.edu.cn";
            String goodsType = "0";
            String image = "0";
            String viewCounter = "0";
            String buyCounter = "0";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            param.put("name", name);
            param.put("startTime", start_time);
            param.put("endTime", end_time);
            param.put("address", address);
            param.put("website", website);
            param.put("goodsType", goodsType);
            param.put("image", image);
            param.put("viewCounter", viewCounter);
            param.put("buyCounter", buyCounter);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/editGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .session(session)
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String goodsId = "100";
            String name = "SJTU毕业会";
            String start_time = "2020-08-07";
            String end_time = "2020-08-07";
            String address = "菁菁堂";
            String website = "i.sjtu.edu.cn";
            String goodsType = "0";
            String image = "0";
            String viewCounter = "0";
            String buyCounter = "0";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            param.put("name", name);
            param.put("startTime", start_time);
            param.put("endTime", end_time);
            param.put("address", address);
            param.put("website", website);
            param.put("goodsType", goodsType);
            param.put("image", image);
            param.put("viewCounter", viewCounter);
            param.put("buyCounter", buyCounter);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/editGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void addGoods() {
        // login
        try{
            com.alibaba.fastjson.JSONObject userInfo = new com.alibaba.fastjson.JSONObject();
            userInfo.put("username", "root");
            userInfo.put("password", "root");
            MvcResult loginResult = mockMvc.perform(MockMvcRequestBuilders
                    .post("/login")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(userInfo))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andReturn();
            System.out.println(loginResult.getResponse().getContentAsString());
        }catch(Exception e){
            e.printStackTrace();
        }

        //OK
        try {
            loginWithAdmin();

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
            param.put("goodsDetails", goodsDetails.toString());
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/addGoods")
                    .session(session)
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/addGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isBadRequest())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void deleteGoodsByGoodsId() {
        //Ok
        try {
            loginWithAdmin();

            String goodsId = "522";
            JSONObject param = new JSONObject();
            param.put("goodsId", goodsId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/deleteGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/deleteGoodsByGoodsId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getPopularGoods() {
        //OK
        try {
            String number = "3";
            JSONObject param = new JSONObject();
            param.put("number", number);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getPopularGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Error
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getPopularGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().is4xxClientError())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getAllAuctions() {
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllAuctions")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getAuctionByAuctionId() {
        try {
            String auctionId = "1";
            JSONObject param = new JSONObject();
            param.put("auctionId", auctionId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAuctionByAuctionId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // wrong format
        try {
            String auctionId = "a";
            JSONObject param = new JSONObject();
            param.put("auctionId", auctionId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAuctionByAuctionId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // null pointer
        try {
            JSONObject param = new JSONObject();
            param.put("auctionId", "10000");
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAuctionByAuctionId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    @Transactional
    @Rollback(value = true)
    void updateAuction() {
        try {
            loginWithAdmin();
            Integer userId = 1;
            Integer auctionId = 1;
            Double offer = 10.0;
            JSONObject param = new JSONObject();
            param.put("userId", userId);
            param.put("auctionId", auctionId);
            param.put("offer", offer);
            // offer is lower than bestOffer
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/updateAuction")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .session(session)
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
            offer = 170.0;
            // offer is greater or equal to bestOffer
            param.put("offer", offer);
            responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/updateAuction")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getRecommendGoods() {
        try {
            Integer number = 10;
            Integer userId = 1;
            JSONObject param = new JSONObject();
            param.put("number", number);
            param.put("userId", userId);
            // getGoodsByType
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getRecommendGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
            // getAllGoods
            param.put("userId", null);
            responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getRecommendGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            loginWithAdmin();
            JSONObject param = new JSONObject();
            // getAllGoods
            mockMvc.perform(MockMvcRequestBuilders
                    .post("/getRecommendGoods")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .session(session)
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void addAuction() {
        try {
            loginWithAdmin();
            Integer detailId = 11817;
            Integer goodsId = 2679;
            Double startingPrice = 100.0;
            Double addingPrice = 10.0;
            String startTime = "2020-07-16 10:00:00";
            Integer duration = 1;
            JSONObject param = new JSONObject();
            param.put("detailId", detailId);
            param.put("goodsId", goodsId);
            param.put("startingPrice", startingPrice);
            param.put("addingPrice", addingPrice);
            param.put("startTime", startTime);
            param.put("duration", duration);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/addAuction")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        }catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void deleteAuctionByAuctionId() {
        try {
            loginWithAdmin();
            Integer auctionId = 1;
            JSONObject param = new JSONObject();
            param.put("auctionId", auctionId);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/deleteAuctionByAuctionId")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getAllAuction() {
        try {
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getAllAuctions")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content("{}")
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void editAuction() {

        try {
            loginWithAdmin();
            Integer auctionId = 1;
            Integer detailId = 11817;
            Integer goodsId = 2679;
            Double startingPrice = 100.0;
            Double addingPrice = 10.0;
            String startTime = "2020-07-16 10:00:00";
            Integer duration = 1;
            JSONObject param = new JSONObject();
            param.put("auctionId", auctionId);
            param.put("detailId", detailId);
            param.put("goodsId", goodsId);
            param.put("startingPrice", startingPrice);
            param.put("addingPrice", addingPrice);
            param.put("startTime", startTime);
            param.put("duration", duration);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/editAuction")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(param.toString())
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                    .session(session)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
