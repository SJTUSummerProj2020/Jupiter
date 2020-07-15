import React from 'react';
import {Header} from "../components/Header";
import {DetailCard} from "../components/DetailCard";
import{DetailShowTab} from "../components/DetailShowTab";
import {DetailRecommend} from "../components/DetailRecommend";
import{Recommendation} from "../components/Recommendation";
import { Row, Col,Card,Tabs} from 'antd';
import {getGoodsByGoodsId} from "../services/goodsService";
import "../css/detailview.css";

// const data = {
//     image:require('../assets/goods/10.png'),
//     name:"管他是谁的演唱会",
//     start_time:"2020.07.10",
//     end_time:"2020.07.18",
//     address:"上海市 | 生活实验室小剧场 ",
//     time_list:[{time:"2020.07.10 星期三 08:30"},{time:"2020.07.12 星期五 18:30"},
//         {time:"2020.07.14 星期日 20:00"},{time:"2020.07.18 星期三 18：00"}],
//     ticket_type:[{content:"内场前排",price:1980.00},{content: "外场前排",price:880.00},{content:"外场后排",price:380.00}]
//     };

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
    }

    render(){
        console.log('goodsID',this.state.goodsId)
        if(tmpId === null)
            return null;
        if(goodsData === null)
            return null;
        return(
            <Row align="top" gutter={16}>
                <Header/>
                <DetailCard info={tmpId} />
                <Row align = "top" gutter={16}>
                    <Col span={16}>
                        <DetailShowTab info={goodsData}/>
                    </Col>
                    <Col className={"recommend"}>
                        <Recommendation/>
                    </Col>
                </Row>
            </Row>
        );
    }
}