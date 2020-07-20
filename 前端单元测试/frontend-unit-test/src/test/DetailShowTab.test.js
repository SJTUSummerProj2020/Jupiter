import {shallow} from 'enzyme';
import React from 'react';
import {DetailShowTab} from "../components/DetailShowTab";
import{callback} from"../components/DetailShowTab";
// import {describe, expect, it} from "@jest/globals";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() })
const ticketsData = {
    "address": "场馆：上海市 | 生活实验室小剧场",
    "endTime": "2020-07-18",
    "goodsDetails": [
        {
            "detailId": 434,
            "goodsId": 123,
            "price": 150.0,
            "surplus": 0,
            "ticketType": "150元",
            "time": "2020-07-10 周五 19:30"
        },
        {
            "detailId": 435,
            "goodsId": 123,
            "price": 180.0,
            "surplus": 1,
            "ticketType": "180元",
            "time": "2020-07-11 周六 20:30"
        }
    ],
    "goodsId": 123,
    "goodsType": 0,
    "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
    "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
    "startTime": "2020-07-10",
    "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
};
describe(`测试DetailShowTab组件`,()=>{
    it(`1.测试Detail组件能被正常渲染`,()=>{
        const warpper = shallow(<DetailShowTab info={ticketsData}/>);
        expect(warpper.find('.detail-show-tab').exists()).toBeTruthy();
    })

    it(`2.测试callback函数`,()=>{
        callback(1);
    })
});