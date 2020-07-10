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
            <div className="loginheader">
                <div className="loginlogo">
                    <img src={[require("../assets/planet.png")]} width={80} height={80} alt="Website logo"/>
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
