import React from 'react';
import { List, Avatar, Space,PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, BackTop, Pagination} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, HomeOutlined, CalendarOutlined} from '@ant-design/icons';
import"../css/auctionlist.css";
import {Link} from 'react-router-dom';

 // debugger;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export class AuctionList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {auctionList:[],currentPage:1,pageSize:10,totalSize:0,haveLoaded:[]}
        // debugger;
        console.log('List里的拍卖清单',this.props.auctionList);
    }

    changePage = (page) => {
        this.props.changePage(page);
    }

    render(){
        console.log('当前拍卖物品清单',this.props.auctionList);
        // console.log('图片地址',this.props.auctionList[0].image);
        if(this.props.auctionList[(this.props.currentPage - 1) * 10] === null){
            return null;
        }
        if(this.props.auctionList[0] === null){
            return null;
        }
        return(
            <div>
                <List
                    style={{marginBottom: 10}}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                            this.changePage(page);
                        },
                        pageSize: this.props.pageSize,
                        defaultCurrent: 1,
                        showSizeChanger: false,
                        current: this.props.currentPage,
                        showQuickJumper: true,
                        total: this.props.totalSize
                    }}
                    dataSource={this.props.auctionList}
                    renderItem={item => (
                        <List.Item>
                            {
                                item === null ?
                                    null :
                                    (
                                        <Link to={{
                                            pathname: '/auction',
                                            search: '?id=' + item.auctionId}}
                                              target="_blank"
                                        >
                                            <div className={"detailAuction"}>
                                                <img
                                                    width={200}
                                                    className={"detailAuctionImg"}
                                                    alt="cover"
                                                    src={item.goods.image}
                                                />
                                                <div className={"detailAuctionDescription"}>
                                                    <div className={"detailAuctionName"}>
                                                        <span>
                                                            {
                                                                item.goods.name.length > 23 ? item.goods.name.substring(0,23) + "..." : item.name
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className={"detailAuctionPlace"}>
                                                        <HomeOutlined/> {item.goods.address}
                                                    </div>
                                                    <div className={"detailAuctionTime"}>
                                                        <CalendarOutlined/> {item.startTime}
                                                    </div>
                                                    <div className={"detailAuctionPrice"}>
                                                        {
                                                            item.goods.goodsDetails.length === 0 ?
                                                                (<span className={"canceled"}>演出取消</span>) :
                                                                (
                                                                    <span>
                                                                        ￥{item.goodsDetail.price}起
                                                                    </span>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                            }
                        </List.Item>
                    )}
                />
            </div>
        );
    }

}