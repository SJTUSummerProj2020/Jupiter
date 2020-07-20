import {shallow} from 'enzyme';
import React from 'react';
import{GoodsList} from "../components/GoodsList";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() })

const data = [
    // {image:require('../assets/goods/1.jpg'),name:"求婚女王",price:50},
    // {image:require('../assets/goods/2.jpg'),name:"上海屋檐下",price:138},
    // {image:require('../assets/goods/3.jpg'),name:"音乐剧《梵高》",price:100},
    // {image:require('../assets/goods/4.png'),name:"夜猫俱乐部",price:100},
    // {image:require('../assets/goods/5.png'),name:"千禧复古联盟 3.0 杭州站",price:80},
    // {image:require('../assets/goods/6.png'),name:"[包邮包裹] 说唱拼盘",price:66},
    // {image:require('../assets/goods/7.jpg'),name:"开心麻花爆笑舞台剧《乌龙山伯爵》",price:80},
    // {image:require('../assets/goods/8.png'),name:"爆笑脱口秀演出-喜剧联盒国",price:150},
    // {image:require('../assets/goods/9.jpg'),name:"太阳马戏《X绮幻之境》",price:360},
    // {image:require('../assets/goods/10.png'),name:"魔女宅急便",price:100}
    {image:"//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",name:"aaa",price:150}
];

describe(`测试GoodList组件`,()=>{
    it(`1.测试Goodlist组件能被正常渲染`,()=>{
        const warpper = shallow(<GoodsList info={data}/>);
        // expect(warpper.find('.goodlist').exists()).toBeTruthy();
    });
});