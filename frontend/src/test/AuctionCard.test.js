import {shallow,mount,render} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {AuctionCard} from "../components/AuctionCard";

Enzyme.configure({ adapter: new Adapter() })

const auctionData1= {
    "addingPrice": 10.0,
        "auctionId": 1,
        "bestOffer": 450.0,
        "duration": "360000",
        "goods": {
        "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
            "buyCounter": 0,
            "detail": "",
            "endTime": "2020-08-07",
            "goodsDetails": [
            {
                "detailId": 1890,
                "goodsId": 513,
                "price": 188.0,
                "surplus": 1,
                "ticketType": "预售票（188.00）",
                "time": "2020-08-07 星期五 20:00"
            }
        ],
            "goodsId": 513,
            "goodsType": 0,
            "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
            "name": "【杭州】「初夏人生」嘻哈派对",
            "startTime": "2020-08-07",
            "viewCounter": 125,
            "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
    },
    "goodsDetail": {
        "detailId": 1890,
            "goodsId": 513,
            "price": 188.0,
            "surplus": 1,
            "ticketType": "预售票（188.00）",
            "time": "2020-08-07 星期五 20:00"
    },
    "startTime": "2020-07-16 10:00:00",
        "startingPrice": 160.0,
        "userId": 1
}

const auctionData2= {
    "addingPrice": 10.0,
    "auctionId": 1,
    "bestOffer": 450.0,
    "duration": "360000",
    "goods": {
        "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
        "buyCounter": 0,
        "detail": "",
        "endTime": "2020-08-07",
        "goodsDetails": [
            {
                "detailId": 1890,
                "goodsId": 513,
                "price": 188.0,
                "surplus": 1,
                "ticketType": "预售票（188.00）",
                "time": "2020-08-07 星期五 20:00"
            }
        ],
        "goodsId": 513,
        "goodsType": 0,
        "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
        "name": "【杭州】「初夏人生」嘻哈派对",
        "startTime": "2020-08-07",
        "viewCounter": 125,
        "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
    },
    "goodsDetail": {
        "detailId": 1890,
        "goodsId": 513,
        "price": 188.0,
        "surplus": 1,
        "ticketType": "预售票（188.00）",
        "time": "2020-08-07 星期五 20:00"
    },
    "startTime": "2020-07-26 10:00:00",
    "startingPrice": 160.0,
    "userId": 1
}

const auctionData3= {
    "addingPrice": 10.0,
    "auctionId": 1,
    "bestOffer": 450.0,
    "duration": "10",
    "goods": {
        "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
        "buyCounter": 0,
        "detail": "",
        "endTime": "2020-08-07",
        "goodsDetails": [
            {
                "detailId": 1890,
                "goodsId": 513,
                "price": 188.0,
                "surplus": 1,
                "ticketType": "预售票（188.00）",
                "time": "2020-08-07 星期五 20:00"
            }
        ],
        "goodsId": 513,
        "goodsType": 0,
        "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
        "name": "【杭州】「初夏人生」嘻哈派对",
        "startTime": "2020-08-07",
        "viewCounter": 125,
        "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
    },
    "goodsDetail": {
        "detailId": 1890,
        "goodsId": 513,
        "price": 188.0,
        "surplus": 1,
        "ticketType": "预售票（188.00）",
        "time": "2020-08-07 星期五 20:00"
    },
    "startTime": "2020-07-16 10:00:00",
    "startingPrice": 160.0,
    "userId": 1
}

describe(`测试AuctionCard组件`,()=>{
    it(`1.测试AuctionCard组件能被正常渲染,且能正常拍卖`,()=>{
        const warpper = shallow(<AuctionCard info={auctionData1}/>);
        expect(warpper.find('.auction-card').exists()).toBeTruthy();
    });

    it(`2.测试拍卖事件还没开始`,()=>{
        const warpper = shallow(<AuctionCard info={auctionData2}/>);
        expect(warpper.find('.auction-card').exists()).toBeTruthy();
    });

    it(`3.测试拍卖已经结束`,()=>{
        const warpper = shallow(<AuctionCard info={auctionData3}/>);
        expect(warpper.find('.auction-card').exists()).toBeTruthy();
    });

    it(`4.模拟点击购买按钮`,()=>{
        const warpper = render(<AuctionCard info={auctionData3}/>);
        warpper.find('.auction-card-buy-button').simulate('click');
        expect(true);
    })

});