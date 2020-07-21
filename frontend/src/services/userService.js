import {postRequest, postRequestForm} from "../utils/ajax";

export const login = (data,callback) => {
    const url = `http://localhost:8080/login`;
    postRequest(url, data, callback);
};

export const register = (data,callback) => {
    const url = `http://localhost:8080/register`;
    postRequest(url, data, callback);
};

export const logout = (callback) => {
    const url = `http://localhost:8080/logout`;
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `http://localhost:8080/checkSession`;
    postRequest(url, {}, callback);
};

export const getOrdersByUserId = (data, callback) => {
    const url = `http://localhost:8080/getOrdersByUserId`;
    postRequest(url, data, callback);
};

export const addOrder = (data,callback) => {
    const url = `http://localhost:8080/addOrder`;
    postRequest(url, data, callback);
};

export const getAllUsers = (data,callback) => {
    const url = `http://localhost:8080/getAllUsers`;
    postRequest(url, data, callback);
}

export const getAllOrders = (data,callback) => {
    const url = `http://localhost:8080/getAllOrders`;
    postRequest(url, data, callback);
}

export const changeUserStatusByUserId = (data,callback) => {
    const url = `http://localhost:8080/changeUserStatusByUserId`;
    postRequest(url, data, callback);
}

export const getRecommendGoods = (data,callback) => {
    const url = `http://localhost:8080/getRecommendGoods`;
    postRequest(url, data, callback);
}


// export const getUsers = (data, callback) => {
//     const url = `http://localhost:8080/getUsers`;
//     postRequest(url, data, callback);
// };
//
// export const editUser = (data,callback) =>
// {
//     const url = `http://localhost:8080/editUser`;
//     postRequest(url, data, callback);
// };
//
// export const deleteUser = (data, callback) => {
//     const url = `http://localhost:8080/deleteUser`;
//     postRequest(url, data, callback);
// };


