import React from "react";
import {Header} from "../components/Header";
import{AuctionCard} from "../components/AuctionCard";
import {Col, Row} from "antd";
import {DetailShowTab} from "../components/DetailShowTab";
import {DetailRecommend} from "../components/DetailRecommend";

export class AuctionView extends React.Component{

    render(){
        return(
            <Row align="top" gutter={16}>
                <Header/>
                <AuctionCard />
                <Row align = "top" gutter={16}>
                    <Col span={16}>
                        <DetailShowTab/>
                    </Col>
                    <Col span={4}>
                        <DetailRecommend/>
                    </Col>
                </Row>
            </Row>
        );
    }
}
