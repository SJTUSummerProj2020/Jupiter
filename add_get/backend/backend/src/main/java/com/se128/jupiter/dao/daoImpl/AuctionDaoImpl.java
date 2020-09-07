package com.se128.jupiter.dao.daoImpl;

import com.se128.jupiter.dao.AuctionDao;
import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AuctionDaoImpl implements AuctionDao {

    private final AuctionRepository auctionRepository;

    @Autowired
    public AuctionDaoImpl(AuctionRepository auctionRepository) {
        this.auctionRepository = auctionRepository;
    }

    @Override
    public List<Auction> getAllAuctions() {
        List<Auction> auctions = auctionRepository.findAll();
        auctions.removeIf(item -> item.getDuration() < 0);
        return auctions;
    }

    @Override
    public Auction getAuctionByAuctionId(Integer auctionId) {
        return auctionRepository.getAuctionByAuctionId(auctionId);
    }

    @Override
    public Auction saveAuction(Auction auction) {
        return auctionRepository.saveAndFlush(auction);
    }

    @Override
    public Auction addAuction(Auction auction){
        return auctionRepository.saveAndFlush(auction);
    }

    @Override
    public void deleteAuctionByAuctionId(Integer auctionId) {
        Auction auction = auctionRepository.getAuctionByAuctionId(auctionId);
        auction.setDuration(-1);
        auctionRepository.saveAndFlush(auction);
    }

    @Override
    public Auction editAuction(Auction auction) {
        return auctionRepository.saveAndFlush(auction);
    }
}
