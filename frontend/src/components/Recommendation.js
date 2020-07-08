import React from "react";
import {Card} from "antd";
import {RecommendationList} from "./RecommendationList";

export class Recommendation extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Card title={<span style={{float:"left"}}>您可能还喜欢</span>} bordered={false}  style={{ width: 300 }}>
                <RecommendationList/>
            </Card>

            );
    }
}
