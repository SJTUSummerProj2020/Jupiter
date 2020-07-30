package com.se128.jupiter.dao;

import com.se128.jupiter.entity.Auction;
import com.se128.jupiter.repository.AuctionRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.swing.*;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class AuctionDaoTest {
    @Autowired
    private AuctionDao auctionDao;
    @MockBean
    private AuctionRepository auctionRepository;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getAllAuctions() {
        Auction auction = new Auction();
        auction.setDuration(2);
        List<Auction> auctionList = new ArrayList<>();
        auctionList.add(auction);
        auctionList.add(auction);

        when(auctionRepository.findAll()).thenReturn(auctionList);
        assertEquals(auctionList, auctionDao.getAllAuctions());
    }

    @Test
    void getAuctionByAuctionId() {
        Integer auctionId = 1;
        Auction auction = new Auction();
        auction.setAuctionId(auctionId);

        when(auctionRepository.getAuctionByAuctionId(auctionId)).thenReturn(auction);
        assertEquals(auction, auctionDao.getAuctionByAuctionId(auctionId));
    }

    @Test
    void saveAuction() {
        Auction auction = new Auction();

        when(auctionRepository.saveAndFlush(auction)).thenReturn(auction);
        assertEquals(auction, auctionDao.saveAuction(auction));
    }

    @Test
    void editAuction() {
        Auction auction = new Auction();

        when(auctionRepository.saveAndFlush(auction)).thenReturn(auction);
        assertEquals(auction, auctionDao.editAuction(auction));
    }
}
