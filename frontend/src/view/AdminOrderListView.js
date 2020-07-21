import React from "react";
import {Header} from "../components/Header";
import {Col, Row, BackTop} from "antd";
import {AdminSideBar} from "../components/AdminSideBar";
import {checkSession, getAllOrders} from "../services/userService";
import {message} from "antd";
import {history} from "../utils/history";
import {AdminOrderList} from "../components/AdminOrderList";
import {logout} from "../services/userService";

export class AdminOrderListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '2',orderList:[],loggedIn:false,user:null};
    }

    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                );
                if(data.data.userType !== 0){
                    message.warning("对不起，你无权限访问此页面");
                    history.push("/");
                }
                else{
                    const getAllOrdersData = {};
                    const getAllOrdersCallback = (data) => {
                        this.setState(
                            {orderList: data.data.orders}
                        );
                    };
                    getAllOrders(getAllOrdersData,getAllOrdersCallback);
                }
            }
            else{
                message.warning(data.msg);
                history.push("login");
            }
        }
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
                        <AdminSideBar myKey={this.state.key}/>
                    </Col>
                    <Col span={16}>
                        <AdminOrderList
                            orderList={this.state.orderList}
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                        />
                    </Col>
                </Row>
                <BackTop/>
            </div>
        );
    }
}
