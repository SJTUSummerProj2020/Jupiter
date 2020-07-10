package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Order;
import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.service.OrderService;
import com.se128.jupiter.util.msgutils.Msg;
import com.se128.jupiter.util.msgutils.MsgCode;
import com.se128.jupiter.util.msgutils.MsgUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.Map;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private GoodsService goodsService;

    @RequestMapping("/addOrder")
    public Msg addOrder(@RequestBody Map<String,String> params)
    {
        System.out.println("addOrder");

        Order order = new Order();

        Integer userId = Integer.valueOf(params.get("userId"));
        Integer number = Integer.valueOf(params.get("number"));
        Integer detailId = Integer.valueOf(params.get("detailId"));

        order.setUserId(userId);
        order.setNumber(number);

        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        order.setTime(timestamp);

        order.setSourceId(54749110);

        Order order1 = orderService.addOrder(order,detailId);

        if(order1 != null){
            JSONObject data = JSONObject.fromObject(order1);
            data.remove()
            return MsgUtil.makeMsg(MsgCode.SUCCESS,MsgUtil.BUY_SUCCESS_MSG,data);
        }
        else
        {
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }
}



