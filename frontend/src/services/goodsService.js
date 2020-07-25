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

export const getGoodsByName = (data,callback) => {
    const url = `http://localhost:8080/getGoodsByName`;
    postRequest(url, data, callback);
};

export const getPopularGoods = (data,callback) => {
    const url = `http://localhost:8080/getPopularGoods`;
    postRequest(url, data, callback);
};

export const getAllAuctions = (data,callback) =>{
    const url = `http://localhost:8080/getAllAuctions`;
    postRequest(url,data,callback);
}

export const getAuctionByAuctionId = (data,callback) =>{
    const url = `http://localhost:8080/getAuctionByAuctionId`;
    postRequest(url,data,callback);
}

export const updateAuction = (data,callback) =>{
    const url = `http://localhost:8080/updateAuction`;
    postRequest(url,data,callback);
}

export const deleteGoodsByGoodsId = (data,callback) =>{
    const url = `http://localhost:8080/deleteGoodsByGoodsId`;
    postRequest(url,data,callback);
}

export const addAuction = (data,callback) => {
    const url = `http://localhost:8080/addAuction`;
    postRequest(url,data,callback);
}

export const editGoods = (data,callback) => {
    const url = `http://localhost:8080/editGoods`;
    postRequest(url,data,callback);
}

export const deleteAuctionByAuctionId = (data,callback) => {
    const url = `http://localhost:8080/deleteAuctionByAuctionId`;
    postRequest(url,data,callback);
}

export const editAuction = (data,callback) => {
    const url = `http://localhost:8080/editAuction`;
    postRequest(url,data,callback);
}
