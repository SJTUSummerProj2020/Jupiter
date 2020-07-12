import React from "react";
import {List, Avatar} from 'antd';

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
                            title={<div>User name: {item.userName}</div>}
                            description={
                                <div className={"userListDescription"}>
                                    <div className={"userId"}>
                                        User ID: {item.userId}
                                    </div>
                                    <div className={"phone"}>
                                        Phone number: {item.phone}
                                    </div>
                                    <div className={"password"}>
                                        Password: {item.password}
                                    </div>
                                    <div className={"userType"}>
                                        User type: {item.userType}
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
