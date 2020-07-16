import React from 'react';
import { Card } from 'antd';
import "../css/recommendgoods.css";
const { Meta } = Card;


export class RecommendGoods extends React.Component{

    render() {
        const {info} = this.props;
        return(
            <Card
                hoverable={true}
                className={"recommend-goods-recommend-cards"}
                cover={<img alt="goods" src={info.image} className={"recommend-goods-goodsImg"}/>}
            >
                <Meta title={info.name} description={'¥' + info.price}/>
            </Card>
        );
    }
}
