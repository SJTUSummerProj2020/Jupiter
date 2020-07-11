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

    private final GoodsService goodsService;

    @Autowired
    public GoodsController(GoodsService goodsService) {
        this.goodsService = goodsService;
    }

    @RequestMapping("/getGoodsByGoodsId")
    public Msg getGoodsByGoodsId(@RequestBody Map<String, String> params) {
        Integer goodsId = Integer.valueOf(params.get(Constant.GOODSID));
        LogUtil.info("getGoodsByGoodsId = " + goodsId);
        Goods goods = goodsService.getGoodsByGoodsId(goodsId);
        if (goods != null) {
            JSONObject data = JSONObject.fromObject(goods);
            return MsgUtil.makeMsg(MsgCode.SUCCESS, data);
        } else {
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }

    @RequestMapping("/getGoodsByName")
    public List<Goods> getGoodsByName(@RequestBody Map<String, String> params) {
        String name = params.get(Constant.NAME);
        LogUtil.info("getGoodsByName = " + name);
        return goodsService.getGoodsByName(name);
    }


    @RequestMapping("/getAllGoods")
    public List<Goods> getAllGoods() {
        LogUtil.info("getAllGoods");
        return goodsService.getAllGoods();
    }

    @RequestMapping("/getGoodsByGoodsType")
    public List<Goods> getGoodsByGoodsType(@RequestBody Map<String, String> params) {
        Integer goodsType = Integer.valueOf(params.get(Constant.GOODSTYPE));
        LogUtil.info("getGoodsByGoodsType = " + goodsType);
//        List<Goods> goods = goodsService.getGoodsByGoodsType(goodsType);
//        JSONArray jsonArray = JSONArray.fromObject(goods);
//        JSONObject jsonObject = new JSONObject();
//        jsonObject.put("goods",jsonArray.toString());

        return goodsService.getGoodsByGoodsType(goodsType);
    }

    @RequestMapping("/editGoods")
    public Msg editGoods(@RequestBody Goods goods) {
        LogUtil.info("editGoods");
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
        LogUtil.info("addGoods");
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
        LogUtil.info("deleteGoodsWithGoodsId = " + goodsId);
        goodsService.deleteGoodsByGoodsId(goodsId);
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }

}
