import React from "react";
import {Header} from "../components/Header";
import {Row, Col, BackTop, message} from 'antd';
import "../css/header.css";
import "../css/detailgoodslist.css";
import {DetailGoodsList} from "../components/DetailGoodsList";
import {Recommendation} from "../components/Recommendation";
import {getAllGoods} from "../services/goodsService";
import {checkSession} from "../services/userService";
import {logout} from "../services/userService";

export class DetailListView extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            goodsList:[],
            currentType:-1,
            currentPage:1,
            pageSize:10,
            totalSize:0,
            haveLoaded:[],
            loggedIn:false,
            user:null
        }
    }
    componentDidMount() {
        this.getType(-1);
        const callback = (data) =>{
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                )
            }
        };
        checkSession(callback);
    }

    logout = () => {
        console.log("Logout");
        const callback = (data) => {
            sessionStorage.removeItem("user");
            this.setState(
                {
                    loggedIn:false,
                    user:null
                }
            );
            message.success(data.msg);
        };
        logout(callback);
    }

    getType = (type) =>{
        const data = {
            pageId:0,
            pageSize:100,
            goodsType:type,
        };
        const callback = (data) => {
            let tmp = new Array(data.data.totalNum);
            let dataLength = data.data.goods.length;
            let totalPage = (dataLength % this.state.pageSize === 0) ? dataLength / this.state.pageSize : dataLength / this.state.pageSize + 1
            let loaded = [];
            for(let i = 0;i < totalPage;++i){
                loaded.push(i + 1);
            }
            for(let i = 0;i < dataLength;++i){
                tmp[i] = data.data.goods[i];
            }
            for(let i = 100;i < data.data.totalNum;++i){
                tmp[i] = null;
            }
            this.setState(
                {
                    totalSize:data.data.totalNum,
                    goodsList:tmp,
                    currentType:type,
                    currentPage:1,
                    haveLoaded:loaded
                },
                ()=>{
                    console.log("Get type",this.state.goodsList);
                }
            )
        }
        getAllGoods(data,callback);
    }

    changePage = (page) => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'auto',
        });
        if(this.state.haveLoaded.indexOf(page) < 0){
            const data = {
                pageId: page - 1,
                pageSize: 10,
                goodsType:this.state.currentType
            };
            const callback = (data) => {
                let tmp = this.state.goodsList;
                let loaded = this.state.haveLoaded;
                let length = data.data.goods.length;
                for(let i = 0;i < length;++i){
                    tmp[(page - 1) * 10 + i] = data.data.goods[i];
                }
                loaded.push(page);
                this.setState(
                    {
                        goodsList:tmp,
                        currentPage:page,
                        haveLoaded:loaded
                    },
                    ()=>{
                        console.log("Change page",this.state.goodsList);
                    }
                );
            };
            getAllGoods(data,callback);
        }
        else{
            this.setState(
                {currentPage:page}
            );
        }
    }

    render() {
        return(
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logout={this.logout}
                />
                <Row>
                    <Col span={15} push={1}>
                        <DetailGoodsList
                            goodsList={this.state.goodsList}
                            currentType={this.state.currentType}
                            currentPage={this.state.currentPage}
                            pageSize={this.state.pageSize}
                            totalSize={this.state.totalSize}
                            getType={this.getType}
                            changePage={this.changePage}
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                        />
                    </Col>
                    <Col span={8} push={1}>
                        <Recommendation
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                        />
                    </Col>
                </Row>
                <BackTop/>
            </div>
        );
    }
}
