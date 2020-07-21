# 接口文档

[TOC]

## <font color="red">此文档已不更新，详见https://documenter.getpostman.com/view/11151107/T1DmDyKb?version=latest</font>

## 用户

### /login

前端：

```json
{
   "username":"root",
   "password":"root"
}
```

后端：

```json
{
    "status": 0,
    "msg": "登录成功！",
    "data": {
        "userId": 1,
        "userType": 0,
        "username": "root"
    }
}
```

### /register

前端：

```json
{
   "username":"user",
   "password":"user",
   "phone":1
}
```

后端：

```json
{
    "status": -102,
    "msg": "存在相同用户名，请更换用户名",
    "data": null
}
```

或者

```json
{
    "status": 0,
    "msg": "注册成功",
    "data": null
}
```

### /logout

前端：无

后端：

```json
{
    "status": 0,
    "msg": "登出成功！",
    "data": null
}
```

### /checkSession

前端：无

后端：

```json
{
    "status": 0,
    "msg": "登录成功！",
    "data": {
        "userId": 1,
        "username": "root",
        "userType": 0
    }
}
```

### /getOrdersByUserId

前端：

```json
{
    "userId":1
}
```

后端：

```json
{
    "status": 0,
    "msg": "登录成功！",
    "data": {
        "order": [
            {
                "goods": {
                    "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                    "endTime": "2020-08-07",
                    "goodsDetails": [
                        {
                            "detailId": 1890,
                            "goodsId": 513,
                            "price": 188.0,
                            "surplus": 1,
                            "ticketType": "预售票（188.00）",
                            "time": "2020-08-07 星期五 20:00"
                        }
                    ],
                    "goodsId": 513,
                    "goodsType": 0,
                    "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                    "name": "【杭州】「初夏人生」嘻哈派对",
                    "startTime": "2020-08-07",
                    "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
                },
                "goodsDetail": {
                    "detailId": 1890,
                    "goodsId": 513,
                    "price": 188.0,
                    "surplus": 1,
                    "ticketType": "预售票（188.00）",
                    "time": "2020-08-07 星期五 20:00"
                },
                "number": 1,
                "orderId": 1,
                "price": 188.0,
                "sourceId": 1000100,
                "time": {
                    "date": 9,
                    "day": 4,
                    "hours": 9,
                    "minutes": 53,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 59,
                    "time": 1594259639000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：上海市 | 珍珠剧场The Pearl",
                    "endTime": "2020-07-11",
                    "goodsDetails": [
                        {
                            "detailId": 1891,
                            "goodsId": 514,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元（预售票）",
                            "time": "2020-07-09 周四 21:00"
                        },
                        {
                            "detailId": 1892,
                            "goodsId": 514,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元（预售票）",
                            "time": "2020-07-10 周五 21:00"
                        },
                        {
                            "detailId": 1893,
                            "goodsId": 514,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元（预售票）",
                            "time": "2020-07-11 周六 21:00"
                        }
                    ],
                    "goodsId": 514,
                    "goodsType": 0,
                    "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
                },
                "goodsDetail": {
                    "detailId": 1891,
                    "goodsId": 514,
                    "price": 80.0,
                    "surplus": 1,
                    "ticketType": "80元（预售票）",
                    "time": "2020-07-09 周四 21:00"
                },
                "number": 2,
                "orderId": 2,
                "price": 80.0,
                "sourceId": 128139,
                "time": {
                    "date": 9,
                    "day": 4,
                    "hours": 10,
                    "minutes": 0,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 41,
                    "time": 1594260041000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198.0,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888.0,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 3,
                "price": 1776.0,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 16,
                    "minutes": 57,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 31,
                    "time": 1594371451000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198.0,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888.0,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 4,
                "price": 1776.0,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 17,
                    "minutes": 0,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 2,
                    "time": 1594371602000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198.0,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60.0,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80.0,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100.0,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888.0,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400.0,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888.0,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 5,
                "price": 1776.0,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 17,
                    "minutes": 5,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 40,
                    "time": 1594371940000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            }
        ]
    }
}
```

### /getAllUsers

后端

