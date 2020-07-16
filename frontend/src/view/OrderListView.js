import React from "react";
import {Header} from "../components/Header";
import {Row,Col} from 'antd';
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {OrderList} from "../components/OrderList";
import {checkSession} from "../services/userService";

export class OrderListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '1',loggedIn:false,user:null};
    }
    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn: true,
                        user:data.data
                    }
                )
            }
        };
        checkSession(callback);
    }

    render() {
        return(
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                />
                <Row>
                    <Col span={7} push={2}>
                        <PersonalInfoSidebar myKey={this.state.key}/>
                    </Col>
                    <Col span={16}>
                        <OrderList
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
