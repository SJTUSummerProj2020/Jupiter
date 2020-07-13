import React from "react";
import {Header} from "../components/Header";
import {Col, Row} from "antd";
import {AdminSideBar} from "../components/AdminSideBar";
import {UserList} from "../components/UserList";
import {checkSession} from "../services/userService";
import {message} from "antd";
import {history} from "../utils/history";

export class UserListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '1'};
    }
    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                if(data.data.userType !== 0){
                    message.warning("对不起，您无权限访问此页面");
                    history.push("/");
                }
            }
            else{
                message.warning(data.msg);
                history.push("login");
            }
        }
        checkSession(callback);
    }

    render() {
        return(
            <div>
                <Header/>
                <Row>
                    <Col span={7} push={2}>
                        <AdminSideBar myKey={this.state.key}/>
                    </Col>
                    <Col span={16}>
                        <UserList/>
                    </Col>
                </Row>
            </div>
        );
    }
}
