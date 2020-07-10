import React from 'react';
import { List, Avatar, Space,PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, HomeOutlined, CalendarOutlined} from '@ant-design/icons';
import '../css/detailgoodslist.css';
import {getAllGoods} from "../services/goodsService";
import {getGoodsByGoodsType} from "../services/goodsService";

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const listData = [
    {image:require('../assets/goods/1.jpg'),name:"求婚女王",price:50,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/2.jpg'),name:"上海屋檐下",price:138,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/3.jpg'),name:"音乐剧《梵高》",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/4.png'),name:"夜猫俱乐部",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/5.png'),name:"千禧复古联盟 3.0 杭州站",price:80,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/6.png'),name:"[包邮包裹] 说唱拼盘",price:66,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/7.jpg'),name:"开心麻花爆笑舞台剧《乌龙山伯爵》",price:80,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/8.png'),name:"爆笑脱口秀演出-喜剧联盒国",price:150,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/9.jpg'),name:"太阳马戏《X绮幻之境》",price:360,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/10.png'),name:"魔女宅急便",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "}
];

export class DetailGoodsList extends React.Component{
    constructor(props) {
        super(props);
        this.state={goodsList:[],currentType:4}
    }
    componentDidMount() {
        const data = {};
        const callback = (data) => {
            console.log(data);
            this.setState(
                {
                    goodsList:data
                }
            );
        };
        getAllGoods(data,callback);
    }

    getAllGoods = () => {
        const data = {};
        const callback = (data) => {
            this.setState({goodsList:data,currentType:4});
        };
        getAllGoods(data,callback);
    }

    getType_0 = () => {
        const data = {goodsType: 0};
        const callback = (data) => {
            this.setState({goodsList:data,currentType:0});
        };
        getGoodsByGoodsType(data,callback);
    }

    getType_1 = () => {
        const data = {goodsType: 1};
        const callback = (data) => {
            this.setState({goodsList:data,currentType:1});
        };
        getGoodsByGoodsType(data,callback);
    }

    getType_2 = () => {
        const data = {goodsType: 2};
        const callback = (data) => {
            this.setState({goodsList:data,currentType:2});
        };
        getGoodsByGoodsType(data,callback);
    }

    getType_3 = () => {
        const data = {goodsType: 3};
        const callback = (data) => {
            this.setState({goodsList:data,currentType:3});
        };
        getGoodsByGoodsType(data,callback);
    }


    render() {
        return(
            <div>
                <PageHeader
                    title="分类"
                    className="site-page-header"
                    extra={[
                        <div className={"classificationGroup"} style={{float: "left"}}>
                            {( ()=>{
                                    switch(this.state.currentType){
                                        case 0:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text" type="primary" onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text" onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text" onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 1:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text" type="primary" onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text" onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 2:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text" type="primary" onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 3:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text" type="primary" onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            );
                                            break;
                                        case 4:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  type="primary" onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text"  onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            );
                                            break;
                                        default:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  type="primary" onClick={this.getAllGoods}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType_0}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType_1}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType_2}>儿童亲子</Button>
                                                    <Button key="3" type="text"  onClick={this.getType_3}>展览休闲</Button>
                                                </div>
                                            );
                                            break;
                                    }
                                }
                            )()}
                        </div>
                    ]}
                >
                </PageHeader>
                <List
                    style={{marginBottom: 10}}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={this.state.goodsList}
                    renderItem={item => (
                        <List.Item>
                            <div className={"detailGoods"}>
                                <img
                                    width={200}
                                    className={"detailGoodsImg"}
                                    alt="cover"
                                    src={item.image}
                                />
                                <div className={"detailGoodsDescription"}>
                                    <div className={"detailGoodsName"}>
                                    <span>
                                        {
                                            item.name.length > 23 ? item.name.substring(0,23) + "..." : item.name
                                        }
                                    </span>
                                    </div>
                                    <div className={"detailGoodsPlace"}>
                                        <HomeOutlined/> {item.address}
                                    </div>
                                    <div className={"detailGoodsTime"}>
                                        <CalendarOutlined/> {item.startTime}-{item.endTime}
                                    </div>
                                    <div className={"detailGoodsPrice"}>
                                        {
                                            item.goodsDetails.length === 0 ?
                                                (<span className={"canceled"}>演出取消</span>) :
                                                (
                                                    <span>
                                                        ￥{item.goodsDetails[0].price}起
                                                    </span>
                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
