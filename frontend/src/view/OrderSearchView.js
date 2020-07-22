import React from "react";
import {checkSession, getAllOrders} from "../services/userService";
import {Col, message, Row} from "antd";
import {history} from "../utils/history";
import {Header} from "../components/Header";
import {AdminSideBar} from "../components/AdminSideBar";
import {logout} from "../services/userService";
import {OrderSearchList} from "../components/OrderSearchList";

// let orderList = null;

export class OrderSearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key:'4',loggedIn:false,user:null,orderList:[]}
    }

    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data,
                        orderList:null
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
                        // orderList = data.data.orders;
                        //  console.log('从后端拿到的orders',this.state.orderList)
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
        const callback = (data) => {
            sessionStorage.removeItem("user");
            this.setState(
                {
                    loggedIn:false,
                    user:null
                }
            );
            message.success(data.msg);
            history.push('/');
        };
        logout(callback);
    }

    render() {
        if(this.state.loggedIn === false){
            return null;
        }
        // if(orderList === null){
        //     return null;
        // }
        // console.log('View里的order',this.state.orderList)
        if(this.state.orderList === null){
            return null;
        }
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
                      <OrderSearchList
                          style={{marginBottom:10}}
                          orders={this.state.orderList}
                          loggedIn={this.state.loggedIn}
                          user={this.state.user}
                      />
                  </Col>
              </Row>
          </div>
        );
    }
}
