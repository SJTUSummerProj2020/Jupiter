import React from 'react';
import { List, PageHeader, Button, Menu, Dropdown} from 'antd';
import {HomeOutlined, CalendarOutlined, DownOutlined, SettingOutlined} from '@ant-design/icons';
import '../css/detailgoodslist.css';
import {Link} from 'react-router-dom';
import {message} from "antd";
import {deleteGoodsByGoodsId} from "../services/goodsService";

export class DetailGoodsList extends React.Component{
    constructor(props) {
        super(props);
    }

    getType = (type) => {
        this.props.getType(type);
    }

    changePage = (page) => {
        this.props.changePage(page);
    }

    deleteGoods = (goodsId) => {
        console.log("Delete");
        const data = {goodsId:goodsId};
        const callback = (data) => {
            message.warning(data.msg);
        };
        deleteGoodsByGoodsId(data,callback);
    }

    handleClick = (goodsId,e) => {
        console.log(goodsId);
        console.log(e);
        switch(e.key){
            case "1":
                this.deleteGoods(goodsId);
            case "2":
                break;
            case "3":
                break;
            default:
                break;
        }
    }



    render() {
        console.log(this.props.goodsList);
        if(this.props.goodsList[(this.props.currentPage - 1) * 10] === null){
            return null;
        }
        return(
            <div>
                <PageHeader
                    title="分类"
                    className="site-page-header"
                    extra={[
                        <div className={"classificationGroup"} style={{float: "left"}}>
                            {( ()=>{
                                    switch(this.props.currentType){
                                        case 0:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text" type="primary" onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text" onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text" onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType.bind(this,3)}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 1:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text" type="primary" onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text" onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType.bind(this,3)}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 2:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text" type="primary" onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text" onClick={this.getType.bind(this,3)}>展览休闲</Button>
                                                </div>
                                            ) ;
                                            break;
                                        case 3:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text" type="primary" onClick={this.getType.bind(this,3)}>展览休闲</Button>
                                                </div>
                                            );
                                            break;
                                        case -1:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  type="primary" onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text"  onClick={this.getType.bind(this,3)}>展览休闲</Button>
                                                </div>
                                            );
                                            break;
                                        default:
                                            return(
                                                <div>
                                                    <Button key="4" type="text"  type="primary" onClick={this.getType.bind(this,-1)}>全部</Button>
                                                    <Button key="0" type="text"  onClick={this.getType.bind(this,0)}>演唱会</Button>
                                                    <Button key="1" type="text"  onClick={this.getType.bind(this,1)}>话剧歌剧</Button>
                                                    <Button key="2" type="text"  onClick={this.getType.bind(this,2)}>儿童亲子</Button>
                                                    <Button key="3" type="text"  onClick={this.getType.bind(this,3)}>展览休闲</Button>
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
                            this.changePage(page);
                        },
                        pageSize: this.props.pageSize,
                        defaultCurrent: 1,
                        showSizeChanger: false,
                        current: this.props.currentPage,
                        showQuickJumper: true,
                        total: this.props.totalSize
                    }}
                    dataSource={this.props.goodsList}
                    renderItem={item => (
                        <List.Item>
                            {
                                item === null ?
                                    null :
                                    (
                                            <div className={"detailGoods"}>
                                                <Link to={{
                                                    pathname: '/detail',
                                                    search: '?id=' + item.goodsId}}
                                                      target="_blank"
                                                >
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
                                                </Link>
                                                <div className={"actionButtons"}>
                                                    {
                                                        this.props.loggedIn ?
                                                            (
                                                                this.props.user.userType === 0 ?
                                                                    (
                                                                        <Dropdown
                                                                            overlay={
                                                                                <Menu onClick={this.handleClick.bind(this,item.goodsId)}>
                                                                                    <Menu.Item key="1" >
                                                                                        下架
                                                                                    </Menu.Item>
                                                                                    <Menu.Item key="2">
                                                                                        编辑
                                                                                    </Menu.Item>
                                                                                    <Menu.Item key="3">
                                                                                        竞拍
                                                                                    </Menu.Item>
                                                                                </Menu>
                                                                            }
                                                                        >
                                                                            <Button>
                                                                                <SettingOutlined />管理 <DownOutlined />
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
                                            </div>)
                            }
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
