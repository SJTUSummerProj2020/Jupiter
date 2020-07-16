package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.AuctionDao;
import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GoodsServiceImpl implements GoodsService {

    private final GoodsDao goodsDao;

    private final AuctionDao auctionDao;

    private HashMap<Integer,Integer> goodsViewCounter;

    @Autowired
    public GoodsServiceImpl(GoodsDao goodsDao, AuctionDao auctionDao) {
        this.goodsDao = goodsDao;
        this.auctionDao = auctionDao;
        this.goodsViewCounter = new HashMap<Integer,Integer>();
    }

    @Override
    public Goods getGoodsByGoodsId(Integer goodsId) {
        Goods goods = goodsDao.getGoodsByGoodsId(goodsId);
        if(goods != null)
        {
            this.goodsViewCounter.merge(goodsId, 1, Integer::sum);
            System.out.println(goodsViewCounter.get(goodsId));
        }
        return goods;
    }

    @Override
    public Goods editGoods(Goods goods) {
        return goodsDao.editGoods(goods);
    }

    @Override
    public Goods addGoods(Goods goods) {
        return goodsDao.addGoods(goods);
    }

    @Override
    public void deleteGoodsByGoodsId(Integer goodsId) {
        goodsDao.deleteGoodsByGoodsId(goodsId);
    }

    @Override
    public List<Goods> getGoodsByGoodsType(Integer goodsType) {
        return goodsDao.getGoodsByGoodsType(goodsType);
    }

    @Override
    public List<Goods> getGoodsByName(String name) {
        return goodsDao.getGoodsByName(name);
    }

    @Override
    public List<Goods> getGoodsByPageId(Integer pageId) {
        return goodsDao.getGoodsByPage(pageId);
    }

    @Override
    public Page<Goods> getAllGoods(Integer pageId, Integer pageSize, Integer goodsType) {
        return goodsDao.getAllGoods(pageId,pageSize,goodsType);
    }

    @Override
    public void saveViewCounter() {
        goodsDao.saveViewCounter(this.goodsViewCounter);
    }

    @Override
    public List<Goods> getPopularGoods(Integer number, Integer goodsType) {
        return goodsDao.getPopularGoods(number,goodsType);
    }

    @Override
    public List<Auction> getAllAuctions() {
        return auctionDao.getAllAuctions();
    }

    @Override
    public Auction getAuctionByAuctionId(Integer auctionId) {
        return auctionDao.getAuctionByAuctionId(auctionId);
    }

    @Override
    public Auction updateAuction(Integer auctionId, Integer userId, Double offer) {
        Auction auction = auctionDao.getAuctionByAuctionId(auctionId);
        if(auction.getBestOffer()<offer)
        {
            auction.setBestOffer(offer);
            auction.setUserId(userId);
        }
        return auctionDao.saveAuction(auction);
    }
}
