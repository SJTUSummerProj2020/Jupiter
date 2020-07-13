import React from "react";
import {List, Avatar} from 'antd';
import {UserOutlined, NumberOutlined, PhoneOutlined, LockOutlined, SafetyCertificateOutlined} from "@ant-design/icons";

const data = [
    {userId:2,userName:"user",password:"user",phone:110,userType:1}
];

export class UserList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={[require("../assets/avatar.jpg")]} />}
                            title={<div><UserOutlined /> 用户名: {item.userName}</div>}
                            description={
                                <div className={"userListDescription"}>
                                    <div className={"userId"}>
                                        <NumberOutlined /> 用户ID: {item.userId}
                                    </div>
                                    <div className={"phone"}>
                                        <PhoneOutlined /> 电话号码: {item.phone}
                                    </div>
                                    <div className={"password"}>
                                        <LockOutlined /> 用户密码: {item.password}
                                    </div>
                                    <div className={"userType"}>
                                        <SafetyCertificateOutlined /> 用户类别: {item.userType}
                                    </div>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        )
    }
}
