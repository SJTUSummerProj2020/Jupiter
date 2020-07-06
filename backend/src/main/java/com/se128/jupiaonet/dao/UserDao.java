package com.se128.jupiaonet.dao;

import com.se128.jupiaonet.entity.User;

public interface UserDao {

    User getUserByUserId(Integer userId);
}
