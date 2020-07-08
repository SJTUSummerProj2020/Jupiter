import React from 'react';
import {Header} from "../components/Header";
import {DetailCard} from "../components/DetailCard";
import{ShowTab} from "../components/ShowTab";
import {DetailRecommend} from "../components/DetailRecommend";
import { Row, Col,Card,Tabs} from 'antd';

const data = {
    image:require('../assets/goods/10.png'),
    name:"管他是谁的演唱会",
    start_time:"2020.07.10",
    end_time:"2020.07.18",
    address:"上海市 | 生活实验室小剧场 ",
    time_list:[{time:"2020.07.10 星期三 08:30"},{time:"2020.07.12 星期五 18:30"},
        {time:"2020.07.14 星期日 20:00"},{time:"2020.07.18 星期三 18：00"}],
    ticket_type:[{content:"内场前排",price:1980.00},{content: "外场前排",price:880.00},{content:"外场后排",price:380.00}]
    };


export class DetailView extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <DetailCard info={data} />
                <Row>
                    <Col span={12}>
                        <ShowTab/>
                    </Col>
                    <Col span={4} offset={3}>
                        <DetailRecommend/>
                    </Col>
                </Row>
            </div>
        );
    }
}