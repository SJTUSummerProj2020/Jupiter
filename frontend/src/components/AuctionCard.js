import React from "react";
import { Row, Col,Card,List,InputNumber,Radio,Button,message, Divider} from 'antd';
import {ExclamationCircleFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import"../css/auctioncard.css";


// const ticketsData = {
//     "address": "场馆：上海市 | 生活实验室小剧场",
//     "endTime": "2020-07-18",
//     "goodsDetails": [
//         {
//             "detailId": 434,
//             "goodsId": 123,
//             "price": 150.0,
//             "surplus": 0,
//             "ticketType": "150元",
//             "time": "2020-07-10 周五 19:30"
//         },
//         {
//             "detailId": 435,
//             "goodsId": 123,
//             "price": 180.0,
//             "surplus": 1,
//             "ticketType": "180元",
//             "time": "2020-07-11 周六 20:30"
//         }
//     ],
//     "goodsId": 123,
//     "goodsType": 0,
//     "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
//     "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
//     "startTime": "2020-07-10",
//     "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
// };



export class AuctionCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            goodsData :"", //用后端返回的data进行初始化
            price:0,
            user:null,
            loggedIn:false,
            orderId:0,
        }
    }

    render(){
        const {info} = this.props;
        console.log('拍卖详情',info);
        if(info === null)
            return null;

        return(
            <Card hoverable={false} className={"auction-card"}>
                <Row>
                    <Col span={8} className={"auction-card-poster"}>
                        <img alt = "auction-card-image" src = {info.goods.image} className={"auction-card-img"}/>
                    </Col>
                    <Col span = {16} >
                        <Row className={"auction-card-show-name"}>
                            {info.goods.name}
                        </Row>
                        <Row className={"auction-card-show-time"}>
                            <Col>时间：</Col>
                            <Col> {info.goodsDetail.time}</Col>
                        </Row>
                        <Row className={"auction-card-show-address"}>
                            <Col>
                                地点：
                            </Col>
                            <Col>
                                {info.goods.address}
                            </Col>
                        </Row>
                        <Row className={"auction-card-tips"}><ExclamationCircleFilled className={"auction-card-icon"}/>
                            演出时间为演出当地时间，拍卖开始时间为北京时间
                        </Row>

                        <Row className={"auction-card-stems"}>
                            拍卖开始时间:{info.startTime} 
                        </Row>

                        <Row className={"auction-card-stems"}>
                            拍卖持续时间:{info.duration}
                        </Row>

                        <Row >
                            <Col className={"auction-card-stems"}>
                                当前价
                            </Col>
                            <Col className={"auction-card-stems"}>
                                {info.bestOffer}
                            </Col>
                        </Row>

                        <Row >
                            <Col className={"auction-card-stems"}>
                                出价:
                            </Col>
                            <Col className={"auction-card-choice"}>
                                <InputNumber min={info.bestOffer} defaultValue={info.bestOffer} step={info.addingPrice}/>
                            </Col>
                        </Row>

                        <Row>
                            <button className={"auction-card-buy-button"} >
                                确认出价
                            </button>
                        </Row>

                        <Row>
                            <Divider>拍卖说明</Divider>
                        </Row>
                        <Row>
                            <Col className={"auction-info-stem"}>
                                起拍价
                            </Col>
                            <Col className={"auction-info-content"}>
                                {info.startingPrice}
                            </Col>
                            <Col className={"auction-info-stem"}>
                                加价幅度
                            </Col>
                            <Col className={"auction-info-content"}>
                                {info.addingPrice}
                            </Col>
                            <Col className={"auction-info-stem"}>
                                竞价周期
                            </Col>
                            <Col className={"auction-info-content"}>
                                {info.duration}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }

}