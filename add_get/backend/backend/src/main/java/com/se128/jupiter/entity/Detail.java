package com.se128.jupiter.entity;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document(collection = "goodsdetail")
public class Detail {

    @Id
    @Field(name = "id")
    private ObjectId id;

    @Field(name = "goods_id")
    private Integer goodsId;

    @Field(name = "detail")
    private String detail;

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

//    public Integer getGoodsId() {
//        return goodsId;
//    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

//    public void setId(ObjectId id) {
//        this.id = id;
//    }
//
//    public ObjectId getId() {
//        return id;
//    }
}
