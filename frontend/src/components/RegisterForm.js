import React from "react";
import '../css/register.css';
import {Button, Form, Input, message, Select} from "antd";
import {LockOutlined, UserOutlined, PhoneOutlined} from "@ant-design/icons";
import {history} from "../utils/history";
import {register} from "../services/userService";
const{Option} = Select;

export class RegisterForm extends React.Component{
    constructor(props) {
        super(props);
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
        let username = values.username;
        let password = values.password;
        let phone = values.phone;
        const data = {
            username: username,
            password: password,
            phone: phone
        };
        const callback = (data) => {
            if(data.status === 0){
                message.success(data.msg);
               history.push('/login');
            }
            else{
                message.warning(data.msg);
            }
        }
        register(data,callback);
    }

    prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
            </Select>
        </Form.Item>
    );

    render(){
        return(
            <Form
                name="normal_register"
                className="register-form"
                onFinish={this.onFinish}
                initialValues={{ remember: false }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入您的用户名' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item
                    name="password_confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请确认您的密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次输入的密码不一致');
                            },
                        }),
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="确认密码"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: '请输入您的电话号码' }]}
                >
                    <Input
                        prefix={<PhoneOutlined className="site-form-item-icon" />}
                        addonBefore={this.prefixSelector}
                        type="phone"
                        placeholder="电话号码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        立即注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
