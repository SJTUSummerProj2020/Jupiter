package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import com.se128.jupiter.repository.OrderRepository;
import com.se128.jupiter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {

    private  final OrderRepository orderRepository;

    private  final GoodsRepository goodsRepository;

    private  final GoodsDetailRepository goodsDetailRepository;

    private final UserRepository userRepository;

    @Autowired
    public OrderDaoImpl(OrderRepository orderRepository, GoodsRepository goodsRepository, GoodsDetailRepository goodsDetailRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.goodsRepository = goodsRepository;
        this.goodsDetailRepository = goodsDetailRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Order addOrder(Order order,Integer detailId) {
        GoodsDetail goodsDetail = goodsDetailRepository.getGoodsDetailByDetailId(detailId);
        if(goodsDetail.getSurplus()==1){
            order.setGoodsDetail(goodsDetail);
            Integer goodsId = goodsDetail.getGoodsId();
            Goods goods = goodsRepository.getGoodsByGoodsId(goodsId);
            goods.setBuyCounter(goods.getBuyCounter()+order.getNumber());
            Integer goodsType = goods.getGoodsType();
            goodsRepository.saveAndFlush(goods);
            order.setGoods(goods);
            Double price = order.getGoodsDetail().getPrice();
            Double totalPrice = price * order.getNumber();
            order.setPrice(totalPrice);
            User user = userRepository.getUserByUserId(order.getUserId());
            switch (goodsType)
            {
                case 0:user.setBuy0(user.getBuy0()+1);break;
                case 1:user.setBuy1(user.getBuy1()+1);break;
                case 2:user.setBuy2(user.getBuy2()+1);break;
                case 3:user.setBuy3(user.getBuy3()+1);break;
            }
            userRepository.saveAndFlush(user);
            return orderRepository.saveAndFlush(order);
        }
        else {
            return null;
        }
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
