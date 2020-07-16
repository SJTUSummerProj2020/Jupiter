import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
export class PersonalInfoSidebar extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return(
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={[this.props.myKey]}
                mode="inline"
            >
                <Menu.Item key="1">
                    <Link to={{pathname:"/orderList"}}>
                        订单管理
                    </Link>
                </Menu.Item >
                <Menu.Item key="2">
                    账号设置
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={{pathname:"/personalInfo"}}>
                        个人信息
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}
