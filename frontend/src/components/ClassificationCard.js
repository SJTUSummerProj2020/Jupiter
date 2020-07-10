import React from "react";
import '../css/classificationcard.css';
import{Card} from "antd";
import {Link} from 'react-router-dom';
import {GoodsList} from "./GoodsList";
const {Meta} = Card;

export class ClassificationCard extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Card
                title={<span style={{float:"left"}}>话剧歌剧</span>}
                bordered={false}
                className={"classification-card"}
                extra={
                    <Link to={{pathname: '/goodsList'}} target="_blank">
                        <span>查看更多</span>
                    </Link>
                }
                style={{ width: 1050, marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
            >
               <div className={"classification-content"}>
                   <div className={"most-popular"}>
                       <Card
                           hoverable
                           style={{ width: 290, height: 560 }}
                           cover={<img alt="image" src={require("../assets/goods/1.jpg")} className={"mostPopularImg"}/>}
                       >
                           <Meta title="求婚女王" description="￥50" />
                       </Card>
                   </div>
                   <div className={"popular-cards"}>
                       <GoodsList/>
                   </div>
               </div>
            </Card>
        );
    }
}
