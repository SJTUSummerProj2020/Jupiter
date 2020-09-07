package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    private final UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }


    @Override
    public User getUserByUserId(Integer userId) {
        return userDao.getUserByUserId(userId);
    }

    @Override
    public User getUserByUsernameAndPassword(String username, String password) {
        return userDao.getUserByUsernameAndPassword(username, password);
    }

    @Override
    public User addUser(User user) {
        return userDao.addUser(user);
    }

    @Override
    public List<Order> getOrdersByUserId(Integer userId) {
        return userDao.getOrdersByUserId(userId);
    }

    @Override
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    @Override
    public User changeUserStatusByUserId(Integer userId) {
        return userDao.changeUserStatusByUserId(userId);
    }

    @Override
    public User editUser(User user) {
        return userDao.editUser(user);
    }
}
