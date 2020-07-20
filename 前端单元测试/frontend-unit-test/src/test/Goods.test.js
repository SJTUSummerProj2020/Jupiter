import {shallow} from 'enzyme';
import React from 'react';
import{Goods} from "../components/Goods";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {GoodsList} from "../components/GoodsList";
Enzyme.configure({ adapter: new Adapter() })



describe(`测试Goods组件`,()=>{
    it(`1.测试Goods组件能被正常渲染`,()=>{
        const warpper = shallow(<Goods info={513}/>);
        expect(warpper.find('.test-link').exists()).toBeTruthy();
    });
});