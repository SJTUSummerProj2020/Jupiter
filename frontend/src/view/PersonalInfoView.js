import React from 'react';
import {Header} from "../components/Header";
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {Col, Row} from "antd";
import {OrderList} from "../components/OrderList";

export class PersonalInfoView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '3'};
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
                        My personal info
                    </Col>
                </Row>
            </div>
        );
    }
}
