import React from 'react';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';
import {Menu, Dropdown} from 'antd';
import '../css/header.css';
import {SearchBar} from "./SearchBar";
import {getGoodsByName} from "../services/goodsService";

export class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    logout = () => {
        this.props.logout();
    }


    menu = (
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
                    查看订单
                </Link>
            </Menu.Item>
            <Menu.Item>
                <div onClick={this.logout}>
                    退出登录
                </div>
            </Menu.Item>
        </Menu>
    );

    adminMenu = (
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
                    查看订单
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={{pathname: '/userList'}}>
                    用户管理
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={{pathname: '/adminOrderList'}}>
                    系统订单
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={{pathname:'/adminGoods'}}>
                    票务管理
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={{pathname:'/orderSearch'}}>
                    订单统计
                </Link>
            </Menu.Item>
            <Menu.Item>
                <div onClick={this.logout}>
                    退出登录
                </div>
            </Menu.Item>
        </Menu>
    );



    render() {
        return(
            <div className="header">
                <Link to={{pathname:'/'}}>
                    <div className="logo">
                        <img src={[require("../assets/planet.png")]} width={80} height={80} alt="Website logo"/>
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
                    <Link to={{pathname:'/auctionList'}}>
                        <li className="navigation">
                            竞拍
                        </li>
                    </Link>
                </div>
                <div className="searchBarContainer">
                    <SearchBar/>
                </div>
                <div className="auth">
                    {
                        this.props.loggedIn ?
                            (
                                this.props.user.userType === 0 ?
                                    (
                                        <li className="headerList">
                                            <Dropdown overlay={this.adminMenu}>
                                                <div>
                                                    <UserOutlined/>{this.props.user.username}
                                                </div>
                                            </Dropdown>
                                        </li>
                                    ):
                                    (
                                        <li className="headerList">
                                            <Dropdown overlay={this.menu}>
                                                <div>
                                                    <UserOutlined/>{this.props.user.username}
                                                </div>
                                            </Dropdown>
                                        </li>
                                    )

                            ):
                            (
                                <li className="headerList">
                                    <Link to={{pathname:'/login'}}>
                                        <UserOutlined />登录
                                    </Link>
                                </li>
                            )
                    }
                </div>
            </div>
        );
    }
}
