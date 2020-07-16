import React from 'react';
import { Row, Card} from 'antd';
import"../css/detailrecommend.css"
import{RecommendList} from "./RecommendList";

export class DetailRecommend extends React.Component{

    render() {
        return (
            <div>
                <Row className={"detail-recommend-stem"}>
                    为您推荐
                </Row>
                <Row>
                    <Card hoverable={false} className={"detail-recommend-list"}>
                        <RecommendList/>
                    </Card>
                </Row>
            </div>
        );
    }
}
