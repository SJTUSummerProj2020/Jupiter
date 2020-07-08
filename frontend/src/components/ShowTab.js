import React from 'react';
import { Row, Col,Card,Tabs} from 'antd';
import '../css/showtab.css';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export class ShowTab extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Row>
                <Col className={"tab"}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="项目详情" key="1" >
                            <Card className={"cards"} hoverable={true}>
                                <p>在他的歌声中，你会找到Leonard Cohen和Tom Waits的踪影；</p>
                                <p>他有多部代表作品，曾出现在诸多热门美剧和电影中；</p>
                                <p>Sia、Matt Costa、Ingrid Michaelson等知名音乐人与他合作歌曲并一起同台巡演；</p>
                                <p>他还与Mandy Moore和Ingrid Michaelson上演过一段浪漫爱情故事。</p>
                            </Card>
                        </TabPane>
                        <TabPane tab="购票须知" key="2" >
                            <Card className={"cards"} hoverable={true}>
                                <h4>限购规则</h4>
                                <p>每笔订单最多购买6张</p>
                                <h4>退票/换票规则</h4>
                                <p>品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</p>
                                <h4>配送信息说明</h4>
                                <p>不支持修改配送电话、地址等信息</p>
                            </Card>
                        </TabPane>
                        <TabPane tab="观演须知" key="3" >
                            <Card className={"cards"} hoverable={true}>
                                <h4>演出时长</h4>
                                <p>约90分钟（以现场为准）</p>
                                <h4>入场时间</h4>
                                <p>
                                    请于开始前约30分钟入场
                                    禁止携带物品
                                    由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品
                                </p>
                            </Card>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            );
    }
}