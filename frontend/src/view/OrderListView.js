import React from "react";
import {Header} from "../components/Header";
import {Row,Col} from 'antd';
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {OrderList} from "../components/OrderList";

export class OrderListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '1'};
    }
    render() {
        return(
            <div>
                <Header/>
                <Row>
                    <Col span={7} push={1}>
                        <PersonalInfoSidebar myKey={this.state.key}/>
                    </Col>
                    <Col span={16}>
                        <OrderList/>
                    </Col>
                </Row>
            </div>
        );
    }
}
