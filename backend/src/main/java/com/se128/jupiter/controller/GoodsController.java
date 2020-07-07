package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.util.msgutils.Msg;
import com.se128.jupiter.util.msgutils.MsgCode;
import com.se128.jupiter.util.msgutils.MsgUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @RequestMapping("/getGoodsByGoodsId")
    public Msg getGoodsByGoodsId(@RequestParam("goodsId") Integer goodsId) {
        System.out.println("getGoodsWithGoodsId = " + goodsId);
        Goods goods = goodsService.getGoodsByGoodsId(goodsId);

        if(goods != null)
        {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS,data);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

    @RequestMapping("/getAllGoods")
    public Msg getAllGoods() {
        System.out.println("getAllGoods");
        List<Goods> goods = goodsService.getAllGoods();
        if(goods != null)
        {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS,data);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

}
