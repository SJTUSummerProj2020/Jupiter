import React from "react";
import {List} from "antd";
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
import '../css/orderlist.css';
import {Link} from "react-router-dom";

export class OrderList extends React.Component{
    constructor(props) {
        super(props);
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
                dataSource={this.props.orderList}
                renderItem={item => (
                    <List.Item>
                        <div className={"orderGoods"}>
                            <Link to={{
                                pathname: '/detail',
                                search: '?id=' + item.goods.goodsId}}
                                  target="_blank"
                            >
                                <img
                                    width={200}
                                    className={"orderGoodsImg"}
                                    alt="cover"
                                    src={item.goods.image}
                                />
                            </Link>

                            <div className={"orderGoodsDescription"}>
                                <div className={"orderGoodsName"}>
                                    <span>
                                        {item.goods.name.length > 24 ? item.goods.name.substr(0,24)+'...' : item.goods.name}
                                    </span>
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