```
{
    "status": 0,
    "msg": "获取成功！",
    "data": {
        "users": [
            {
                "orders": [
                    {
                        "goods": {
                            "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                            "endTime": "2020-08-07",
                            "goodsDetails": [
                                {
                                    "detailId": 1890,
                                    "goodsId": 513,
                                    "price": 188,
                                    "surplus": 1,
                                    "ticketType": "预售票（188.00）",
                                    "time": "2020-08-07 星期五 20:00"
                                }
                            ],
                            "goodsId": 513,
                            "goodsType": 0,
                            "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                            "name": "【杭州】「初夏人生」嘻哈派对",
                            "startTime": "2020-08-07",
                            "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
                        },
                        "goodsDetail": {
                            "detailId": 1890,
                            "goodsId": 513,
                            "price": 188,
                            "surplus": 1,
                            "ticketType": "预售票（188.00）",
                            "time": "2020-08-07 星期五 20:00"
                        },
                        "number": 1,
                        "orderId": 1,
                        "price": 188,
                        "sourceId": 1000100,
                        "time": {
                            "date": 9,
                            "day": 4,
                            "hours": 9,
                            "minutes": 53,
                            "month": 6,
                            "nanos": 0,
                            "seconds": 59,
                            "time": 1594259639000,
                            "timezoneOffset": -480,
                            "year": 120
                        },
                        "userId": 1
                    },
                    {
                        "goods": {
                            "address": "场馆：上海市 | 珍珠剧场The Pearl",
                            "endTime": "2020-07-11",
                            "goodsDetails": [
                                {
                                    "detailId": 1891,
                                    "goodsId": 514,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元（预售票）",
                                    "time": "2020-07-09 周四 21:00"
                                },
                                {
                                    "detailId": 1892,
                                    "goodsId": 514,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元（预售票）",
                                    "time": "2020-07-10 周五 21:00"
                                },
                                {
                                    "detailId": 1893,
                                    "goodsId": 514,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元（预售票）",
                                    "time": "2020-07-11 周六 21:00"
                                }
                            ],
                            "goodsId": 514,
                            "goodsType": 0,
                            "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                            "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                            "startTime": "2020-07-09",
                            "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
                        },
                        "goodsDetail": {
                            "detailId": 1891,
                            "goodsId": 514,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元（预售票）",
                            "time": "2020-07-09 周四 21:00"
                        },
                        "number": 2,
                        "orderId": 2,
                        "price": 80,
                        "sourceId": 128139,
                        "time": {
                            "date": 9,
                            "day": 4,
                            "hours": 10,
                            "minutes": 0,
                            "month": 6,
                            "nanos": 0,
                            "seconds": 41,
                            "time": 1594260041000,
                            "timezoneOffset": -480,
                            "year": 120
                        },
                        "userId": 1
                    },
                    {
                        "goods": {
                            "address": "场馆：济南市 | 济南江湖艺社",
                            "endTime": "2020-08-17",
                            "goodsDetails": [
                                {
                                    "detailId": 8893,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8894,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8895,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8896,
                                    "goodsId": 1789,
                                    "price": 198,
                                    "surplus": 0,
                                    "ticketType": "VIP198元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8897,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8898,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8899,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8900,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8901,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8902,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8903,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                }
                            ],
                            "goodsId": 1789,
                            "goodsType": 5,
                            "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                            "name": "【济南】济南江湖艺社曲艺演出",
                            "startTime": "2020-07-09",
                            "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                        },
                        "goodsDetail": {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        "number": 2,
                        "orderId": 3,
                        "price": 1776,
                        "sourceId": 54749110,
                        "time": {
                            "date": 10,
                            "day": 5,
                            "hours": 16,
                            "minutes": 57,
                            "month": 6,
                            "nanos": 0,
                            "seconds": 31,
                            "time": 1594371451000,
                            "timezoneOffset": -480,
                            "year": 120
                        },
                        "userId": 1
                    },
                    {
                        "goods": {
                            "address": "场馆：济南市 | 济南江湖艺社",
                            "endTime": "2020-08-17",
                            "goodsDetails": [
                                {
                                    "detailId": 8893,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8894,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8895,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8896,
                                    "goodsId": 1789,
                                    "price": 198,
                                    "surplus": 0,
                                    "ticketType": "VIP198元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8897,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8898,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8899,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8900,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8901,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8902,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8903,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                }
                            ],
                            "goodsId": 1789,
                            "goodsType": 5,
                            "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                            "name": "【济南】济南江湖艺社曲艺演出",
                            "startTime": "2020-07-09",
                            "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                        },
                        "goodsDetail": {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        "number": 2,
                        "orderId": 4,
                        "price": 1776,
                        "sourceId": 54749110,
                        "time": {
                            "date": 10,
                            "day": 5,
                            "hours": 17,
                            "minutes": 0,
                            "month": 6,
                            "nanos": 0,
                            "seconds": 2,
                            "time": 1594371602000,
                            "timezoneOffset": -480,
                            "year": 120
                        },
                        "userId": 1
                    },
                    {
                        "goods": {
                            "address": "场馆：济南市 | 济南江湖艺社",
                            "endTime": "2020-08-17",
                            "goodsDetails": [
                                {
                                    "detailId": 8893,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8894,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8895,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8896,
                                    "goodsId": 1789,
                                    "price": 198,
                                    "surplus": 0,
                                    "ticketType": "VIP198元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8897,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8898,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 14:30相声专场"
                                },
                                {
                                    "detailId": 8899,
                                    "goodsId": 1789,
                                    "price": 60,
                                    "surplus": 1,
                                    "ticketType": "60元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8900,
                                    "goodsId": 1789,
                                    "price": 80,
                                    "surplus": 1,
                                    "ticketType": "80元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8901,
                                    "goodsId": 1789,
                                    "price": 100,
                                    "surplus": 1,
                                    "ticketType": "100元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8902,
                                    "goodsId": 1789,
                                    "price": 888,
                                    "surplus": 1,
                                    "ticketType": "套票888元（8人包厢）",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                },
                                {
                                    "detailId": 8903,
                                    "goodsId": 1789,
                                    "price": 400,
                                    "surplus": 1,
                                    "ticketType": "套票400元",
                                    "time": "2020-07-11 周六 19:30相声专场"
                                }
                            ],
                            "goodsId": 1789,
                            "goodsType": 5,
                            "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                            "name": "【济南】济南江湖艺社曲艺演出",
                            "startTime": "2020-07-09",
                            "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                        },
                        "goodsDetail": {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        "number": 2,
                        "orderId": 5,
                        "price": 1776,
                        "sourceId": 54749110,
                        "time": {
                            "date": 10,
                            "day": 5,
                            "hours": 17,
                            "minutes": 5,
                            "month": 6,
                            "nanos": 0,
                            "seconds": 40,
                            "time": 1594371940000,
                            "timezoneOffset": -480,
                            "year": 120
                        },
                        "userId": 1
                    }
                ],
                "password": "root",
                "phone": "54749110",
                "userId": 1,
                "userType": 0,
                "username": "root"
            },
            {
                "orders": [],
                "password": "user",
                "phone": "110",
                "userId": 2,
                "userType": 1,
                "username": "user"
            },
            {
                "orders": [],
                "password": "ban",
                "phone": "000",
                "userId": 3,
                "userType": -1,
                "username": "ban"
            },
            {
                "orders": [],
                "password": "user1",
                "phone": "1",
                "userId": 4,
                "userType": 1,
                "username": "user1"
            }
        ]
    }
}
```

## /changeUserStatusByUserId

前端：

```
{
    "userId":"2"
}
```

后端：

```
{
    "status": 0,
    "msg": "修改成功！",
    "data": null
}
```

## 商品

### /getGoodsByGoodsId

前端：

```json
{
    "goodsId":120
}
```

后端：

```json
{
    "status": 0,
    "msg": "成功！",
    "data": {
        "address": "场馆：上海市 | 生活实验室小剧场",
        "endTime": "2020-07-18",
        "goodsDetails": [
            {
                "detailId": 434,
                "goodsId": 123,
                "price": 150.0,
                "surplus": 0,
                "ticketType": "150元",
                "time": "2020-07-10 周五 19:30"
            }
        ],
        "goodsId": 123,
        "goodsType": 0,
        "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
        "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
        "startTime": "2020-07-10",
        "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
    }
}
```

### /getAllGoods

前端：

```
{
    "pageId":"0",
    "pageSize":"10",
    "goodsType":"-1"
}
```

后端：

