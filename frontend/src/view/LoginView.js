import React from 'react';
import {withRouter} from "react-router-dom";
import '../css/login.css';
import {LoginForm} from "../components/LoginForm";
import {LoginHeader} from "../components/LoginHeader";

export class LoginView extends React.Component{
    constructor(props) {
        super(props);
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

// export default withRouter(LoginView);


