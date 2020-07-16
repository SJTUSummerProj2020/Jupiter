import React from "react";
import {List} from 'antd';
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
import {getRecommendGoods,checkSession} from "../services/userService";
import '../css/recommendationlist.css';

export class RecommendationList extends React.Component{
    constructor(props) {
        super(props);
        this.state={loggedIn:false,user:null,goodsList:[]}
    }
    componentDidMount() {
        const checkSession_callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    },
                    ()=>{
                        if(this.state.loggedIn === true){
                            const data = {userId:this.state.user.userId,number:10};
                            const callback = (data) => {
                                console.log(data);
                                this.setState(
                                    {goodsList:data.data.goods}
                                );
                            }
                            getRecommendGoods(data,callback);
                        }
                    }
                );
            }
            else{
                const data = {number:10};
                const callback =(data) => {
                    console.log(data);
                    this.setState(
                        {goodsList:data.data.goods}
                    );
                };
                getRecommendGoods(data,callback);
            }
        };
        checkSession(checkSession_callback);
    }

    render() {
        return(
            <List
                itemLayout="vertical"
                size="small"
                dataSource={this.state.goodsList}
                renderItem={item => (
                    <List.Item>
                        <div className={"recommendation"}>
                            <img
                                width={100}
                                className={"recommendationImg"}
                                alt="cover"
                                src={item.image}
                            />
                            <div className={"recommendationDescription"}>
                                <div className={"recommendationName"}>
                                    <span>{item.name.length > 12 ? item.name.substr(0,12) + "..." : item.name}</span>
                                </div>
                                <div className={"recommendationPlace"}>
                                    <HomeOutlined/>{item.address.length > 18 ? item.address.substr(0,18) + "..." : item.address}
                                </div>
                                <div className={"recommendationTime"}>
                                    <CalendarOutlined/>
                                    <span>
                                        {item.startTime} - {item.endTime}
                                    </span>
                                </div>
                                <div className={"recommendationPrice"}>
                                    {
                                        item.goodsDetails.length === 0 ?
                                            (
                                                <span className={"canceled"}>演出取消</span>
                                            ) :
                                            (
                                                <span>￥{item.goodsDetails[0].price}起</span>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}
