import {postRequest} from "../utils/ajax";
import {useCallback} from "react";

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

export const getGoodsByName = (data,callback) => {
    const url = `http://localhost:8080/getGoodsByName`;
    postRequest(url, data, callback);
};
