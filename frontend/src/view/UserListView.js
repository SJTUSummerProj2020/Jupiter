import React from "react";
import {Header} from "../components/Header";
import {Col, Row} from "antd";
import {AdminSideBar} from "../components/AdminSideBar";
import {UserList} from "../components/UserList";
import {checkSession} from "../services/userService";
import {getAllUsers} from "../services/userService";
import {message} from "antd";
import {history} from "../utils/history";

export class UserListView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '1',userList:[]};
    }

    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                if(data.data.userType !== 0){
                    message.warning("对不起，您无权限访问此页面");
                    history.push("/");
                }
                else{
                    const getUserListData = {};
                    const getUserListCallback = (data) => {
                        console.log(data);
                        this.setState(
                            {userList:data.data.users}
                        );
                    };
                    getAllUsers(getUserListData,getUserListCallback);
                }
            }
            else{
                message.warning(data.msg);
                history.push("login");
            }
        }
        checkSession(callback);
    }

    changeUserStatus = (userId) => {
        let users = this.state.userList;
        let length = users.length;
        for(let i = 0;i < length;++i){
            if(users[i].userId === userId){
                users[i].userType *= (-1);
                break;
            }
        }
        this.setState(
            {userList:users}
        );
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
                        <UserList
                            userList={this.state.userList}
                            style={{marginBottom:10}}
                            changeUserStatus={this.changeUserStatus}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
