package com.se128.jupiter.service;

import com.se128.jupiter.entity.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
class UserServiceTest {

    @Autowired
    private UserService userService ;

    @Test
    void getUserByUserId() {
        User user = userService.getUserByUserId(1);

        System.out.println(1);
    }

    @Test
    void getUserByUsernameAndPassword() {
    }

    @Test
    void addUser() {
    }

    @Test
    void getOrdersByUserId() {
    }
}
