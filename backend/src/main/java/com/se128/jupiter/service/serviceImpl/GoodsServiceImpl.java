package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class GoodsServiceImpl implements GoodsService {
    @Autowired
    private GoodsDao goodsDao;

    public List<Goods> getAllGoods(){
        return goodsDao.getAllGoods();
    }
}
