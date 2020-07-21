import React from "react";
import {List} from "antd";
import {Link} from "react-router-dom";
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
import '../css/adminorderlist.css'

export class AdminOrderList extends React.Component{
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
                                <div className={"adminOrderDetail"}>
                                    <div className={"orderDetailId"}>
                                        用户ID: {item.userId}
                                    </div>
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
        )
    }
}
