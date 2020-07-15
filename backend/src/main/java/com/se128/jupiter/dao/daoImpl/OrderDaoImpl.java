package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.OrderDao;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.entity.Order;
import com.se128.jupiter.repository.GoodsDetailRepository;
import com.se128.jupiter.repository.GoodsRepository;
import com.se128.jupiter.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {

    private  final OrderRepository orderRepository;

    private  final GoodsRepository goodsRepository;

    private  final GoodsDetailRepository goodsDetailRepository;

    @Autowired
    public OrderDaoImpl(OrderRepository orderRepository, GoodsRepository goodsRepository, GoodsDetailRepository goodsDetailRepository) {
        this.orderRepository = orderRepository;
        this.goodsRepository = goodsRepository;
        this.goodsDetailRepository = goodsDetailRepository;
    }


    @Override
    public Order addOrder(Order order,Integer detailId) {
        GoodsDetail goodsDetail = goodsDetailRepository.getGoodsDetailByDetailId(detailId);
        if(goodsDetail.getSurplus()==1){
            order.setGoodsDetail(goodsDetail);
            Integer goodsId = goodsDetail.getGoodsId();
            Goods goods = goodsRepository.getGoodsByGoodsId(goodsId);
            goods.setBuyCounter(goods.getBuyCounter()+order.getNumber());
            goodsRepository.saveAndFlush(goods);
            order.setGoods(goods);
            Double price = order.getGoodsDetail().getPrice();
            Double totalPrice = price * order.getNumber();
            order.setPrice(totalPrice);
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
