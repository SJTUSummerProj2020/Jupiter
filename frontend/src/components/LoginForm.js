import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/login.css';

export class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Form
                name="normal_login"
                className="login-form"
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
                {/*<Form.Item>*/}
                {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
                {/*        <Checkbox>Remember me</Checkbox>*/}
                {/*    </Form.Item>*/}

                {/*    <a className="login-form-forgot" href="">*/}
                {/*        Forgot password*/}
                {/*    </a>*/}
                {/*</Form.Item>*/}

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <a className={"register"} href="" >立即注册</a>
                </Form.Item>
            </Form>
        );
    }
}
