import {postRequest, postRequestForm} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const login = (data) => {
    const url = `http://localhost:8080/login`;
    const callback = (data) => {
        if (data.status >= 0) {
            if (data.data.userType === -1) {
                message.error("您的账号已经被禁用！");
            } else {
                localStorage.setItem('user', JSON.stringify(data.data));
                history.push("/");
                message.success(data.msg);
            }
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const register = (data) => {
    const url = `http://localhost:8080/register`;
    const callback = (data) => {
        if (data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            message.success(data.msg);
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `http://localhost:8080/logout`;

    const callback = (data) => {
        if (data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/");
            message.success(data.msg);
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const getOrders = (data, callback) => {
    const url = `http://localhost:8080/getOrders`;
    postRequest(url, data, callback);
};

export const addOrder = (data,callback) => {
    const url = `http://localhost:8080/addOrder`;
    postRequest(url, data, callback);
};

export const addCart = (data,callback) => {
    const url = `http://localhost:8080/addCart`;
    postRequest(url, data, callback);
};

export const getUsers = (data, callback) => {
    const url = `http://localhost:8080/getUsers`;
    postRequest(url, data, callback);
};
export const editCartItemNumber = (data,callback) =>
{
    const url = `http://localhost:8080/editCartItemNumber`;
    postRequest(url, data, callback);
};


export const editUser = (data,callback) =>
{
    const url = `http://localhost:8080/editUser`;
    postRequest(url, data, callback);
};

export const deleteUser = (id, callback) => {
    const data = {id: id};
    const url = `http://localhost:8080/deleteUser`;
    postRequestForm(url, data, callback);
};

export const checkSession = (callback) => {
    const url = `http://localhost:8080/checkSession`;
    postRequest(url, {}, callback);
};
