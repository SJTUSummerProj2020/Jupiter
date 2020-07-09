package com.se128.jupiter.controller;

import com.se128.jupiter.util.msgutils.Msg;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestComponent;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WebAppConfiguration
public class UserControllerTest {
    private MockHttpServletRequest request;
    private MockHttpServletResponse response;
    @Autowired
    private UserController userController;

    @Before
    public void setUp() throws Exception {
        request = new MockHttpServletRequest();
        request.setCharacterEncoding("UTF-8");
        response = new MockHttpServletResponse();
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
            Map<String, String> map = new HashMap<>();
            String username = "root";
            String password = "root";
            map.put("username", username);
            map.put("password", password);
            Msg msg = userController.login(map);
            assertEquals("login failed",0, msg.getStatus());
            assertEquals("login failed", username, msg.getData().get("username"));
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
