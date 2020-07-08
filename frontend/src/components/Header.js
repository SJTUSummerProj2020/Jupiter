import React from 'react';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import '../css/header.css';
import {SearchBar} from "./SearchBar";

const menu = (
    <Menu>
        <Menu.Item>
            <Link to={{pathname: '/personalInfo'}}>
                个人信息
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{pathname: '/personalInfo'}}>
               账号设置
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={{pathname: '/orderList'}}>
                订单管理
            </Link>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                退出登录
            </a>
        </Menu.Item>
    </Menu>
);
export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={loggedIn:true}
    }


    render() {
        return(
            <div className="header">
                <Link to={{pathname:'/'}}>
                    <div className="logo">
                        <img src={[require("../assets/logo2.png")]} alt="Website logo"/>
                    </div>
                </Link>
                <div className="navigationList">
                    <Link to={{pathname:'/'}}>
                        <li className="navigation">
                            首页
                        </li>
                    </Link>
                    <Link to={{pathname:'/goodsList'}}>
                        <li className="navigation">
                            分类
                        </li>
                    </Link>

                </div>
                <div className="searchBarContainer">
                    <SearchBar/>
                </div>
                <div className="auth">
                    {this.state.loggedIn ?
                        (
                            <li className="headerList">
                                <Dropdown overlay={menu}>
                                    <div>
                                        <UserOutlined/>欢迎
                                    </div>
                                </Dropdown>
                            </li>
                        ):
                    (<li className="headerList"><UserOutlined />登录</li>)}
                </div>
            </div>
        );
    }
}
