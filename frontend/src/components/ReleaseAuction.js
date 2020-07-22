import React from "react";
import dayjs from 'dayjs';
import {Form, DatePicker, Input, Col, Row, Select, Button, InputNumber, message} from "antd";
import {addAuction} from "../services/goodsService";

const {Option} = Select;

export class ReleaseAuction extends React.Component{
    constructor(props) {
        super(props);
    }

    close2 = () => {
        this.props.close2();
    }

    onFinish = (values) =>{
        console.log(values);
        let startTime = dayjs(values.startTime).format("YYYY-MM-DD HH:mm:ss");
        console.log(startTime);
        const data = {
            detailId: values.goodsDetails,
            goodsId: this.props.goodsId,
            startingPrice:values.startingPrice,
            addingPrice:values.addingPrice,
            startTime: startTime,
            duration:values.duration
        };
        const callback = (data) => {
            if(data.status === 0){
                message.success(data.msg);
                this.close2();
            }
        };
        addAuction(data,callback);
    }

    disabledDate = (date) => {
        let endTime = new Date(this.props.endTime);
        return endTime < date;
    }

    render() {
        let items = [];
        for(let i = 0;i < this.props.goodsDetails.length;++i){
            items.push(
                <Option value={this.props.goodsDetails[i].detailId}>
                ID:{this.props.goodsDetails[i].detailId} {this.props.goodsDetails[i].ticketType}
                </Option>
            );
        }
        return(
            <Form
                layout="vertical"
                hideRequiredMark={true}
                onFinish={this.onFinish}
                initialValues={{
                    ['name']: this.props.name,
                    ['goodsId']: this.props.goodsId
                }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="商品名"
                        >
                            <Input placeholder="商品名"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="goodsId"
                            label="商品ID"
                        >
                            <Input placeholder="商品ID"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="goodsDetails"
                            label="票档"
                            rules={[{ required: true, message: '请选择票档' }]}
                        >
                            <Select placeholder="请选择票档">
                                {items}
                            </Select>
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
