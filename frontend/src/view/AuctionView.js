import React from "react";
import {Header} from "../components/Header";
import{AuctionCard} from "../components/AuctionCard";
import {Col, message, Row} from "antd";
import {getAuctionByAuctionId} from "../services/goodsService";
import {checkSession} from "../services/userService";
import {logout} from "../services/userService";

let tmpId = null;
let auctionData = null;
export class AuctionView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            auctionId:null,
            auctionData:null,
            loggedIn:false,
            user:null
        };
    }

    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('?');
        tmpId = arr[1].substr(3);
        this.setState({auctionId:tmpId});

        const callback = (data) =>{
            auctionData = data.data;
            this.setState({auctionData:data.data});
        }
        if(tmpId === null){
            return;
        }
        const requestData = {auctionId:tmpId};
        getAuctionByAuctionId(requestData,callback);

        const checkSession_callback = (data) => {
            console.log(data);
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                )
            }
        };
        checkSession(checkSession_callback);
    }

    logout = () => {
        console.log("Logout");
        const callback = (data) => {
            sessionStorage.removeItem("user");
            this.setState(
                {
                    loggedIn:false,
                    user:null
                }
            );
            message.success(data.msg);
        };
        logout(callback);
    }

    render(){
        console.log('auctionData',auctionData);
        return(
            <Row align="top" gutter={16}>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logout={this.logout}
                />
                <AuctionCard info={auctionData}
                                loggedIn={this.state.loggedIn}
                                user={this.state.user}/>
            </Row>
        );
    }
}
