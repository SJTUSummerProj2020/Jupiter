import React from 'react';
import {Header} from "../components/Header";
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {Col, Row} from "antd";

export class PersonalInfoView extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <Row>
                    <Col span={8}>
                        <PersonalInfoSidebar/>
                    </Col>
                </Row>
            </div>
        );
    }
}
