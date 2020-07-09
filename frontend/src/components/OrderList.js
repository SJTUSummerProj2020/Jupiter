import React from "react";
import {List, message} from "antd";
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
import {checkSession, getOrdersByUserId} from "../services/userService";
import '../css/orderlist.css';
import {history} from "../utils/history";

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

export class OrderList extends React.Component{
    constructor(props) {
        super(props);
        this.state={user:null,orderList:[]};
    }
    componentDidMount() {
        const callback_checkSession = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        user:data.data
                    }
                );
                const callback = (data) => {
                    console.log(data);
                    this.setState({orderList:data})
                };
                const requestData = {userId:data.data.userId};
                getOrdersByUserId(requestData,callback);
            }
            else{
                message.warning(data.msg);
                history.push('login');
            }
        };
        checkSession(callback_checkSession);
    }

    render() {
        return(
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 20,
                }}
                dataSource={this.state.orderList}
                renderItem={item => (
                    <List.Item>
                        <div className={"orderGoods"}>
                            <img
                                width={200}
                                className={"orderGoodsImg"}
                                alt="cover"
                                src={item.goods.image}
                            />
                            <div className={"orderGoodsDescription"}>
                                <div className={"orderGoodsName"}>
                                    <span>{item.goods.name}</span>
                                </div>
                                <div className={"orderGoodsPlace"}>
                                    <HomeOutlined/> {item.goods.address}
                                </div>
                                <div className={"orderGoodsTime"}>
                                    <CalendarOutlined/> {item.goodsDetail.time}
                                </div>
                                <div className={"orderGoodsPrice"}>
                                    ￥{item.goodsDetail.price}
                                </div>
                                <div className={"orderDetail"}>
                                    <div className={"orderDetailId"}>
                                        订单ID: {item.orderId}
                                    </div>
                                    <div className={"orderDetailTime"}>
                                        下订单时间: {item.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}
