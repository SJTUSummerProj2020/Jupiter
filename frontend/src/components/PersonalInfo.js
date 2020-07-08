import React from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
export class PersonalInfoSidebar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item>
                    <Link to={{pathname:"/orderList"}}>
                        订单管理
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    账号设置
                </Menu.Item>
                <Menu.Item>
                    <Link to={{pathname:"/personalInfo"}}>
                        个人信息
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}
