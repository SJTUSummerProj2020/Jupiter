import React from "react";
import {Header} from "../components/Header";
import {Row,Col, BackTop} from 'antd';
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {OrderList} from "../components/OrderList";
import {checkSession} from "../services/userService";
import {getOrdersByUserId} from "../services/userService";
import {logout} from "../services/userService";
import {message} from 'antd';
import {history} from "../utils/history";

export class OrderListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '1',loggedIn:false,user:null,orderList:[]};
    }
    componentDidMount() {
        const callback = (data) => {
            console.log("OrderListView",data);
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn: true,
                        user:data.data
                    },
                    ()=>{
                        const requestData = {userId:this.state.user.userId};
                        const receiveData = (data) => {
                            this.setState(
                                {
                                    orderList:data.data.order
                                }
                            )
                        };
                        getOrdersByUserId(requestData,receiveData);
                    }
                )
            }
            else{
                message.warning(data.msg);
                history.push('/login');
            }
        };
        checkSession(callback);
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

    render() {
        return(
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logout={this.logout}
                />
                <Row>
                    <Col span={7} push={2}>
                        <PersonalInfoSidebar myKey={this.state.key}/>
                    </Col>
                    <Col span={16}>
                        <OrderList
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                            orderList={this.state.orderList}
                        />
                    </Col>
                </Row>
                <BackTop/>
            </div>
        );
    }
}
