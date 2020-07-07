import React from 'react';
import {UserOutlined} from '@ant-design/icons';
import '../css/loginheader.css';
import {SearchBar} from "./SearchBar";

export class LoginHeader extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="header">
                <div className="logo">
                    <img src={[require("../assets/logo2.png")]} alt="Website logo"/>
                </div>
                {/*<div className="searchBarContainer">*/}
                {/*    <SearchBar/>*/}
                {/*</div>*/}
                {/*<div className="auth">*/}
                {/*    <li className="headerList"><UserOutlined />登录</li>*/}
                {/*</div>*/}
            </div>
        );
    }
}
