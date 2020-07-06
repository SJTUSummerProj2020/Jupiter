package com.se128.jupiaonet.controller;

import com.se128.jupiaonet.entity.User;
import com.se128.jupiaonet.service.UserService;
import com.se128.jupiaonet.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getUserById")
    public User getUserById(@RequestBody Map<String, String> params) {
        System.out.println("getUserById");
        Integer userId = Integer.valueOf(params.get(Constant.USER_ID));
        return userService.getUserByUserId(userId);
    }
}
