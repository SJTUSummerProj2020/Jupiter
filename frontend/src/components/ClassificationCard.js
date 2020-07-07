import React from "react";
import '../css/classificationcard.css';
import{Card} from "antd";
import {GoodsList} from "./GoodsList";
const {Meta} = Card;

export class ClassificationCard extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            // <div className={"classification-card"}>
            //     <h1 className="classification-card-title" >话剧歌剧</h1>
            //     <div className={"classification-content"}>
            //         <div className={"most-popular"}>
            //             <img alt="image" src={require("../assets/goods/1.jpg")} className={"mostPopularImg"}/>
            //         </div>
            //     </div>
            //
            // </div>
            <Card title={<span style={{float:"left"}}>话剧歌剧</span>} bordered={false} extra={<span>查看更多</span>} style={{ width: 1050 }}>
               <div className={"classification-content"}>
                   <div className={"most-popular"}>
                       {/*<img alt="image" src={require("../assets/goods/1.jpg")} className={"mostPopularImg"}/>*/}
                       {/*<Card*/}
                       {/*    cover={<img alt="image" src={require("../assets/goods/1.jpg")} className={"mostPopularImg"}/>}*/}
                       {/*     hoverable={true}*/}
                       {/*    style={{width: 260, height: 400}}*/}
                       {/*>*/}
                       {/*    <Meta title={<p>求婚女王</p>} description={'¥50'}/>*/}
                       {/*</Card>*/}
                       <Card
                           hoverable
                           style={{ width: 290, height: 560 }}
                           cover={<img alt="image" src={require("../assets/goods/1.jpg")} className={"mostPopularImg"}/>}
                       >
                           <Meta title="求婚女王" description="￥50" />
                       </Card>
                   </div>
                   <div className={"popular-cards"}>
                       <GoodsList/>
                   </div>
               </div>
            </Card>
        );
    }
}
