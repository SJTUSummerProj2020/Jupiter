import React from 'react';
import { Row, Col,Card,List,InputNumber,Radio} from 'antd';
import"../css/detailrecommend.css"
import{RecommendList} from "./RecommendList";

export class DetailRecommend extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row className={"stem"}>
                    为您推荐
                </Row>
                <Row>
                    <Card hoverable={true} className={"list"}>
                        <RecommendList/>
                    </Card>
                </Row>
            </div>
        );
    }
}