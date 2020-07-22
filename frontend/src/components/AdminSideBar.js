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
                    <Link to={{pathname:"/adminOrderList"}}>
                        系统订单
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={{pathname:"/adminGoods"}}>
                        票务管理
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={{pathname:"/OrderSearch"}}>
                        分时查询
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}
