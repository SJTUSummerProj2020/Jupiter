import React from "react";
import {checkSession, getAllOrders} from "../services/userService";
import {Col, message, Row} from "antd";
import {history} from "../utils/history";
import {Header} from "../components/Header";
import {AdminSideBar} from "../components/AdminSideBar";
import {logout} from "../services/userService";

export class AdminGoodsView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key:'3',loggedIn:false,user:null}
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
                    logout={this.state.logout}
                />
                <Row>
                    <Col span={7} push={2}>
                        <AdminSideBar myKey={this.state.key}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
