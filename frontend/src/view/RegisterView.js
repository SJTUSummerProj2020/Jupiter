import React from "react";
import {LoginHeader} from "../components/LoginHeader";
import '../css/register.css'
import {RegisterForm} from "../components/RegisterForm";

export class RegisterView extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <LoginHeader/>
                <div className="register-page">
                    <div className="register-box" >
                        <h1 className="page-title">注册</h1>
                        <div className="register-content">
                            <RegisterForm/>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}
