import React from 'react';
import { List, Button, Menu, Dropdown, Drawer, message} from 'antd';
import {HomeOutlined, CalendarOutlined, SettingOutlined, UpOutlined} from '@ant-design/icons';
import"../css/auctionlist.css";
import {Link} from 'react-router-dom';
import {editAuction} from "../services/goodsService";
import {deleteAuctionByAuctionId} from "../services/goodsService";
import {EditAuction} from "./EditAuction";

export class AuctionList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auctionList:[],
            currentPage:1,
            pageSize:10,
            totalSize:0,
            haveLoaded:[],
            visible:false,
            auctionId:null,
            name:null,
            time:null,
            ticketType:null,
            detailId:null,
            goodsId:null,
            startTime:null,
            duration:null,
            startingPrice:null,
            addingPrice:null
        }
        console.log('List里的拍卖清单',this.props.auctionList);
    }

    changePage = (page) => {
        this.props.changePage(page);
    }

    deleteAuctionByAuctionId = (auctionId) => {
        console.log("Delete auction");
        const data = {auctionId:auctionId};
        const callback = (data) => {
            if(data !== null && data.status === 0){
                message.success(data.msg);
            }
        };
        deleteAuctionByAuctionId(data,callback);
    }

    close = () => {
        this.setState({
            visible: false,
        });
    }

    open = (name,goodsId,time,ticketType,detailId,auctionId,startTime,duration,startingPrice,addingPrice) => {
        this.setState({
            visible: true,
            name:name,
            goodsId:goodsId,
            time:time,
            ticketType:ticketType,
            detailId:detailId,
            auctionId:auctionId,
            startTime:startTime,
            duration:duration,
            startingPrice:startingPrice,
            addingPrice:addingPrice
        });
    }

    handleClick = (item,e) => {
        switch(e.key){
            case "1":
                this.deleteAuctionByAuctionId(item.auctionId);break;
            case "2":
                this.open(
                    item.goods.name,
                    item.goods.goodsId,
                    item.goodsDetail.time,
                    item.goodsDetail.ticketType,
                    item.goodsDetail.detailId,
                    item.auctionId,
                    item.startTime,
                    item.duration,
                    item.startingPrice,
                    item.addingPrice
                );
                break;
            default:
                break;
        }
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
                                            <div className={"detailAuction"}>
                                                <Link to={{
                                                    pathname: '/auction',
                                                    search: '?id=' + item.auctionId}}
                                                      target="_blank"
                                                >
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
                                                                item.goods.name.length > 20 ? item.goods.name.substring(0,20) + "..." : item.goods.name
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
                                                                        起拍价：￥{item.startingPrice}
                                                                    </span>
                                                                    )
                                                            }
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className={"actionButtons"}>
                                                    {
                                                        this.props.loggedIn ?
                                                            (
                                                                this.props.user.userType === 0 ?
                                                                    (
                                                                        <Dropdown
                                                                            overlay={
                                                                                <Menu
                                                                                    onClick={
                                                                                        this.handleClick.bind(
                                                                                            this,
                                                                                           item
                                                                                        )
                                                                                    }
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
                                                                            <Button>
                                                                                <SettingOutlined />
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

                                            </div>
                                    )
                            }
                        </List.Item>
                    )}
                />
                <Drawer
                    title="编辑竞拍"
                    width={720}
                    onClose={this.close}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    destroyOnClose={true}
                >
                    <EditAuction
                        name={this.state.name}
                        goodsId={this.state.goodsId}
                        time={this.state.time}
                        ticketType={this.state.ticketType}
                        detailId={this.state.detailId}
                        auctionId={this.state.auctionId}
                        startTime={this.state.startTime}
                        duration={this.state.duration}
                        startingPrice={this.state.startingPrice}
                        addingPrice={this.state.addingPrice}
                        close={this.close}
                    />
                </Drawer>
            </div>
        );
    }

}
