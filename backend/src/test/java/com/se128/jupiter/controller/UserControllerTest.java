package com.se128.jupiter.controller;

import com.alibaba.fastjson.JSON;
import net.sf.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

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
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(JSON.toJSONString(param))
                    .accept(MediaType.APPLICATION_JSON)
                ).andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn().getResponse().getContentAsString();
            System.out.println(responseString);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void register() {
    }

    @Test
    public void logout() {
    }

    @Test
    public void checkSession() {
    }

    @Test
    public void getOrdersByUserId() {
    }
}
