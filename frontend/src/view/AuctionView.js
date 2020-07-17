import React from "react";
import {Header} from "../components/Header";
import{AuctionCard} from "../components/AuctionCard";
import {Col, Row} from "antd";
import {getAuctionByAuctionId} from "../services/goodsService";

let tmpId = null;
let auctionData = null;
export class AuctionView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            auctionId:null,
            auctionData:null,
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
    }

    render(){
        console.log('auctionData',auctionData);
        return(
            <Row align="top" gutter={16}>
                <Header/>
                <AuctionCard info={auctionData}/>
            </Row>
        );
    }
}