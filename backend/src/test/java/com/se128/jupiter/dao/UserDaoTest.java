package com.se128.jupiter.dao;

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

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserDaoTest {
    @Autowired
    private UserDao userDao;
    @MockBean
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getUserByUserId() {
        Integer userId = 1;
        User user = new User();
        user.setUserId(userId);

        when(userRepository.getUserByUserId(userId)).thenReturn(user);
        assertEquals(user, userDao.getUserByUserId(userId));
    }

    @Test
    void getUserByUsernameAndPassword() {
        String username = "root";
        String password = "root";
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        when(userRepository.getUserByUsernameAndPassword(username, password)).thenReturn(user);
        assertEquals(user, userDao.getUserByUsernameAndPassword(username, password));
    }

    @Test
    void addUser() {
        String username = "root";
        User user = new User();
        user.setUsername(username);
        // user1 = null
        when(userRepository.getUserByUsername(username)).thenReturn(null);
        when(userRepository.saveAndFlush(user)).thenReturn(user);
        assertEquals(user, userDao.addUser(user));
        // user1 != null
        when(userRepository.getUserByUsername(username)).thenReturn(user);
        assertNull(userDao.addUser(user));
    }

    @Test
    void getOrdersByUserId() {
        Order order = new Order();
        List<Order> orderList = new ArrayList<>();
        orderList.add(order);
        orderList.add(order);
        Integer userId = 1;
        User user = new User();
        user.setOrders(orderList);
        user.setUserId(userId);

        when(userRepository.getUserByUserId(userId)).thenReturn(user);
        assertEquals(orderList, userDao.getOrdersByUserId(userId));
    }

    @Test
    void getAllUsers() {
        User user = new User();
        List<User> userList = new ArrayList<>();
        userList.add(user);
        userList.add(user);

        when(userRepository.findAll()).thenReturn(userList);
        assertEquals(userList, userDao.getAllUsers());
    }

    @Test
    void changeUserStatusByUserId() {
        Integer userId = 1;
        Integer userType = 1;
        User user = new User();
        user.setUserId(userId);
        user.setUserType(userType);
        User user1 = new User();
        user1.setUserId(userId);
        user1.setUserType(-userType);
        // user != null
        when(userRepository.getUserByUserId(userId)).thenReturn(user);
        when(userRepository.saveAndFlush(user)).thenReturn(user1);
        assertEquals(user1, userDao.changeUserStatusByUserId(userId));
        // user = null
        when(userRepository.getUserByUserId(userId)).thenReturn(null);
        assertNull(userDao.changeUserStatusByUserId(userId));

    }

    @Test
    void saveUser(){
        User user = new User();

        when(userRepository.saveAndFlush(user)).thenReturn(user);
        assertEquals(user, userDao.saveUser(user));
    }
}
