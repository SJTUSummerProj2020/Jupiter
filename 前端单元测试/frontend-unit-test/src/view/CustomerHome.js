import React from 'react';
import {ImageCarousel} from "../components/Carousel";
import {Header} from "../components/Header";
import {GoodsList} from "../components/GoodsList";
import "../css/header.css";
import {ClassificationCard} from "../components/ClassificationCard";
import {BackTop} from "antd";
import {getPopularGoods} from "../services/goodsService";

export class CustomerHome extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            goodsListAll:[],
            goodsAll:null,
            goodsList0:[],
            goods0:null,
            goodsList1:[],
            goods1:null,
            goodsList2:[],
            goods2:null,
            goodsList3:[],
            goods3:null
        }
    }

    componentDidMount() {
        const data = {number:7};
        const callback = (data) => {
            console.log(data.data);
            let goodsAll = data.data.itemAll[0];
            let goods0 = data.data.item0[0];
            let goods1 = data.data.item1[0];
            let goods2 = data.data.item2[0];
            let goods3 = data.data.item3[0];
            let goodsListAll = [];
            let goodsList0 = [];
            let goodsList1 = [];
            let goodsList2 = [];
            let goodsList3 = [];
            for(let i = 1;i < 7;++i){
                goodsListAll[i-1] = data.data.itemAll[i];
                goodsList0[i-1] = data.data.item0[i];
                goodsList1[i-1] = data.data.item1[i];
                goodsList2[i-1] = data.data.item2[i];
                goodsList3[i-1] = data.data.item3[i];
            }
            this.setState(
                {
                    goodsAll:goodsAll,
                    goods0:goods0,
                    goods1:goods1,
                    goods2:goods2,
                    goods3:goods3,
                    goodsListAll:goodsListAll,
                    goodsList0:goodsList0,
                    goodsList1:goodsList1,
                    goodsList2:goodsList2,
                    goodsList3:goodsList3
                }
            )
        }
        getPopularGoods(data,callback);
    }

    render() {
        return(
            <div>
                <Header/>
                <ImageCarousel/>
                <div className={"goodsList"}>
                    <ClassificationCard
                        classification={"热门演出"}
                        goods={this.state.goodsAll}
                        goodsList={this.state.goodsListAll}
                    />
                    <ClassificationCard
                        classification={"演唱会"}
                        goods={this.state.goods0}
                        goodsList={this.state.goodsList0}
                    />
                    <ClassificationCard
                        classification={"话剧歌剧"}
                        goods={this.state.goods1}
                        goodsList={this.state.goodsList1}
                    />
                    <ClassificationCard
                        classification={"儿童亲子"}
                        goods={this.state.goods2}
                        goodsList={this.state.goodsList2}
                    />
                    <ClassificationCard
                        classification={"展览休闲"}
                        goods={this.state.goods3}
                        goodsList={this.state.goodsList3}
                    />
                </div>
                <BackTop/>
            </div>
        );
    }
}

// export default withRouter(CustomerHome);

