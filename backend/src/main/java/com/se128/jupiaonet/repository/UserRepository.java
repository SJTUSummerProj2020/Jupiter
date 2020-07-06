package com.se128.jupiaonet.repository;

import com.se128.jupiaonet.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User getUserByUserId(Integer userId);
}
