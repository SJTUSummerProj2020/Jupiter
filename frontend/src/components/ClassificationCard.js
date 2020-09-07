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
        if(this.props.goods === null){
            return null;
        }
        return(
            <Card
                title={<span style={{float:"left"}}>{this.props.classification}</span>}
                bordered={false}
                className={"classification-card"}
                extra={
                    <Link to={{pathname: '/goodsList'}}>
                        <span>查看更多</span>
                    </Link>
                }
                style={{ width: 1050, marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
            >
               <div className={"classification-content"}>
                   <div className={"most-popular"}>
                       <Link to={{
                           pathname: '/detail',
                           search: '?id=' + this.props.goods.goodsId}}
                       >
                           <Card
                               hoverable
                               style={{ width: 290, height: 560 }}
                               cover={<img alt="goods" src={this.props.goods.image} className={"mostPopularImg"}/>}
                           >
                               <Meta
                                   title={this.props.goods.name}
                                   description={
                                       this.props.goods.goodsDetails.length===0 ?
                                           (
                                               <span className={"canceled"}>演出取消</span>
                                           ):
                                           (
                                               <span>￥{this.props.goods.goodsDetails[0].price}起</span>
                                           )
                                   }
                               />
                           </Card>
                       </Link>
                   </div>
                   <div className={"popular-cards"}>
                       <GoodsList goodsList={this.props.goodsList}/>
                   </div>
               </div>
            </Card>
        );
    }
}
