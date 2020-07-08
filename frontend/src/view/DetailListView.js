import React from "react";
import {Header} from "../components/Header";
import { Row, Col } from 'antd';
import "../css/header.css";
import "../css/detailgoodslist.css";
import {DetailGoodsList} from "../components/DetailGoodsList";
import {Recommendation} from "../components/Recommendation";

export class DetailListView extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <Row>
                    <Col span={16}>
                        <DetailGoodsList/>
                    </Col>
                    <Col span={8}>
                        <Recommendation/>
                    </Col>
                </Row>
            </div>
        );
    }
}
