import {shallow} from 'enzyme';
import React from 'react';
import{DetailCard} from "../components/DetailCard";

import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";


// import {describe} from "@jest/globals";
Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const wrapper = shallow(<DetailCard info={513}/>);
    return {
        wrapper,
    };
};

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

const e ={
    target:{
        value:1
    }
}


describe(`测试DeatailCard组件`,()=>{
    it(`1.测试DetailCard组件能正常渲染`,()=>{
        const warpper = shallow(<DetailCard info={513}/>);
        expect(warpper.find('.detail-card').exists()).toBeTruthy();
    });

    it(`2.测试constructor`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'constructor');
        wrapper.instance().constructor();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`3.测试constructor`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'componentDidMount');
        wrapper.instance().componentDidMount();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`4.测试onChange1`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'onChange1');
        wrapper.instance().onChange1(e);
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`5.测试onChange2`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'onChange2');
        wrapper.instance().onChange2(e);
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`6.测试onChange3`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'onChange3');
        wrapper.instance().onChange3();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`7.测试getGoodsDetailTime`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getGoodsDetailTime');
        wrapper.instance().getGoodsDetailTime(ticketsData);
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`8.测试getTicketType`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getTicketType');
        wrapper.instance().getTicketType(ticketsData);
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`9.测试getUnitPrice`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getUnitPrice');
        wrapper.instance().getUnitPrice(ticketsData);
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`10.测试getTotalPrice`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getTotalPrice');
        wrapper.instance().getTotalPrice();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`11.测试getSurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getSurplus');
        wrapper.instance().getSurplus();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`12.测试clickSurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'clickSurplus');
        wrapper.instance().clickSurplus();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`13.测试displaySurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'displaySurplus');
        wrapper.instance().displaySurplus();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`14.测试clickSurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'allMatch');
        wrapper.instance().allMatch();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`15.测试clickSurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'getDetailId');
        wrapper.instance().getDetailId();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`16.测试clickSurplus`,()=>{
        // eslint-disable-next-line no-undef
        const { wrapper } = setup();
        const spyFunction = jest.spyOn(wrapper.instance(), 'buyNow');
        wrapper.instance().buyNow();
        expect(spyFunction).toHaveBeenCalled();
        spyFunction.mockRestore();
    });

    it(`17.测试传入空参数`,()=>{
        const warpper = shallow(<DetailCard info={null}/>);
    });

})