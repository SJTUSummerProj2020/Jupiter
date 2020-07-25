package com.se128.jupiter.service;

import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;

    @MockBean
    private UserDao userDao;


    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getUserByUserId() {
        User user = new User();
        Integer userId = 1;
        user.setUserId(userId);
        user.setUsername("root");
        when(userDao.getUserByUserId(userId)).thenReturn(user);
        assertEquals(user, userService.getUserByUserId(userId));
    }

    @Test
    void getUserByUsernameAndPassword() {
        User user = new User();
        Integer userId = 1;
        String username = "root";
        String password = "root";
        user.setUserId(userId);
        user.setUsername(username);
        user.setPassword(password);
        when(userDao.getUserByUsernameAndPassword(username, password)).thenReturn(user);
        assertEquals(user, userService.getUserByUsernameAndPassword(username, password));
    }

    @Test
    void addUser() {
        User user = new User();
        Integer userId = 1;
        String username = "root";
        String password = "root";
        user.setUserId(userId);
        user.setUsername(username);
        user.setPassword(password);
        when(userDao.addUser(user)).thenReturn(user);
        assertEquals(user, userService.addUser(user));
    }

    @Test
    void getOrdersByUserId() {
        Integer userId = 1;
        Order anOrder = new Order();
       // anOrder.setUserId(userId);
        anOrder.setOrderId(1);
        anOrder.setPrice(1.0);
        anOrder.setNumber(1);
        List<Order> orders = new LinkedList<>();
        orders.add(anOrder);
        orders.add(anOrder);

        when(userDao.getOrdersByUserId(userId)).thenReturn(orders);
        assertEquals(orders, userService.getOrdersByUserId(userId));
    }

    @Test
    void getAllUsers() {
        Integer userId = 1;
        String username = "root";
        String password = "root";
        User user = new User();
        user.setUserId(userId);
        user.setUsername(username);
        user.setPassword(password);
        List<User> users = new LinkedList<>();
        users.add(user);
        users.add(user);

        when(userDao.getAllUsers()).thenReturn(users);
        assertEquals(users, userService.getAllUsers());
    }

    @Test
    void changeUserStatusByUserId() {
        Integer userId = 1;
        String username = "root";
        String password = "root";
        User user = new User();
        user.setUserId(userId);
        user.setUsername(username);
        user.setPassword(password);

        when(userDao.changeUserStatusByUserId(userId)).thenReturn(user);
        assertEquals(user, userService.changeUserStatusByUserId(userId));
    }
}
