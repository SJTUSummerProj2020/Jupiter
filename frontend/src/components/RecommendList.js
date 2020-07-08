import React from 'react';
import {List} from 'antd';
import{RecommendGoods} from "./RecommendGoods";

const recommend = [
    {image:require('../assets/goods/1.jpg'),name:"求婚女王",price:50},
    {image:require('../assets/goods/2.jpg'),name:"上海屋檐下",price:138},
    {image:require('../assets/goods/3.jpg'),name:"音乐剧《梵高》",price:100},
    {image:require('../assets/goods/4.png'),name:"夜猫俱乐部",price:100},
    {image:require('../assets/goods/5.png'),name:"千禧复古联盟 3.0 杭州站",price:80},
    {image:require('../assets/goods/6.png'),name:"[包邮包裹] 说唱拼盘",price:66},
    {image:require('../assets/goods/7.jpg'),name:"开心麻花爆笑舞台剧《乌龙山伯爵》",price:80},
    {image:require('../assets/goods/8.png'),name:"爆笑脱口秀演出-喜剧联盒国",price:150},
    {image:require('../assets/goods/9.jpg'),name:"太阳马戏《X绮幻之境》",price:360},
    {image:require('../assets/goods/10.png'),name:"魔女宅急便",price:100}
];
export class RecommendList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <List
                    grid={{gutter: 1, column: 1}}
                    dataSource={recommend}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 25,
                    }}
                    renderItem={item => (
                        <List.Item>
                            <RecommendGoods info={item} />
                        </List.Item>
                    )}
                />
            </div>
        );
    }

}