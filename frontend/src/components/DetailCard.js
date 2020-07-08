import React from 'react';
import { Row, Col,Card,List,InputNumber,Radio} from 'antd';
import"../css/detailcard.css"
import { ExclamationCircleFilled } from '@ant-design/icons';
function onChange1(e) {
    console.log('场次', e.target.value);
}

function onChange2(e) {
    console.log('票档',e.target.value);
}

function onChange3(value) {
    console.log('数量',value)
}
export class DetailCard extends React.Component{
    start_time;
    end_time;
    price;
    constructor(props) {
        super(props);
    }

    render(){
        const {info} = this.props;
        return(
            <Card hoverable={true}
                  className={"detail-card"}>
                <Row>
                    <Col span={8} className={"poster"}>
                        <img alt = "image" src = {info.image} className={"detail-card-img"}/>
                    </Col>
                    <Col span = {16} >
                        <Row className={"detail-card-show-name"}>
                            {info.name}
                        </Row>
                        <Row className={"detail-card-show-time"}>
                            <Col>时间</Col>
                            <Col>{info.start_time} - {info.end_time}</Col>
                        </Row>
                        <Row className={"detail-card-show-address"}>
                            <Col>
                                地点
                            </Col>
                            <Col>
                                {info.address}
                            </Col>
                        </Row>
                        <Row className={"detail-card-tips"}><ExclamationCircleFilled className={"icon"}/>场次时间均为演出当地时间</Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                场次
                            </Col>
                            <Col>
                                <Radio.Group size = "large" onChange={onChange1} defaultValue="a">
                                    <Radio.Button value="a">7月22日星期三18：00</Radio.Button>
                                    <Radio.Button value="b">7月23日星期四20：00</Radio.Button>
                                    <Radio.Button value="c">7月26日星期日8：30</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                票档
                            </Col>
                            <Col>
                                <Radio.Group size="large" onChange={onChange2} defaultValue="a">
                                    <Radio.Button value="a">1980元</Radio.Button>
                                    <Radio.Button value="b">880元</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                数量
                            </Col>
                            <Col className={"detail-card-num-choice"}>
                                <InputNumber min={1} max={6} defaultValue={1} onChange={onChange3} />
                            </Col>
                            <Col className={"detail-card-tips"}>
                                <ExclamationCircleFilled className={"detail-card-icon"}/>每笔订单最多限购6张
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