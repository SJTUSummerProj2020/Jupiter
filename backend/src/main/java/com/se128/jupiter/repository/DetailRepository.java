package com.se128.jupiter.repository;

import com.se128.jupiter.entity.Detail;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DetailRepository extends MongoRepository<Detail, ObjectId> {

    Detail getDetailByGoodsId(Integer goodsId);

}
