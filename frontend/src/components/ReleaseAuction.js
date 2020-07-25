import React from "react";
import dayjs from 'dayjs';
import {Form, DatePicker, Input, Col, Row, Select, Button, InputNumber, message} from "antd";
import {addAuction} from "../services/goodsService";

const {Option} = Select;

export class ReleaseAuction extends React.Component{
    constructor(props) {
        super(props);
        this.state={endTime:null}
    }


    close = () => {
        this.props.close();
    }

    onFinish = (values) =>{
        let startTime = dayjs(values.startTime).format("YYYY-MM-DD HH:mm:ss");
        const data = {
            detailId: this.props.goodsDetails[values.goodsDetails].detailId,
            goodsId: this.props.goodsId,
            startingPrice:values.startingPrice,
            addingPrice:values.addingPrice,
            startTime: startTime,
            duration:values.duration
        };
        const callback = (data) => {
            if(data.status === 0){
                message.success(data.msg);
                this.close();
            }
        };
        addAuction(data,callback);
    }

    disabledDate = (date) => {
        let ticketTime = this.state.endTime.substr(0,10);
        let endTime = new Date(ticketTime);
        let startTime = new Date(this.props.startTime);
        if(isNaN(endTime.getTime())){
            return startTime < date;
        }
        else{
            return endTime < date;
        }
    }

    render() {
        let items = [];
        for(let i = 0;i < this.props.goodsDetails.length;++i){
            items.push(
                <Option
                    key={i}
                >
                    ID:{this.props.goodsDetails[i].detailId} {this.props.goodsDetails[i].ticketType}
                </Option>
            );
        }

        const initialValues = {
            name:this.props.name,
            goodsId:this.props.goodsId
        };
        return(
            <Form
                layout="vertical"
                hideRequiredMark={true}
                onFinish={this.onFinish}
                initialValues={initialValues}
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
                            <Select
                                placeholder="请选择票档"
                                onChange={(value)=>{
                                    this.setState({endTime:this.props.goodsDetails[value].time});
                                    console.log(value);
                                }}
                            >
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