```json
{
    "status": 0,
    "msg": "获取成功！",
    "data": {
        "totalNum": 1395,
        "goods": [
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "endTime": "2020-08-07",
                "goodsDetails": [
                    {
                        "detailId": 1890,
                        "goodsId": 513,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "预售票（188.00）",
                        "time": "2020-08-07 星期五 20:00"
                    }
                ],
                "goodsId": 513,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【杭州】「初夏人生」嘻哈派对",
                "startTime": "2020-08-07",
                "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
            },
            {
                "address": "场馆：上海市 | 珍珠剧场The Pearl",
                "endTime": "2020-07-11",
                "goodsDetails": [
                    {
                        "detailId": 1891,
                        "goodsId": 514,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "80元（预售票）",
                        "time": "2020-07-09 周四 21:00"
                    },
                    {
                        "detailId": 1892,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-10 周五 21:00"
                    },
                    {
                        "detailId": 1893,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-11 周六 21:00"
                    }
                ],
                "goodsId": 514,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                "startTime": "2020-07-09",
                "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
            },
            {
                "address": "场馆：上海市 | 生活实验室小剧场",
                "endTime": "2020-07-18",
                "goodsDetails": [
                    {
                        "detailId": 1894,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1895,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-11 周六 19:30"
                    },
                    {
                        "detailId": 1896,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1897,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-18 周六 19:30"
                    }
                ],
                "goodsId": 515,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
                "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
                "startTime": "2020-07-10",
                "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
            },
            {
                "address": "场馆：上海市 | 上海 LOFAS",
                "endTime": "2020-07-10",
                "goodsDetails": [
                    {
                        "detailId": 1898,
                        "goodsId": 516,
                        "price": 120,
                        "surplus": 1,
                        "ticketType": "预售120元",
                        "time": "2020-07-10 周五 20:30"
                    }
                ],
                "goodsId": 516,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YyGHSD2GdSFh6kZml_!!2251059038.png_q60.jpg_.webp",
                "name": "【上海】7.10 | 海底捞乐 + 热血高校= All Night Party",
                "startTime": "2020-07-10",
                "website": "https://detail.damai.cn/item.htm?id=622245178425&clicktitle=7.10%20%7C%20%E6%B5%B7%E5%BA%95%E6%8D%9E%E4%B9%90%20%2B%20%E7%83%AD%E8%A1%80%E9%AB%98%E6%A0%A1%3D%20All%20Night%20Party"
            },
            {
                "address": "场馆：广州市 | 珠江琶醍啤酒文化创意艺术区b区",
                "endTime": "2020-07-26",
                "goodsDetails": [
                    {
                        "detailId": 1899,
                        "goodsId": 517,
                        "price": 492,
                        "surplus": 1,
                        "ticketType": "日场+夜场普通票492元",
                        "time": "2020-07-26 周日（日场+夜场）"
                    },
                    {
                        "detailId": 1900,
                        "goodsId": 517,
                        "price": 780,
                        "surplus": 1,
                        "ticketType": "日场+夜场VIP票780元",
                        "time": "2020-07-26 周日（日场+夜场）"
                    },
                    {
                        "detailId": 1901,
                        "goodsId": 517,
                        "price": 328,
                        "surplus": 1,
                        "ticketType": "日场328元",
                        "time": "2020-07-26 周日 15:00（日场）"
                    },
                    {
                        "detailId": 1902,
                        "goodsId": 517,
                        "price": 520,
                        "surplus": 1,
                        "ticketType": "日场VIP520元",
                        "time": "2020-07-26 周日 15:00（日场）"
                    },
                    {
                        "detailId": 1903,
                        "goodsId": 517,
                        "price": 328,
                        "surplus": 1,
                        "ticketType": "夜场328元",
                        "time": "2020-07-26 周日 19:00（夜场）"
                    },
                    {
                        "detailId": 1904,
                        "goodsId": 517,
                        "price": 520,
                        "surplus": 1,
                        "ticketType": "夜场VIP520元",
                        "time": "2020-07-26 周日 19:00（夜场）"
                    }
                ],
                "goodsId": 517,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN018mClPS2GdSFcOYZYn_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【广州】“Young城Yeah市”嘻遊季音乐节",
                "startTime": "2020-07-26",
                "website": "https://detail.damai.cn/item.htm?id=621233401568&clicktitle=%E2%80%9CYoung%E5%9F%8EYeah%E5%B8%82%E2%80%9D%E5%98%BB%E9%81%8A%E5%AD%A3%E9%9F%B3%E4%B9%90%E8%8A%82"
            },
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "endTime": "2020-07-17",
                "goodsDetails": [
                    {
                        "detailId": 1905,
                        "goodsId": 518,
                        "price": 66,
                        "surplus": 1,
                        "ticketType": "预售票（66.00）",
                        "time": "2020-07-17 星期五 20:00"
                    },
                    {
                        "detailId": 1906,
                        "goodsId": 518,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "情侣票（100.00）",
                        "time": "2020-07-17 星期五 20:00"
                    },
                    {
                        "detailId": 1907,
                        "goodsId": 518,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "畅饮票（188.00）",
                        "time": "2020-07-17 星期五 20:00"
                    }
                ],
                "goodsId": 518,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01bGOgRa2GdSFdjxlCY_!!2251059038.png_q60.jpg_.webp",
                "name": "【杭州】[包邮包裹] 说唱拼盘",
                "startTime": "2020-07-17",
                "website": "https://detail.damai.cn/item.htm?id=621463268515&clicktitle=%5B%E5%8C%85%E9%82%AE%E5%8C%85%E8%A3%B9%5D%20%E8%AF%B4%E5%94%B1%E6%8B%BC%E7%9B%98"
            },
            {
                "address": "场馆：杭州市 | MAO Livehouse杭州",
                "endTime": "2020-07-11",
                "goodsDetails": [
                    {
                        "detailId": 1908,
                        "goodsId": 519,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "预售票（150.00）",
                        "time": "2020-07-10 星期五 20:30"
                    },
                    {
                        "detailId": 1909,
                        "goodsId": 519,
                        "price": 240,
                        "surplus": 1,
                        "ticketType": "双人票（240.00）",
                        "time": "2020-07-10 星期五 20:30"
                    },
                    {
                        "detailId": 1910,
                        "goodsId": 519,
                        "price": 120,
                        "surplus": 1,
                        "ticketType": "预售票（120.00）",
                        "time": "2020-07-11 星期六 20:30"
                    },
                    {
                        "detailId": 1911,
                        "goodsId": 519,
                        "price": 200,
                        "surplus": 1,
                        "ticketType": "双人票（200.00）",
                        "time": "2020-07-11 星期六 20:30"
                    }
                ],
                "goodsId": 519,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01Z1ogYl2GdSFcsRNId_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【杭州】【全场畅饮】MAO双日特别企划「承包你的周末」",
                "startTime": "2020-07-10",
                "website": "https://detail.damai.cn/item.htm?id=621728240710&clicktitle=%E3%80%90%E5%85%A8%E5%9C%BA%E7%95%85%E9%A5%AE%E3%80%91MAO%E5%8F%8C%E6%97%A5%E7%89%B9%E5%88%AB%E4%BC%81%E5%88%92%E3%80%8C%E6%89%BF%E5%8C%85%E4%BD%A0%E7%9A%84%E5%91%A8%E6%9C%AB%E3%80%8D"
            },
            {
                "address": "场馆：杭州市 | 酒球会(9-Club)",
                "endTime": "2020-08-06",
                "goodsDetails": [
                    {
                        "detailId": 1915,
                        "goodsId": 522,
                        "price": 138,
                        "surplus": 1,
                        "ticketType": "138元",
                        "time": "2020-07-12 周日 16:00"
                    },
                    {
                        "detailId": 1916,
                        "goodsId": 522,
                        "price": 138,
                        "surplus": 1,
                        "ticketType": "138元",
                        "time": "2020-07-19 周日 16:00"
                    },
                    {
                        "detailId": 1917,
                        "goodsId": 522,
                        "price": 138,
                        "surplus": 1,
                        "ticketType": "138元",
                        "time": "2020-08-06 周四 19:30"
                    }
                ],
                "goodsId": 522,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01b1iqkn2GdSFbpNjP4_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【杭州】爆笑脱口秀拼盘演出-喜剧联盒国",
                "startTime": "2020-07-12",
                "website": "https://detail.damai.cn/item.htm?id=621775980720&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%8B%BC%E7%9B%98%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
            },
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "endTime": "2020-08-22",
                "goodsDetails": [
                    {
                        "detailId": 1918,
                        "goodsId": 523,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "预售票（80.00）",
                        "time": "2020-08-22 星期六 21:00"
                    }
                ],
                "goodsId": 523,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01LiJq9O2GdSFdst20A_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【杭州】千禧复古联盟 3.0 杭州站",
                "startTime": "2020-08-22",
                "website": "https://detail.damai.cn/item.htm?id=621892861121&clicktitle=%E5%8D%83%E7%A6%A7%E5%A4%8D%E5%8F%A4%E8%81%94%E7%9B%9F%203.0%20%E6%9D%AD%E5%B7%9E%E7%AB%99"
            },
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "endTime": "2020-08-08",
                "goodsDetails": [
                    {
                        "detailId": 1919,
                        "goodsId": 524,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "预售票（150.00）",
                        "time": "2020-08-08 星期六 19:00"
                    },
                    {
                        "detailId": 1920,
                        "goodsId": 524,
                        "price": 180,
                        "surplus": 1,
                        "ticketType": "现场票（180.00）",
                        "time": "2020-08-08 星期六 19:00"
                    }
                ],
                "goodsId": 524,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01HYX9r72GdSFdU7uH3_!!2251059038.png_q60.jpg_.webp",
                "name": "【杭州】赏味期限在今日",
                "startTime": "2020-08-08",
                "website": "https://detail.damai.cn/item.htm?id=622377829276&clicktitle=%E8%B5%8F%E5%91%B3%E6%9C%9F%E9%99%90%E5%9C%A8%E4%BB%8A%E6%97%A5"
            }
        ]
    }
}
```

### /getGoodsByGoodsType

前端：

```json
{
    "goodsType":0
}
```

后端:

