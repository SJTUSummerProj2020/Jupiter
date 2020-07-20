import React from "react";
import {List} from 'antd';
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
// import '../css/recommendationlist.css';
const listData = [
    {image:require('../assets/goods/1.jpg'),name:"求婚女王",price:50,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/2.jpg'),name:"上海屋檐下",price:138,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/3.jpg'),name:"音乐剧《梵高》",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/4.png'),name:"夜猫俱乐部",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/5.png'),name:"千禧复古联盟 3.0 杭州站",price:80,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/6.png'),name:"[包邮包裹] 说唱拼盘",price:66,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/7.jpg'),name:"开心麻花爆笑舞台剧《乌龙山伯爵》",price:80,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/8.png'),name:"爆笑脱口秀演出-喜剧联盒国",price:150,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/9.jpg'),name:"太阳马戏《X绮幻之境》",price:360,place:"上海大剧院",time:"2019.02.23-2021.02.22 "},
    {image:require('../assets/goods/10.png'),name:"魔女宅急便",price:100,place:"上海大剧院",time:"2019.02.23-2021.02.22 "}
];
export class RecommendationList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <List
                itemLayout="vertical"
                size="small"
                // pagination={{
                //     onChange: page => {
                //         console.log(page);
                //     },
                //     pageSize: 20,
                // }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item>
                        <div className={"recommendation"}>
                            <img
                                width={100}
                                className={"recommendationImg"}
                                alt="cover"
                                src={item.image}
                            />
                            <div className={"recommendationDescription"}>
                                <div className={"recommendationName"}>
                                    <span>{item.name.length > 5 ? item.name.substr(0,5) + "..." : item.name}</span>
                                </div>
                                <div className={"recommendationPlace"}>
                                    <HomeOutlined/>{item.place}
                                </div>
                                <div className={"recommendationTime"}>
                                    <CalendarOutlined/>{item.time}
                                </div>
                                <div className={"recommendationPrice"}>
                                    ￥{item.price}
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}
