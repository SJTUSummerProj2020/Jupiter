import React from "react";
import {Header} from "../components/Header";
import {Row, Col, BackTop} from 'antd';
import {DetailOrderCard} from "../components/DetailOrderCard";

export class DetailOrderView extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
    }

    render() {
        return(
            <div>
               <Header/>
               <DetailOrderCard info={this.props.location.state}/>
            </div>
        );
    }
}
