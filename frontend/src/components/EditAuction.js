import React from "react";
import dayjs from "dayjs";
import moment from "moment";
import {Form, DatePicker, Input, Col, Row, Select, Button, InputNumber, message} from "antd";
import {editAuction} from "../services/goodsService";

export class EditAuction extends React.Component{
    constructor(props) {
        super(props);
    }

    disabledDate = (date) => {
        let startTime = new Date(this.props.startTime.substr(0,10));
        let endTime = new Date(this.props.time.substr(0,10));
        if(isNaN(endTime.getTime())){
            return startTime < date;
        }
        else{
            return endTime < date;
        }
    }

    close = () => {
        this.props.close();
    }

    onFinish = (values) => {
        console.log(values);
        let startTime = dayjs(values.startTime).format("YYYY-MM-DD HH:mm:ss");
        console.log(startTime);
        const data = {
            auctionId:values.auctionId,
            detailId:values.detailId,
            goodsId:values.goodsId,
            startingPrice:values.startingPrice,
            addingPrice:values.addingPrice,
            startTime:startTime,
            duration:values.duration
        };
        const callback = (data) => {
            if(data !== null && data.status === 0){
                message.success(data.msg);
                this.close();
            }
        };
        editAuction(data,callback);
    }

    render() {
        console.log(this.props);
        return(
            <Form
                layout="vertical"
                hideRequiredMark={true}
                onFinish={this.onFinish}
                initialValues={{
                    ['name']: this.props.name,
                    ['goodsId']: this.props.goodsId,
                    ['ticketType']: this.props.ticketType,
                    ['time']: this.props.time,
                    ['detailId']: this.props.detailId,
                    ['auctionId']: this.props.auctionId,
                    ['startTime']: moment(this.props.startTime),
                    ['duration']: this.props.duration,
                    ['startingPrice']: this.props.startingPrice,
                    ['addingPrice']: this.props.addingPrice
                }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="商品名"
                        >
                            <Input placeholder="商品名" disabled={true}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="goodsId"
                            label="商品ID"
                        >
                            <Input placeholder="商品ID" disabled={true}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="ticketType"
                            label="票档"
                        >
                            <Input placeholder="票档" disabled={true}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="time"
                            label="演出时间"
                        >
                            <Input placeholder="演出时间" disabled={true}/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="detailId"
                            label="票档ID"
                        >
                            <Input placeholder="票档ID" disabled={true}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="auctionId"
                            label="拍卖ID"
                        >
                            <Input placeholder="拍卖ID" disabled={true}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="startTime"
                            label="开始时间"
                            rules={[{ required: true, message: '请输入开始时间' }]}
                        >
                            <DatePicker placeholder="开始时间" showTime disabledDate={this.disabledDate}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="duration"
                            label="持续时间(s)"
                            rules={[{ required: true, message: '请输入持续时间' }]}
                        >
                            <InputNumber
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="startingPrice"
                            label="起拍价(￥)"
                            rules={[{ required: true, message: '请输入起拍价' }]}
                        >
                            <InputNumber
                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="addingPrice"
                            label="加价幅度(￥)"
                            rules={[{ required: true, message: '请输入加价幅度' }]}
                        >
                            <InputNumber
                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}
