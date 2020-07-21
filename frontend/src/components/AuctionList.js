import React from 'react';
import { List, Button, Menu, Dropdown, Drawer, message} from 'antd';
import {HomeOutlined, CalendarOutlined, SettingOutlined, UpOutlined} from '@ant-design/icons';
import"../css/auctionlist.css";
import {Link} from 'react-router-dom';
import {editAuction} from "../services/goodsService";
import {deleteAuctionByAuctionId} from "../services/goodsService";

export class AuctionList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {auctionList:[],currentPage:1,pageSize:10,totalSize:0,haveLoaded:[]}
        console.log('List里的拍卖清单',this.props.auctionList);
    }

    changePage = (page) => {
        this.props.changePage(page);
    }

    render(){
        console.log('当前拍卖物品清单',this.props.auctionList);
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
                                            <div className={"actionButtons"}>
                                                {
                                                    this.props.loggedIn ?
                                                        (
                                                            this.props.user.userType === 0 ?
                                                                (
                                                                    <Dropdown
                                                                        placement="topRight"
                                                                        overlay={
                                                                            <Menu
                                                                                // onClick={
                                                                                //     this.handleClick.bind(
                                                                                //         this,
                                                                                //         item.goodsId,
                                                                                //         item.name,
                                                                                //         item.goodsDetails,
                                                                                //         item.startTime,
                                                                                //         item.endTime
                                                                                //     )
                                                                                // }
                                                                            >
                                                                                <Menu.Item key="1" >
                                                                                    终止
                                                                                </Menu.Item>
                                                                                <Menu.Item key="2">
                                                                                    编辑
                                                                                </Menu.Item>
                                                                            </Menu>
                                                                        }
                                                                    >
                                                                        <Button style={{marginTop: 235}}>
                                                                            <SettingOutlined />管理 <UpOutlined />
                                                                        </Button>
                                                                    </Dropdown>
                                                                ):
                                                                (
                                                                    <div></div>
                                                                )
                                                        ):
                                                        (
                                                            <div></div>
                                                        )
                                                }
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
