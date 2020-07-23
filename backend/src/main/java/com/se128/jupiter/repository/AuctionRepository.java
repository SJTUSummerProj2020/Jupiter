package com.se128.jupiter.repository;

import com.se128.jupiter.entity.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction,Integer> {

    Auction getAuctionByAuctionId(Integer auctionId);
}