```json
[
    {
        "goodsId": 120,
        "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
        "startTime": "2020-07-09",
        "endTime": "2020-07-11",
        "address": "场馆：上海市 | 珍珠剧场The Pearl",
        "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0",
        "goodsType": 0,
        "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
        "goodsDetails": [
            {
                "detailId": 430,
                "goodsId": 120,
                "price": 80.0,
                "surplus": 1,
                "time": "2020-07-09 周四 21:00",
                "ticketType": "80元（预售票）"
            }
        ]
    },
    {
        "goodsId": 121,
        "name": "【杭州】「初夏人生」嘻哈派对",
        "startTime": "2020-08-07 00:00:00",
        "endTime": "2020-08-07 00:00:00",
        "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
        "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9",
        "goodsType": 0,
        "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
        "goodsDetails": [
            {
                "detailId": 431,
                "goodsId": 121,
                "price": 188.0,
                "surplus": 1,
                "time": "2020-08-07 星期五 20:00",
                "ticketType": "预售票（188.00）"
            }
        ]
    },
]
```

### /getGoodsByName

前端：

```
{
    "name":"遇见"
}
```

后端：

```json
{
    "status": 0,
    "msg": "获取成功！",
    "data": {
        "goods": [
            {
                "address": "场馆：宁波市 | 宁波文化广场大剧院",
                "endTime": "2020-09-13",
                "goodsDetails": [
                    {
                        "detailId": 8286,
                        "goodsId": 1655,
                        "price": 50,
                        "surplus": 0,
                        "ticketType": "50元",
                        "time": "2020-09-13 周日 15:00"
                    },
                    {
                        "detailId": 8287,
                        "goodsId": 1655,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元",
                        "time": "2020-09-13 周日 15:00"
                    },
                    {
                        "detailId": 8288,
                        "goodsId": 1655,
                        "price": 180,
                        "surplus": 1,
                        "ticketType": "180元",
                        "time": "2020-09-13 周日 15:00"
                    },
                    {
                        "detailId": 8289,
                        "goodsId": 1655,
                        "price": 280,
                        "surplus": 0,
                        "ticketType": "280元",
                        "time": "2020-09-13 周日 15:00"
                    }
                ],
                "goodsId": 1655,
                "goodsType": 4,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01PrKrCk2GdSDjUOGmZ_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【宁波】视听音乐会《当交响遇见童话》",
                "startTime": "2020-09-13",
                "website": "https://detail.damai.cn/item.htm?id=609750268422&clicktitle=%E8%A7%86%E5%90%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%E3%80%8A%E5%BD%93%E4%BA%A4%E5%93%8D%E9%81%87%E8%A7%81%E7%AB%A5%E8%AF%9D%E3%80%8B"
            },
            {
                "address": "场馆：深圳市 | 深圳音乐厅小剧场",
                "endTime": "2020-11-28",
                "goodsDetails": [
                    {
                        "detailId": 8306,
                        "goodsId": 1660,
                        "price": 80,
                        "surplus": 0,
                        "ticketType": "80元",
                        "time": "2020-11-28 周六 19:30"
                    },
                    {
                        "detailId": 8307,
                        "goodsId": 1660,
                        "price": 180,
                        "surplus": 0,
                        "ticketType": "180元",
                        "time": "2020-11-28 周六 19:30"
                    },
                    {
                        "detailId": 8308,
                        "goodsId": 1660,
                        "price": 280,
                        "surplus": 1,
                        "ticketType": "280元",
                        "time": "2020-11-28 周六 19:30"
                    },
                    {
                        "detailId": 8309,
                        "goodsId": 1660,
                        "price": 380,
                        "surplus": 1,
                        "ticketType": "380元",
                        "time": "2020-11-28 周六 19:30"
                    }
                ],
                "goodsId": 1660,
                "goodsType": 4,
                "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN016Nm1tQ2GdSDuwMuA5_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【深圳】“漫步古典夜”小剧场系列精品音乐会 遇见×未见——卡尔•彼得森钢琴独奏音乐会",
                "startTime": "2020-11-28",
                "website": "https://detail.damai.cn/item.htm?id=610315872725&clicktitle=%E2%80%9C%E6%BC%AB%E6%AD%A5%E5%8F%A4%E5%85%B8%E5%A4%9C%E2%80%9D%E5%B0%8F%E5%89%A7%E5%9C%BA%E7%B3%BB%E5%88%97%E7%B2%BE%E5%93%81%E9%9F%B3%E4%B9%90%E4%BC%9A%20%E9%81%87%E8%A7%81%C3%97%E6%9C%AA%E8%A7%81%E2%80%94%E2%80%94%E5%8D%A1%E5%B0%94%E2%80%A2%E5%BD%BC%E5%BE%97%E6%A3%AE%E9%92%A2%E7%90%B4%E7%8B%AC%E5%A5%8F%E9%9F%B3%E4%B9%90%E4%BC%9A"
            },
            {
                "address": "场馆：苏州市 | 苏州山塘昆曲馆",
                "endTime": "2020-07-31",
                "goodsDetails": [
                    {
                        "detailId": 8885,
                        "goodsId": 1788,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "评弹茶座雅座48元",
                        "time": "2020-07-09 周四 10:00"
                    },
                    {
                        "detailId": 8886,
                        "goodsId": 1788,
                        "price": 60,
                        "surplus": 1,
                        "ticketType": "昆曲折子戏上午素唱60元",
                        "time": "2020-07-09 周四 10:00"
                    },
                    {
                        "detailId": 8887,
                        "goodsId": 1788,
                        "price": 78,
                        "surplus": 1,
                        "ticketType": "评弹专场78元",
                        "time": "2020-07-09 周四 10:00"
                    },
                    {
                        "detailId": 8888,
                        "goodsId": 1788,
                        "price": 98,
                        "surplus": 1,
                        "ticketType": "昆曲折子戏下午彩唱98元",
                        "time": "2020-07-09 周四 10:00"
                    },
                    {
                        "detailId": 8889,
                        "goodsId": 1788,
                        "price": 128,
                        "surplus": 1,
                        "ticketType": "昆曲评弹套票128元",
                        "time": "2020-07-09 周四 10:00"
                    },
                    {
                        "detailId": 8890,
                        "goodsId": 1788,
                        "price": 148,
                        "surplus": 1,
                        "ticketType": "148元（C类）",
                        "time": "2020-07-09 周四 19:45"
                    },
                    {
                        "detailId": 8891,
                        "goodsId": 1788,
                        "price": 178,
                        "surplus": 1,
                        "ticketType": "178元（B类）",
                        "time": "2020-07-09 周四 19:45"
                    },
                    {
                        "detailId": 8892,
                        "goodsId": 1788,
                        "price": 198,
                        "surplus": 1,
                        "ticketType": "198元（A类）",
                        "time": "2020-07-09 周四 19:45"
                    }
                ],
                "goodsId": 1788,
                "goodsType": 5,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01U5SoES2GdSFOzkuUg_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【苏州】昆评表演《遇见山塘》",
                "startTime": "2020-07-09",
                "website": "https://detail.damai.cn/item.htm?id=619730149465&clicktitle=%E6%98%86%E8%AF%84%E8%A1%A8%E6%BC%94%E3%80%8A%E9%81%87%E8%A7%81%E5%B1%B1%E5%A1%98%E3%80%8B"
            },
            {
                "address": "场馆：苏州市 | 严家花园景区",
                "endTime": "2020-12-31",
                "goodsDetails": [
                    {
                        "detailId": 8971,
                        "goodsId": 1805,
                        "price": 148,
                        "surplus": 1,
                        "ticketType": "148元（原价200）",
                        "time": "2020年4月16日-2020年12月31日 19：00-20："
                    },
                    {
                        "detailId": 8972,
                        "goodsId": 1805,
                        "price": 148,
                        "surplus": 1,
                        "ticketType": "148元（原价200）",
                        "time": "2020年4月16日-2020年12月31日 20：20-21："
                    }
                ],
                "goodsId": 1805,
                "goodsType": 5,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01AXF0N62GdSEhNqhTN_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【苏州】《遇见姑苏·木渎往事》夜晚场",
                "startTime": "2020-04-16",
                "website": "https://detail.damai.cn/item.htm?id=616360803105&clicktitle=%E3%80%8A%E9%81%87%E8%A7%81%E5%A7%91%E8%8B%8F%C2%B7%E6%9C%A8%E6%B8%8E%E5%BE%80%E4%BA%8B%E3%80%8B%E5%A4%9C%E6%99%9A%E5%9C%BA"
            }
        ]
    }
}
```

