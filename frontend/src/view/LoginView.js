import React from 'react';
import '../css/login.css';
import {LoginForm} from "../components/LoginForm";
import {LoginHeader} from "../components/LoginHeader";
import {checkSession} from "../services/userService";
import {message} from "antd";
import {history} from "../utils/history";

export class LoginView extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                message.warning("您已经登录，请先登出");
                history.push("/");
            }
        };
        checkSession(callback);
    }

    render() {
        return(
            <div>
                <LoginHeader/>
                <div className="login-page">
                    <div className="login-container">
                        <div className="login-box">
                            <h1 className="page-title">登录</h1>
                            <div className="login-content">
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


