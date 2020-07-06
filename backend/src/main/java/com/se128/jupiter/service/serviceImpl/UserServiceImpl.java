package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserByUserId(Integer userId){ return userDao.getUserByUserId(userId);}
}
