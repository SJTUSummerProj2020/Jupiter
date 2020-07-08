package com.se128.jupiter.controller;

import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.service.GoodsService;
import com.se128.jupiter.util.constant.Constant;
import com.se128.jupiter.util.logutils.LogUtil;
import com.se128.jupiter.util.msgutils.Msg;
import com.se128.jupiter.util.msgutils.MsgCode;
import com.se128.jupiter.util.msgutils.MsgUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @RequestMapping("/getGoodsByGoodsId")
    public Msg getGoodsByGoodsId(@RequestBody Map<String, String> params) {

        Integer goodsId = Integer.valueOf(params.get(Constant.GOODSID));
        new LogUtil().info("getGoodsWithGoodsId = " + goodsId);
        Goods goods = goodsService.getGoodsByGoodsId(goodsId);
        if (goods != null) {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS, data);
        } else {
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

    @RequestMapping("/getAllGoods")
    public List<Goods> getAllGoods() {
        new LogUtil().info("getAllGoods");
        return goodsService.getAllGoods();
    }

    @RequestMapping("/getGoodsByGoodsType")
    public List<Goods> getGoodsByGoodsType(@RequestBody Map<String, String> params) {
        Integer goodsType = Integer.valueOf(params.get(Constant.GOODSTYPE));
        new LogUtil().info("getGoodsWithGoodsId = " + goodsType);
        return goodsService.getGoodsByGoodsType(goodsType);
    }

    @RequestMapping("/editGoods")
    public Msg editGoods(@RequestBody Goods goods) {
        new LogUtil().info("editGoods");
        Goods goods1 = goodsService.editGoods(goods);
        if (goods1 != null) {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS, data);
        } else {
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

    @RequestMapping("/addGoods")
    public Msg addGoods(@RequestBody Goods goods) {
        new LogUtil().info("addGoods");
        Goods goods1 = goodsService.addGoods(goods);
        if (goods1 != null) {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS, data);
        } else {
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

    @RequestMapping("/deleteGoodsByGoodsId")
    public Msg deleteGoodsByGoodsId(@RequestBody Map<String, String> params) {
        Integer goodsId = Integer.valueOf(params.get(Constant.GOODSID));
        new LogUtil().info("deleteGoodsWithGoodsId = " + goodsId);
        goodsService.deleteGoodsByGoodsId(goodsId);
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }


}
