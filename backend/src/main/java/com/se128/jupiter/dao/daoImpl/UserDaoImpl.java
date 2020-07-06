package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserRepository userRepository;

    @Override
    public User getUserByUserId(Integer userId){
        return userRepository.getUserByUserId(userId);
    }
}
