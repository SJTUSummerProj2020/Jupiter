import React from 'react';
import {Header} from "../components/Header";
import "../css/header.css";
import {PersonalInfoSidebar} from "../components/PersonalInfo";
import {Col, message, Row} from "antd";
import {checkSession} from "../services/userService";
import {logout} from "../services/userService";
import {history} from "../utils/history";

export class PersonalInfoView extends React.Component{
    constructor(props) {
        super(props);
        this.state={key: '3',loggedIn:false,user:null};
    }
    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
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
                        My personal info
                    </Col>
                </Row>
            </div>
        );
    }
}
