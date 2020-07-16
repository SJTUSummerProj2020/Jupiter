import React from 'react';
import {Header} from "../components/Header";
import {DetailCard} from "../components/DetailCard";
import{DetailShowTab} from "../components/DetailShowTab";
import{Recommendation} from "../components/Recommendation";
import { Row, Col,Card,Tabs} from 'antd';
import {getGoodsByGoodsId} from "../services/goodsService";
import {checkSession} from "../services/userService";

const ticketsData = {
    "address": "场馆：上海市 | 生活实验室小剧场",
    "endTime": "2020-07-18",
    "goodsDetails": [
    {
        "detailId": 434,
        "goodsId": 123,
        "price": 150.0,
        "surplus": 0,
        "ticketType": "150元",
        "time": "2020-07-10 周五 19:30"
    },
        {
            "detailId": 435,
            "goodsId": 123,
            "price": 180.0,
            "surplus": 1,
            "ticketType": "180元",
            "time": "2020-07-11 周六 20:30"
        }
],
    "goodsId": 123,
    "goodsType": 0,
    "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
    "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
    "startTime": "2020-07-10",
    "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
};
let tmpId = null;
let goodsData = null;
export class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            goodsId:null,
            goodsData:null,
            loggedIn:false,
            user:null
        };
    }
    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('?');
        tmpId = arr[1].substr(3);
        this.setState({goodsId:tmpId});

        const callback = (data) =>{
            goodsData = data.data;
            this.setState({goodsData:data.data});
        }
        if(tmpId === null){
            return;
        }
        const requestData = {goodsId:tmpId};
        getGoodsByGoodsId(requestData,callback);
        const checkSession_callback = (data) => {
            if(data.status === 0){
                this.setState({
                    loggedIn:true,
                    user:data.data
                })
            }
        };
        checkSession(checkSession_callback);
    }

    render(){
        console.log('goodsID',this.state.goodsId)
        if(tmpId === null)
            return null;
        if(goodsData === null)
            return null;
        return(
            <Row align="top" gutter={16}>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                />
                <DetailCard info={tmpId} />
                <Row align = "top" gutter={16}>
                    <Col span={16}>
                        <DetailShowTab info={goodsData}/>
                    </Col>
                    <Col span={4} offset={3}>
                        <Recommendation
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                        />
                    </Col>
                </Row>
            </Row>
        );
    }
}
