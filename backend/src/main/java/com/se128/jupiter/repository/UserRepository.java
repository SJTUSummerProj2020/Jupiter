package com.se128.jupiter.repository;

import com.se128.jupiter.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User getUserByUserId(Integer userId);

    User getUserByUsernameAndPassword(String username, String password);

    User getUserByUsername(String username);
}
