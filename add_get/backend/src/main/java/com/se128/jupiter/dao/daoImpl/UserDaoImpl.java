package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.repository.GoodsRepository;
import com.se128.jupiter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    private  final UserRepository userRepository;

    @Autowired
    public UserDaoImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User getUserByUserId(Integer userId){
        return userRepository.getUserByUserId(userId);
    }

    @Override
    public User getUserByUsernameAndPassword(String username, String password)
    {
        return userRepository.getUserByUsernameAndPassword(username,password);
    }

    @Override
    public User addUser(User user)
    {
        User user1 = userRepository.getUserByUsername(user.getUsername());
        if(user1 == null)
        {
            return userRepository.saveAndFlush(user);
        }
        else {
            return null;
        }
    }

    @Override
    public List<Order> getOrdersByUserId(Integer userId)
    {
        User user = userRepository.getUserByUserId(userId);
        return user.getOrders();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User changeUserStatusByUserId(Integer userId) {
        User user = userRepository.getUserByUserId(userId);
        if(user == null)
        {
            return null;
        }
        Integer status = user.getUserType();
        user.setUserType(-status);
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User editUser(User user) {
        User user1 = userRepository.getUserByUserId(user.getUserId());
        user1.setBuy0(user.getBuy0());
        user1.setBuy1(user.getBuy1());
        user1.setBuy2(user.getBuy2());
        user1.setBuy3(user.getBuy3());
        user1.setUserType(user.getUserType());
        user1.setUsername(user1.getUsername());
        user1.setPhone(user.getPhone());
        user1.setPassword(user.getPassword());
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.getUserByUsername(username);
    }
}
