import React from 'react';
import { Card } from 'antd';
import "../css/goods.css"
import {Link} from "react-router-dom";
const { Meta } = Card;

export class Goods extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {info} = this.props;
        return(
            <Link to={{
                pathname: '/detail',
                search: '?id=' + info.goodsId}}
            >
                <Card
                    hoverable={true}
                    style={{width: 180, marginLeft: 30}}
                    cover={<img alt="goods" src={info.image} className={"goodsImg"}/>}
                >
                    <Meta
                        title={info.name}
                        description={
                            info.goodsDetails.length===0 ?
                                (
                                    <span className={"canceled"}>演出取消</span>
                                ):
                                (
                                    <span>￥{info.goodsDetails[0].price}起</span>
                                )
                        }
                    />
                </Card>
            </Link>
        );
    }
}
