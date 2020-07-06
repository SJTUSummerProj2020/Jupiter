package com.se128.jupiter.dao;

import com.se128.jupiter.entity.User;

public interface UserDao {

    User getUserByUserId(Integer userId);
}
