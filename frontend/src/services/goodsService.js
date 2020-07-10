import {postRequest} from "../utils/ajax";

export const getAllGoods = (data,callback) => {
    const url = `http://localhost:8080/getAllGoods`;
    postRequest(url, data, callback);
};

export const getGoodsByGoodsId = (data,callback) => {
    const url = `http://localhost:8080/getGoodsByGoodsId`;
    postRequest(url, data, callback);
};

export const getGoodsByGoodsType = (data,callback) => {
    const url = `http://localhost:8080/getGoodsByGoodsType`;
    postRequest(url, data, callback);
};
