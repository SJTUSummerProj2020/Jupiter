import React from 'react';
import { Row, Col,Card,List,InputNumber,Radio} from 'antd';
import"../css/detailcard.css"
import { ExclamationCircleFilled } from '@ant-design/icons';
import {getGoodsByGoodsType} from "../services/goodsService";
import {getGoodsByGoodsId} from "../services/goodsService";

const RadioGroup = Radio.Group;

export class DetailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goodsData :"", //用后端返回的data进行初始化
            goodsDetailTime:"aaa",
            ticketsType:"bbb",
            unitPrice:0,
            ticketsNum:1,
            goodDetailTimeArray:[],
            ticketTypeArray:[],
        };
    }

    componentDidMount() {
        const callback = (data) => {
            console.log(data);
            this.setState({goodsData:data.data});
            this.setState({goodsDetailTime:data.data.goodsDetails[0].time});
            this.setState(({ticketsType:data.data.goodsDetails[0].ticketType}));
            this.getGoodsDetailTime(data.data);
            this.getTicketType(data.data);

        };
        const requestData = {goodsId:517};
        getGoodsByGoodsId(requestData,callback);
    }

    onChange1=(e) =>{
        this.setState({goodsDetailTime:e.target.value});
        this.getTicketType(this.state.goodsData,e.target.value);
        this.setState({goodsDetailTime:e.target.value});
        console.log('场次',this.state.goodsDetailTime);
    }

    onChange2=(e)=> {
        console.log('票档',e.target.value);
        this.setState({ticketsType:e.target.value});
    }

    onChange3=(value)=> {
        console.log('数量',value);
        this.setState({ticketsNum:value});
    }

    getGoodsDetailTime=(data)=>{  //实际调用时参数应该为this.state.goodsData
        if(data.goodsDetails == null)
            return null;
        let len = data.goodsDetails.length;
        let i = 0;
        let tmpArray = [];
        for (i = 0; i < len; i++) {
            if(tmpArray.indexOf(data.goodsDetails[i].time) === -1)
                tmpArray.push(data.goodsDetails[i].time)
        }

        this.setState({goodsDetailTimeArray:tmpArray});
    }

    getTicketType=(data,targetTime)=> {
        if(data.goodsDetails == null)
            return null;

        let len = data.goodsDetails.length;
        let tmpArray = [];
        let i = 0;
        for (i = 0; i < len; i++) {
            if (this.state.goodsData.goodsDetails[i].time === targetTime) {
                tmpArray.push(data.goodsDetails[i].ticketType);
                console.log("找到票档了");
            }
        }
        this.setState({ticketTypeArray:tmpArray});
    }

    render(){
        return(
            <Card hoverable={false}
                  className={"detail-card"}>
                <Row>
                    <Col span={8} className={"poster"}>
                        <img alt = "image" src = {this.state.goodsData.image} className={"detail-card-img"}/>
                    </Col>
                    <Col span = {16} >
                        <Row className={"detail-card-show-name"}>
                            {this.state.goodsData.name}
                        </Row>
                        <Row className={"detail-card-show-time"}>
                            <Col>时间：</Col>
                            <Col> {this.state.goodsData.startTime} - {this.state.goodsData.endTime}</Col>
                        </Row>
                        <Row className={"detail-card-show-address"}>
                            <Col>
                                地点：
                            </Col>
                            <Col>
                                {this.state.goodsData.address}
                            </Col>
                        </Row>
                        <Row className={"detail-card-tips"}><ExclamationCircleFilled className={"detail-card-icon"}/>
                            场次时间均为演出当地时间
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                场次
                            </Col>
                            <Col className={"detail-card-show-time"}>
                                <RadioGroup options={this.state.goodsDetailTimeArray} onChange={this.onChange1} value={this.state.goodsDetailTime} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                票档
                            </Col>
                            <Col className={"detail-card-show-time"}>
                                {/*<Radio.Group size="large" onChange={onChange2} defaultValue="a">*/}
                                {/*    <Radio.Button value="a">1980元</Radio.Button>*/}
                                {/*    <Radio.Button value="b">880元</Radio.Button>*/}
                                {/*</Radio.Group>*/}
                                <RadioGroup options={this.state.ticketTypeArray} onChange={this.onChange2} value={this.state.ticketsType}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                数量
                            </Col>
                            <Col className={"detail-card-num-choice"}>
                                <InputNumber min={1} max={6} defaultValue={1} onChange={this.onChange3} />
                            </Col>
                            <Col className={"detail-card-tips"}>
                                <ExclamationCircleFilled className={"detail-card-icon"}/>每笔订单最多限购6张。库存：
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                合计
                            </Col>
                            <Col className={"detail-card-money"}>
                                199.00
                            </Col>
                            <Col className={"detail-card-yuan"}>元</Col>
                        </Row>
                        <Row>
                            <button className={"detail-card-buy-button"}>
                                立即购买
                            </button>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }
}