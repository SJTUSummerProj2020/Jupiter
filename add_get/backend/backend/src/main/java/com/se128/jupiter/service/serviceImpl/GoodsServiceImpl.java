package com.se128.jupiter.service.serviceImpl;

import com.se128.jupiter.dao.AuctionDao;
import com.se128.jupiter.dao.GoodsDao;
import com.se128.jupiter.dao.UserDao;
import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.entity.Goods;
import com.se128.jupiter.entity.GoodsDetail;
import com.se128.jupiter.entity.User;
import com.se128.jupiter.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GoodsServiceImpl implements GoodsService {

    private final GoodsDao goodsDao;

    private final AuctionDao auctionDao;

    private final UserDao userDao;

    private HashMap<Integer,Integer> goodsViewCounter;

    @Autowired
    public GoodsServiceImpl(GoodsDao goodsDao, AuctionDao auctionDao, UserDao userDao) {
        this.goodsDao = goodsDao;
        this.auctionDao = auctionDao;
        this.userDao = userDao;
        this.goodsViewCounter = new HashMap<Integer,Integer>();
    }

    @Override
    public Goods getGoodsByGoodsId(Integer goodsId) {
        Goods goods = goodsDao.getGoodsByGoodsId(goodsId);
        if(goods != null)
        {
            this.goodsViewCounter.merge(goodsId, 1, Integer::sum);
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
        String [] names = name.split("\\s+");
        List<Goods> goods = new LinkedList<>();

        for(int i = 0;i<names.length; i++)
        {
            List<Goods> someGoods = goodsDao.getGoodsByName(names[i]);
            if(i == 0)
            {
                goods.addAll(someGoods);
            }
            else
            {
                goods.retainAll(someGoods);
            }
        }
//        HashSet<Goods> tmp = new HashSet<Goods>(goods);
//        goods.clear();
//        goods.addAll(tmp);
        return goods;
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

    @Override
    public List<Goods> getRecommendGoodsByUserId(Integer userId, Integer number) {
        User user = userDao.getUserByUserId(userId);
        int[] data = new int[4];
        data[0] = user.getBuy0();
        data[1] = user.getBuy1();
        data[2] = user.getBuy2();
        data[3] = user.getBuy3();
        int max = 0; int goodsType=0;
        for(int i = 0; i < data.length; i++) {
           if(data[i]>max)
           {
               max = data[i];
               goodsType = i;
           }
        }
        return goodsDao.getRecommendGoodsByGoodsType(goodsType,number);
    }

    @Override
    public List<Goods> getRecommendGoodsInAll(Integer number) {
        return goodsDao.getRecommendGoodsInAll(number);
    }

    @Override
    public Auction addAuction(Auction auction,Integer goodsId, Integer detailId) {
        Goods goods = goodsDao.getGoodsByGoodsId(goodsId);
        GoodsDetail detail = goodsDao.getGoodsDetailByDetailId(detailId);
        auction.setGoods(goods);
        auction.setGoodsDetail(detail);
        return auctionDao.addAuction(auction);
    }

    @Override
    public void deleteAuctionByAuctionId(Integer auctionId) {
        auctionDao.deleteAuctionByAuctionId(auctionId);
    }

    @Override
    public Auction editAuction(Auction auction, Integer detailId, Integer goodsId) {
        Goods goods = goodsDao.getGoodsByGoodsId(goodsId);
        GoodsDetail detail = goodsDao.getGoodsDetailByDetailId(detailId);
        auction.setGoods(goods);
        auction.setGoodsDetail(detail);
        return auctionDao.editAuction(auction);
    }
}
