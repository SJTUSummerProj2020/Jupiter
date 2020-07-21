import {shallow} from 'enzyme';
import React from 'react';
import {RecommendList} from "../components/RecommendList";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() })


describe(`测试Recommendation组件`,()=>{
    it(`1.测试Recommendation组件能被正常渲染`,()=>{
        const warpper = shallow(<RecommendList />);
        expect(warpper.find('.recommendList').exists()).toBeTruthy();
    });


});