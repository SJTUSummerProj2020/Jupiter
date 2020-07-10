package com.se128.jupiter.controller;

import com.alibaba.fastjson.JSON;
import com.se128.jupiter.util.msgutils.Msg;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.JsonPathResultMatchers;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WebAppConfiguration
public class UserControllerTest {
    @Autowired
    private UserController userController;
    @Autowired
    private WebApplicationContext webApplicationContext;
    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void getUserById() {
        try{
            // login
            JSONObject userInfo = new JSONObject();
            userInfo.put("username", "root");
            userInfo.put("password", "root");
            MvcResult loginResult = mockMvc.perform(MockMvcRequestBuilders
                    .post("/login")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(userInfo))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andReturn();
            System.out.println(loginResult.getResponse().getContentAsString());

            // get user by userId
            JSONObject param = new JSONObject();
            param.put("userId", 1);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/getUserById")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void login() {
        try{
//            Map<String, String> map = new HashMap<>();
//            String username = "root";
//            String password = "root";
//            map.put("username", username);
//            map.put("password", password);
//            Msg msg = userController.login(map);
//            assertEquals("login failed",0, msg.getStatus());
//            assertEquals("login failed", username, msg.getData().get("username"));

            JSONObject param = new JSONObject();
            param.put("username", "root");
            param.put("password", "root");
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/login")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
                ).andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn().getResponse().getContentAsString();
            JSONObject respond = (JSONObject) JSON.parseObject(responseString);
            assertEquals("登陆测试失败",0, respond.get("status"));
            System.out.println(responseString);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    public void register() {
        try{
            // 测试重复用户名测试
            String username = "user1";
            String password = "user1";
            JSONObject param = new JSONObject();
            param.put("username", username);
            param.put("password", password);
            param.put("phone", 1);
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/register")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
            JSONObject respond = (JSONObject) JSON.parseObject(responseString);
            assertEquals("重复用户名测试失败",-102, respond.get("status"));
            System.out.println(responseString);

            // 测试注册
            username = "user2";
            password = "user2";
            param.put("username", username);
            param.put("password", password);
            responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/register")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
            respond = (JSONObject) JSON.parseObject(responseString);
            assertEquals("新注册用户失败", 0, respond.get("status"));
            System.out.println(responseString);

        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void logout() {
        try{
            // 先登录才能登出
            JSONObject userInfo = new JSONObject();
            userInfo.put("username", "root");
            userInfo.put("password", "root");
            MvcResult loginResult = mockMvc.perform(MockMvcRequestBuilders
                    .post("/login")
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .content(JSON.toJSONString(userInfo))
                    .accept(MediaType.APPLICATION_JSON_UTF8)
            ).andReturn();
            System.out.println(loginResult.getResponse().getContentAsString());

            JSONObject param = new JSONObject();
            String responseString = mockMvc.perform(MockMvcRequestBuilders
                    .post("/logout")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
            ).andExpect(MockMvcResultMatchers.status().isOk())
                    .andDo(MockMvcResultHandlers.print())
                    .andReturn().getResponse().getContentAsString();
            JSONObject respond = (JSONObject) JSON.parseObject(responseString);
            assertEquals("登出失败", -101, respond.get("status"));
            System.out.println(responseString);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void checkSession() {
        try{
            // before login status should be 1
            JSONObject param = new JSONObject();


            // after login status should be 0
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void getOrdersByUserId() {
    }
}