### /getPopularGoods

前端：

```
{
    "number":"3",
}
```

后端：

```json
{
    "status": 0,
    "msg": "获取成功！",
    "data": {
        "-1": [
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-08-07",
                "goodsDetails": [
                    {
                        "detailId": 1890,
                        "goodsId": 513,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "预售票（188.00）",
                        "time": "2020-08-07 星期五 20:00"
                    }
                ],
                "goodsId": 513,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【杭州】「初夏人生」嘻哈派对",
                "startTime": "2020-08-07",
                "viewCounter": 64,
                "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
            },
            {
                "address": "场馆：上海市 | 珍珠剧场The Pearl",
                "buyCounter": 1,
                "detail": "",
                "endTime": "2020-07-11",
                "goodsDetails": [
                    {
                        "detailId": 1891,
                        "goodsId": 514,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "80元（预售票）",
                        "time": "2020-07-09 周四 21:00"
                    },
                    {
                        "detailId": 1892,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-10 周五 21:00"
                    },
                    {
                        "detailId": 1893,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-11 周六 21:00"
                    }
                ],
                "goodsId": 514,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                "startTime": "2020-07-09",
                "viewCounter": 14,
                "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
            },
            {
                "address": "场馆：上海市 | 生活实验室小剧场",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-07-18",
                "goodsDetails": [
                    {
                        "detailId": 1894,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1895,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-11 周六 19:30"
                    },
                    {
                        "detailId": 1896,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1897,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-18 周六 19:30"
                    }
                ],
                "goodsId": 515,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
                "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
                "startTime": "2020-07-10",
                "viewCounter": 4,
                "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
            }
        ],
        "0": [
            {
                "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-08-07",
                "goodsDetails": [
                    {
                        "detailId": 1890,
                        "goodsId": 513,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "预售票（188.00）",
                        "time": "2020-08-07 星期五 20:00"
                    }
                ],
                "goodsId": 513,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                "name": "【杭州】「初夏人生」嘻哈派对",
                "startTime": "2020-08-07",
                "viewCounter": 64,
                "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
            },
            {
                "address": "场馆：上海市 | 珍珠剧场The Pearl",
                "buyCounter": 1,
                "detail": "",
                "endTime": "2020-07-11",
                "goodsDetails": [
                    {
                        "detailId": 1891,
                        "goodsId": 514,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "80元（预售票）",
                        "time": "2020-07-09 周四 21:00"
                    },
                    {
                        "detailId": 1892,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-10 周五 21:00"
                    },
                    {
                        "detailId": 1893,
                        "goodsId": 514,
                        "price": 100,
                        "surplus": 1,
                        "ticketType": "100元（预售票）",
                        "time": "2020-07-11 周六 21:00"
                    }
                ],
                "goodsId": 514,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                "startTime": "2020-07-09",
                "viewCounter": 14,
                "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
            },
            {
                "address": "场馆：上海市 | 生活实验室小剧场",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-07-18",
                "goodsDetails": [
                    {
                        "detailId": 1894,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1895,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-11 周六 19:30"
                    },
                    {
                        "detailId": 1896,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "150元",
                        "time": "2020-07-17 周五 19:30"
                    },
                    {
                        "detailId": 1897,
                        "goodsId": 515,
                        "price": 150,
                        "surplus": 0,
                        "ticketType": "150元",
                        "time": "2020-07-18 周六 19:30"
                    }
                ],
                "goodsId": 515,
                "goodsType": 0,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN019OYN192GdSFNbmN3f_!!2251059038.png_q60.jpg_.webp",
                "name": "【上海】爆笑脱口秀演出-喜剧联盒国",
                "startTime": "2020-07-10",
                "viewCounter": 4,
                "website": "https://detail.damai.cn/item.htm?id=619943654186&clicktitle=%E7%88%86%E7%AC%91%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%87%BA-%E5%96%9C%E5%89%A7%E8%81%94%E7%9B%92%E5%9B%BD"
            }
        ],
        "1": [
            {
                "address": "场馆：南京市 | 江苏荔枝大剧院",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-11-07",
                "goodsDetails": [
                    {
                        "detailId": 4842,
                        "goodsId": 941,
                        "price": 180,
                        "surplus": 2,
                        "ticketType": "180元",
                        "time": "2020-11-06 周五 19:30"
                    },
                    {
                        "detailId": 4843,
                        "goodsId": 941,
                        "price": 280,
                        "surplus": 2,
                        "ticketType": "280元",
                        "time": "2020-11-06 周五 19:30"
                    },
                    {
                        "detailId": 4844,
                        "goodsId": 941,
                        "price": 380,
                        "surplus": 2,
                        "ticketType": "380元",
                        "time": "2020-11-06 周五 19:30"
                    },
                    {
                        "detailId": 4845,
                        "goodsId": 941,
                        "price": 480,
                        "surplus": 2,
                        "ticketType": "480元",
                        "time": "2020-11-06 周五 19:30"
                    },
                    {
                        "detailId": 4846,
                        "goodsId": 941,
                        "price": 580,
                        "surplus": 2,
                        "ticketType": "580元",
                        "time": "2020-11-06 周五 19:30"
                    },
                    {
                        "detailId": 4847,
                        "goodsId": 941,
                        "price": 180,
                        "surplus": 2,
                        "ticketType": "180元",
                        "time": "2020-11-07 周六 19:30"
                    },
                    {
                        "detailId": 4848,
                        "goodsId": 941,
                        "price": 280,
                        "surplus": 2,
                        "ticketType": "280元",
                        "time": "2020-11-07 周六 19:30"
                    },
                    {
                        "detailId": 4849,
                        "goodsId": 941,
                        "price": 380,
                        "surplus": 2,
                        "ticketType": "380元",
                        "time": "2020-11-07 周六 19:30"
                    },
                    {
                        "detailId": 4850,
                        "goodsId": 941,
                        "price": 480,
                        "surplus": 2,
                        "ticketType": "480元",
                        "time": "2020-11-07 周六 19:30"
                    },
                    {
                        "detailId": 4851,
                        "goodsId": 941,
                        "price": 580,
                        "surplus": 2,
                        "ticketType": "580元",
                        "time": "2020-11-07 周六 19:30"
                    }
                ],
                "goodsId": 941,
                "goodsType": 1,
                "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01aYon2P2GdSD1Fn3Vv_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【南京】悬疑推理音乐剧《水曜日》",
                "startTime": "2020-11-06",
                "viewCounter": 1,
                "website": "https://detail.damai.cn/item.htm?id=606003508320&clicktitle=%E6%82%AC%E7%96%91%E6%8E%A8%E7%90%86%E9%9F%B3%E4%B9%90%E5%89%A7%E3%80%8A%E6%B0%B4%E6%9B%9C%E6%97%A5%E3%80%8B"
            },
            {
                "address": "场馆：广州市 | 广州大剧院歌剧厅",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-09-24",
                "goodsDetails": [
                    {
                        "detailId": 3316,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（马可波罗）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3317,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（忽必烈）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3318,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（柳娘）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3319,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（贾似道）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3320,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（真金太子）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3321,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（文天祥）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3322,
                        "goodsId": 768,
                        "price": 48,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（传云）48元/个",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3323,
                        "goodsId": 768,
                        "price": 68,
                        "surplus": 1,
                        "ticketType": "旅行手账本68元/本",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3324,
                        "goodsId": 768,
                        "price": 88,
                        "surplus": 1,
                        "ticketType": "秘密花园广口杯88元",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3325,
                        "goodsId": 768,
                        "price": 88,
                        "surplus": 1,
                        "ticketType": "稼轩词书灯88元/本",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3326,
                        "goodsId": 768,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "乐器胸针188元/套（4款）",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3327,
                        "goodsId": 768,
                        "price": 188,
                        "surplus": 1,
                        "ticketType": "歌剧《马可·波罗》系列 真丝丝巾188元",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3328,
                        "goodsId": 768,
                        "price": 268,
                        "surplus": 1,
                        "ticketType": "广州限定城市杯268元",
                        "time": "2020年6月18日——2020年9月24日"
                    },
                    {
                        "detailId": 3329,
                        "goodsId": 768,
                        "price": 7,
                        "surplus": 1,
                        "ticketType": "人物冰箱贴/徽章（两用）一套7个336元",
                        "time": "2020年6月18日——2020年9月24日"
                    }
                ],
                "goodsId": 768,
                "goodsType": 1,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01TollHA2GdSFRvrOR3_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【广州】（周边衍生品）广州大剧院原创歌剧《马可·波罗》",
                "startTime": "2020-06-19",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=620730685619&clicktitle=%EF%BC%88%E5%91%A8%E8%BE%B9%E8%A1%8D%E7%94%9F%E5%93%81%EF%BC%89%E5%B9%BF%E5%B7%9E%E5%A4%A7%E5%89%A7%E9%99%A2%E5%8E%9F%E5%88%9B%E6%AD%8C%E5%89%A7%E3%80%8A%E9%A9%AC%E5%8F%AF%C2%B7%E6%B3%A2%E7%BD%97%E3%80%8B"
            },
            {
                "address": "场馆：上海市 | 288 live house",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-08-30",
                "goodsDetails": [
                    {
                        "detailId": 3330,
                        "goodsId": 769,
                        "price": 180,
                        "surplus": 1,
                        "ticketType": "180元",
                        "time": "2020-07-31 周五 19:30"
                    }
                ],
                "goodsId": 769,
                "goodsType": 1,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01pI1Z4Q2GdSFYkF7wu_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【上海】话剧《情迷爱尔兰咖啡》",
                "startTime": "2020-07-31",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=620762536703&clicktitle=%E8%AF%9D%E5%89%A7%E3%80%8A%E6%83%85%E8%BF%B7%E7%88%B1%E5%B0%94%E5%85%B0%E5%92%96%E5%95%A1%E3%80%8B"
            }
        ],
        "2": [
            {
                "address": "场馆：长沙市 | 长沙303阳光剧场",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-08-15",
                "goodsDetails": [
                    {
                        "detailId": 5695,
                        "goodsId": 1024,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "80元",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5696,
                        "goodsId": 1024,
                        "price": 120,
                        "surplus": 1,
                        "ticketType": "120元",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5697,
                        "goodsId": 1024,
                        "price": 160,
                        "surplus": 1,
                        "ticketType": "160元",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5698,
                        "goodsId": 1024,
                        "price": 220,
                        "surplus": 1,
                        "ticketType": "220元",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5699,
                        "goodsId": 1024,
                        "price": 280,
                        "surplus": 1,
                        "ticketType": "亲子B套票280元（原价160元*2）",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5700,
                        "goodsId": 1024,
                        "price": 390,
                        "surplus": 1,
                        "ticketType": "亲子A套票390元（原价220元*2）",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5701,
                        "goodsId": 1024,
                        "price": 420,
                        "surplus": 1,
                        "ticketType": "三人B套餐420元（原价160元*3）",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5702,
                        "goodsId": 1024,
                        "price": 585,
                        "surplus": 1,
                        "ticketType": "三人A套票585元（原价220元*3）",
                        "time": "2020-08-15 周六 10:30"
                    },
                    {
                        "detailId": 5703,
                        "goodsId": 1024,
                        "price": 80,
                        "surplus": 1,
                        "ticketType": "80元",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5704,
                        "goodsId": 1024,
                        "price": 120,
                        "surplus": 1,
                        "ticketType": "120元",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5705,
                        "goodsId": 1024,
                        "price": 160,
                        "surplus": 1,
                        "ticketType": "160元",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5706,
                        "goodsId": 1024,
                        "price": 220,
                        "surplus": 1,
                        "ticketType": "220元",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5707,
                        "goodsId": 1024,
                        "price": 280,
                        "surplus": 1,
                        "ticketType": "亲子B套票280元（原价160元*2）",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5708,
                        "goodsId": 1024,
                        "price": 390,
                        "surplus": 1,
                        "ticketType": "亲子A套票390元（原价220元*2）",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5709,
                        "goodsId": 1024,
                        "price": 420,
                        "surplus": 1,
                        "ticketType": "三人B套餐420元（原价160元*3）",
                        "time": "2020-08-15 周六 15:00"
                    },
                    {
                        "detailId": 5710,
                        "goodsId": 1024,
                        "price": 585,
                        "surplus": 1,
                        "ticketType": "三人A套票585元（原价220元*3）",
                        "time": "2020-08-15 周六 15:00"
                    }
                ],
                "goodsId": 1024,
                "goodsType": 2,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN014tDLc62GdSFeR7fm8_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【长沙】大型梦幻儿童亲子剧 冰雪皇后2--爱莎的魔法觅踪",
                "startTime": "2020-08-15",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=622100645448&clicktitle=%E5%A4%A7%E5%9E%8B%E6%A2%A6%E5%B9%BB%E5%84%BF%E7%AB%A5%E4%BA%B2%E5%AD%90%E5%89%A7%20%E5%86%B0%E9%9B%AA%E7%9A%87%E5%90%8E2--%E7%88%B1%E8%8E%8E%E7%9A%84%E9%AD%94%E6%B3%95%E8%A7%85%E8%B8%AA"
            },
            {
                "address": "上海梅赛德斯-奔驰文化中心（音乐俱乐部）",
                "buyCounter": 0,
                "detail": "",
                "endTime": "0000-00-00",
                "goodsDetails": [],
                "goodsId": 2304,
                "goodsType": 2,
                "image": "https://img0.tking.cn/mtl/default/img/XfmTMwYfyy_.jpg",
                "name": "【延期】【上海站】创联儿艺·原创中文版儿童音乐剧《猫》",
                "startTime": "0000-00-00",
                "viewCounter": 0,
                "website": "https://www.moretickets.com/content/5e0f0d78908c381934a08d8f"
            },
            {
                "address": "场馆：北京市 | IOMA爱马思艺术中心",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-09-06",
                "goodsDetails": [
                    {
                        "detailId": 5711,
                        "goodsId": 1025,
                        "price": 78,
                        "surplus": 1,
                        "ticketType": "单人普通票78元",
                        "time": "2020年5月22日至9月6日10:00-18:30（18:00"
                    },
                    {
                        "detailId": 5712,
                        "goodsId": 1025,
                        "price": 1,
                        "surplus": 1,
                        "ticketType": "亲子票（1大1小）128元",
                        "time": "2020年5月22日至9月6日10:00-18:30（18:00"
                    },
                    {
                        "detailId": 5713,
                        "goodsId": 1025,
                        "price": 2,
                        "surplus": 1,
                        "ticketType": "家庭票（2大1小）168元",
                        "time": "2020年5月22日至9月6日10:00-18:30（18:00"
                    }
                ],
                "goodsId": 1025,
                "goodsType": 2,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01sjW5kj2GdSF1E2FCy_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【北京】《小绘本——艺术绘本体验展》",
                "startTime": "2020-05-22",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=611403801746&clicktitle=%E3%80%8A%E5%B0%8F%E7%BB%98%E6%9C%AC%E2%80%94%E2%80%94%E8%89%BA%E6%9C%AF%E7%BB%98%E6%9C%AC%E4%BD%93%E9%AA%8C%E5%B1%95%E3%80%8B"
            }
        ],
        "3": [
            {
                "address": "场馆：深圳市 | 舒心堂·生空间",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-08-07",
                "goodsDetails": [
                    {
                        "detailId": 7181,
                        "goodsId": 1280,
                        "price": 1999,
                        "surplus": 1,
                        "ticketType": "VIP含开幕式票无限通票 1999元",
                        "time": "VIP（含开幕式） 2020年7月10日—2020年8月7日 每"
                    },
                    {
                        "detailId": 7182,
                        "goodsId": 1280,
                        "price": 1699,
                        "surplus": 1,
                        "ticketType": "VIP单人无限通票 1699元",
                        "time": "VIP（不含开幕式） 2020年7月10日—2020年8月7日 "
                    },
                    {
                        "detailId": 7183,
                        "goodsId": 1280,
                        "price": 29,
                        "surplus": 1,
                        "ticketType": "学生票 29元 （需提供学生证入场）",
                        "time": "2020年7月11日—2020年8月7日 每天10:00至18:"
                    },
                    {
                        "detailId": 7184,
                        "goodsId": 1280,
                        "price": 69,
                        "surplus": 1,
                        "ticketType": "早鸟票 69元",
                        "time": "2020年7月11日—2020年8月7日 每天10:00至18:"
                    },
                    {
                        "detailId": 7185,
                        "goodsId": 1280,
                        "price": 99,
                        "surplus": 2,
                        "ticketType": "单次单人票 99元",
                        "time": "2020年7月11日—2020年8月7日 每天10:00至18:"
                    },
                    {
                        "detailId": 7186,
                        "goodsId": 1280,
                        "price": 158,
                        "surplus": 2,
                        "ticketType": "单次双人票 158元",
                        "time": "2020年7月11日—2020年8月7日 每天10:00至18:"
                    },
                    {
                        "detailId": 7187,
                        "goodsId": 1280,
                        "price": 219,
                        "surplus": 2,
                        "ticketType": "单次三人票 219元",
                        "time": "2020年7月11日—2020年8月7日 每天10:00至18:"
                    }
                ],
                "goodsId": 1280,
                "goodsType": 3,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01P6n6Lk2GdSFSxByeO_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【深圳】谷雨艺术节“城市梦想”主题展",
                "startTime": "2020-07-10",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=620717654218&clicktitle=%E8%B0%B7%E9%9B%A8%E8%89%BA%E6%9C%AF%E8%8A%82%E2%80%9C%E5%9F%8E%E5%B8%82%E6%A2%A6%E6%83%B3%E2%80%9D%E4%B8%BB%E9%A2%98%E5%B1%95"
            },
            {
                "address": "场馆：宜春市 | 明月千古情景区",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-07-10",
                "goodsDetails": [
                    {
                        "detailId": 7874,
                        "goodsId": 1536,
                        "price": 0,
                        "surplus": 1,
                        "ticketType": "明月千古情景区成人门票（不含演出）",
                        "time": "2020-07-09（纯门票）"
                    },
                    {
                        "detailId": 7875,
                        "goodsId": 1536,
                        "price": 1,
                        "surplus": 1,
                        "ticketType": "明月千古情景区亲子门票（1大1小不含演出）",
                        "time": "2020-07-09（纯门票）"
                    },
                    {
                        "detailId": 7876,
                        "goodsId": 1536,
                        "price": 0,
                        "surplus": 1,
                        "ticketType": "明月千古情景区成人门票（不含演出）",
                        "time": "2020-07-10（纯门票）"
                    },
                    {
                        "detailId": 7877,
                        "goodsId": 1536,
                        "price": 1,
                        "surplus": 1,
                        "ticketType": "明月千古情景区亲子门票（1大1小不含演出）",
                        "time": "2020-07-10（纯门票）"
                    }
                ],
                "goodsId": 1536,
                "goodsType": 3,
                "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01L2Iv0S2GdSEWHdzdf_!!0-item_pic.jpg_q60.jpg_.webp",
                "name": "【宜春】《明月千古情》",
                "startTime": "2020-07-09",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=608669421102&clicktitle=%E3%80%8A%E6%98%8E%E6%9C%88%E5%8D%83%E5%8F%A4%E6%83%85%E3%80%8B"
            },
            {
                "address": "场馆：北京市 | 北京红砖当代美术馆",
                "buyCounter": 0,
                "detail": "",
                "endTime": "2020-07-19",
                "goodsDetails": [
                    {
                        "detailId": 7188,
                        "goodsId": 1281,
                        "price": 130,
                        "surplus": 1,
                        "ticketType": "优惠票130元",
                        "time": "2020年4月30日-7月19日（需在红砖美术馆公众号提前1日预"
                    },
                    {
                        "detailId": 7189,
                        "goodsId": 1281,
                        "price": 150,
                        "surplus": 1,
                        "ticketType": "成人票150元",
                        "time": "2020年4月30日-7月19日（需在红砖美术馆公众号提前1日预"
                    }
                ],
                "goodsId": 1281,
                "goodsType": 3,
                "image": "//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01fpBM4F2GdSFYZkeeB_!!2251059038.jpg_q60.jpg_.webp",
                "name": "【北京】「开展营业中」英国最重要艺术家之一 莎拉·卢卡斯 中国首展",
                "startTime": "2020-04-30",
                "viewCounter": 0,
                "website": "https://detail.damai.cn/item.htm?id=617303590196&clicktitle=%E3%80%8C%E5%BC%80%E5%B1%95%E8%90%A5%E4%B8%9A%E4%B8%AD%E3%80%8D%E8%8B%B1%E5%9B%BD%E6%9C%80%E9%87%8D%E8%A6%81%E8%89%BA%E6%9C%AF%E5%AE%B6%E4%B9%8B%E4%B8%80%20%E8%8E%8E%E6%8B%89%C2%B7%E5%8D%A2%E5%8D%A1%E6%96%AF%20%E4%B8%AD%E5%9B%BD%E9%A6%96%E5%B1%95"
            }
        ]
    }
}
```



