package com.se128.jupiter;

import org.junit.*;
import static org.junit.Assert.*;

import com.se128.jupiter.entity.User;
import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.service.OrderService;
import com.se128.jupiter.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class JupiterApplicationTests {
    @Test
    void testContext() {
    }

    @Test
    void main()
    {
        String[] args = new String[0];
        JupiterApplication.main(args);
    }
}
