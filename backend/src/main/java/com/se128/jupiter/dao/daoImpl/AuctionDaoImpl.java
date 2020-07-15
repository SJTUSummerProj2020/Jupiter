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
        return auctionRepository.findAll();
    }

    @Override
    public Auction getAuctionByAuctionId(Integer auctionId) {
        return auctionRepository.getAuctionByActionId(auctionId);
    }
}
