import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';

export class AdminSideBar extends React.Component{
    constructor(props) {
        super(props);
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
                    <Link to={{pathname:"/userList"}}>
                        用户管理
                    </Link>
                </Menu.Item >
                <Menu.Item key="2">
                    系统订单
                </Menu.Item>
            </Menu>
        );
    }
}