## 订单

### /addOrder

前端：

```json
{
    "userId":"1",
    "detailId":"8897",
    "number":"2"
}
```

后端

```json
{
    "status": 0,
    "msg": "购买成功",
    "data": {
        "goods": {
            "address": "场馆：济南市 | 济南江湖艺社",
            "endTime": "2020-08-17",
            "goodsDetails": [
                {
                    "detailId": 8893,
                    "goodsId": 1789,
                    "price": 60.0,
                    "surplus": 1,
                    "ticketType": "60元",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8894,
                    "goodsId": 1789,
                    "price": 80.0,
                    "surplus": 1,
                    "ticketType": "80元",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8895,
                    "goodsId": 1789,
                    "price": 100.0,
                    "surplus": 1,
                    "ticketType": "100元",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8896,
                    "goodsId": 1789,
                    "price": 198.0,
                    "surplus": 0,
                    "ticketType": "VIP198元",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888.0,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8898,
                    "goodsId": 1789,
                    "price": 400.0,
                    "surplus": 1,
                    "ticketType": "套票400元",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                {
                    "detailId": 8899,
                    "goodsId": 1789,
                    "price": 60.0,
                    "surplus": 1,
                    "ticketType": "60元",
                    "time": "2020-07-11 周六 19:30相声专场"
                },
                {
                    "detailId": 8900,
                    "goodsId": 1789,
                    "price": 80.0,
                    "surplus": 1,
                    "ticketType": "80元",
                    "time": "2020-07-11 周六 19:30相声专场"
                },
                {
                    "detailId": 8901,
                    "goodsId": 1789,
                    "price": 100.0,
                    "surplus": 1,
                    "ticketType": "100元",
                    "time": "2020-07-11 周六 19:30相声专场"
                },
                {
                    "detailId": 8902,
                    "goodsId": 1789,
                    "price": 888.0,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 19:30相声专场"
                },
                {
                    "detailId": 8903,
                    "goodsId": 1789,
                    "price": 400.0,
                    "surplus": 1,
                    "ticketType": "套票400元",
                    "time": "2020-07-11 周六 19:30相声专场"
                }
            ],
            "goodsId": 1789,
            "goodsType": 5,
            "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
            "name": "【济南】济南江湖艺社曲艺演出",
            "startTime": "2020-07-09",
            "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
        },
        "goodsDetail": {
            "detailId": 8897,
            "goodsId": 1789,
            "price": 888.0,
            "surplus": 1,
            "ticketType": "套票888元（8人包厢）",
            "time": "2020-07-11 周六 14:30相声专场"
        },
        "number": 2,
        "orderId": 5,
        "price": 1776.0,
        "sourceId": 54749110,
        "time": {
            "date": 10,
            "day": 5,
            "hours": 17,
            "minutes": 5,
            "month": 6,
            "nanos": 919000000,
            "seconds": 39,
            "time": 1594371939919,
            "timezoneOffset": -480,
            "year": 120
        },
        "userId": 1
    }
}
```

