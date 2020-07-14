import React from "react";
import { Row, Col,Card,List,InputNumber,Radio,Button,message, Divider} from 'antd';
import {ExclamationCircleFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import"../css/auctioncard.css";

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
        return(
            <Card hoverable={false} className={"auction-card"}>
                <Row>
                    <Col span={8} className={"auction-card-poster"}>
                        <img alt = "auction-card-image" src = {ticketsData.image} className={"auction-card-img"}/>
                    </Col>
                    <Col span = {16} >
                        <Row className={"auction-card-show-name"}>
                            {ticketsData.name}
                        </Row>
                        <Row className={"auction-card-show-time"}>
                            <Col>时间：</Col>
                            <Col> {ticketsData.startTime} - {ticketsData.endTime}</Col>
                        </Row>
                        <Row className={"auction-card-show-address"}>
                            <Col>
                                地点：
                            </Col>
                            <Col>
                                {ticketsData.address}
                            </Col>
                        </Row>
                        <Row className={"auction-card-tips"}><ExclamationCircleFilled className={"auction-card-icon"}/>
                            时间均为演出当地时间
                        </Row>

                        <Row className={"auction-card-stems"}>
                            拍卖截止时间:
                        </Row>

                        <Row >
                            <Col className={"auction-card-stems"}>
                                当前价
                            </Col>
                            <Col className={"auction-card-stems"}>
                                2000
                            </Col>
                        </Row>

                        <Row >
                            <Col className={"auction-card-stems"}>
                                出价:
                            </Col>
                            <Col className={"auction-card-choice"}>
                                <InputNumber min={1000} defaultValue={1000} step={100}/>
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
                                2000
                            </Col>
                            <Col className={"auction-info-stem"}>
                                加价幅度
                            </Col>
                            <Col className={"auction-info-content"}>
                                1000
                            </Col>
                            <Col className={"auction-info-stem"}>
                                竞价周期
                            </Col>
                            <Col className={"auction-info-content"}>
                                1天
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }

}