### /getAllOrders

后端

```
{
    "status": 0,
    "msg": "获取成功！",
    "data": {
        "orders": [
            {
                "goods": {
                    "address": "场馆：杭州市 | 大麦66LiveHouse杭州",
                    "endTime": "2020-08-07",
                    "goodsDetails": [
                        {
                            "detailId": 1890,
                            "goodsId": 513,
                            "price": 188,
                            "surplus": 1,
                            "ticketType": "预售票（188.00）",
                            "time": "2020-08-07 星期五 20:00"
                        }
                    ],
                    "goodsId": 513,
                    "goodsType": 0,
                    "image": "//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01RNXESo2GdSFYachKn_!!2-item_pic.png_q60.jpg_.webp",
                    "name": "【杭州】「初夏人生」嘻哈派对",
                    "startTime": "2020-08-07",
                    "website": "https://detail.damai.cn/item.htm?id=621634938771&clicktitle=%E3%80%8C%E5%88%9D%E5%A4%8F%E4%BA%BA%E7%94%9F%E3%80%8D%E5%98%BB%E5%93%88%E6%B4%BE%E5%AF%B9"
                },
                "goodsDetail": {
                    "detailId": 1890,
                    "goodsId": 513,
                    "price": 188,
                    "surplus": 1,
                    "ticketType": "预售票（188.00）",
                    "time": "2020-08-07 星期五 20:00"
                },
                "number": 1,
                "orderId": 1,
                "price": 188,
                "sourceId": 1000100,
                "time": {
                    "date": 9,
                    "day": 4,
                    "hours": 9,
                    "minutes": 53,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 59,
                    "time": 1594259639000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：上海市 | 珍珠剧场The Pearl",
                    "endTime": "2020-07-11",
                    "goodsDetails": [
                        {
                            "detailId": 1891,
                            "goodsId": 514,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元（预售票）",
                            "time": "2020-07-09 周四 21:00"
                        },
                        {
                            "detailId": 1892,
                            "goodsId": 514,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元（预售票）",
                            "time": "2020-07-10 周五 21:00"
                        },
                        {
                            "detailId": 1893,
                            "goodsId": 514,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元（预售票）",
                            "time": "2020-07-11 周六 21:00"
                        }
                    ],
                    "goodsId": 514,
                    "goodsType": 0,
                    "image": "//img.alicdn.com/bao/uploaded/i1/2251059038/O1CN019kybVQ2GdSFbIQCPL_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【上海】皇后乐队致敬音乐会 2020 全新乐章",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=621046144219&clicktitle=%E7%9A%87%E5%90%8E%E4%B9%90%E9%98%9F%E8%87%B4%E6%95%AC%E9%9F%B3%E4%B9%90%E4%BC%9A%202020%20%E5%85%A8%E6%96%B0%E4%B9%90%E7%AB%A0"
                },
                "goodsDetail": {
                    "detailId": 1891,
                    "goodsId": 514,
                    "price": 80,
                    "surplus": 1,
                    "ticketType": "80元（预售票）",
                    "time": "2020-07-09 周四 21:00"
                },
                "number": 2,
                "orderId": 2,
                "price": 80,
                "sourceId": 128139,
                "time": {
                    "date": 9,
                    "day": 4,
                    "hours": 10,
                    "minutes": 0,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 41,
                    "time": 1594260041000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 3,
                "price": 1776,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 16,
                    "minutes": 57,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 31,
                    "time": 1594371451000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 4,
                "price": 1776,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 17,
                    "minutes": 0,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 2,
                    "time": 1594371602000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            },
            {
                "goods": {
                    "address": "场馆：济南市 | 济南江湖艺社",
                    "endTime": "2020-08-17",
                    "goodsDetails": [
                        {
                            "detailId": 8893,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8894,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8895,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8896,
                            "goodsId": 1789,
                            "price": 198,
                            "surplus": 0,
                            "ticketType": "VIP198元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8897,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8898,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 14:30相声专场"
                        },
                        {
                            "detailId": 8899,
                            "goodsId": 1789,
                            "price": 60,
                            "surplus": 1,
                            "ticketType": "60元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8900,
                            "goodsId": 1789,
                            "price": 80,
                            "surplus": 1,
                            "ticketType": "80元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8901,
                            "goodsId": 1789,
                            "price": 100,
                            "surplus": 1,
                            "ticketType": "100元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8902,
                            "goodsId": 1789,
                            "price": 888,
                            "surplus": 1,
                            "ticketType": "套票888元（8人包厢）",
                            "time": "2020-07-11 周六 19:30相声专场"
                        },
                        {
                            "detailId": 8903,
                            "goodsId": 1789,
                            "price": 400,
                            "surplus": 1,
                            "ticketType": "套票400元",
                            "time": "2020-07-11 周六 19:30相声专场"
                        }
                    ],
                    "goodsId": 1789,
                    "goodsType": 5,
                    "image": "//img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01rKprgn2GdSEzIsRO7_!!0-item_pic.jpg_q60.jpg_.webp",
                    "name": "【济南】济南江湖艺社曲艺演出",
                    "startTime": "2020-07-09",
                    "website": "https://detail.damai.cn/item.htm?id=615294466590&clicktitle=%E6%B5%8E%E5%8D%97%E6%B1%9F%E6%B9%96%E8%89%BA%E7%A4%BE%E6%9B%B2%E8%89%BA%E6%BC%94%E5%87%BA"
                },
                "goodsDetail": {
                    "detailId": 8897,
                    "goodsId": 1789,
                    "price": 888,
                    "surplus": 1,
                    "ticketType": "套票888元（8人包厢）",
                    "time": "2020-07-11 周六 14:30相声专场"
                },
                "number": 2,
                "orderId": 5,
                "price": 1776,
                "sourceId": 54749110,
                "time": {
                    "date": 10,
                    "day": 5,
                    "hours": 17,
                    "minutes": 5,
                    "month": 6,
                    "nanos": 0,
                    "seconds": 40,
                    "time": 1594371940000,
                    "timezoneOffset": -480,
                    "year": 120
                },
                "userId": 1
            }
        ]
    }
}
```

