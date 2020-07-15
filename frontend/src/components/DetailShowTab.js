import React from 'react';
import { Row, Col,Card,Tabs} from 'antd';
import '../css/detailshowtab.css';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

let detailInfo = null;

export class DetailShowTab extends React.Component{
    constructor(props) {
        super(props);
        detailInfo = this.props.info.detail;
    }
    render() {
        return(
            <Row align = "top" gutter={16}>
                <Col className={"detail-show-tab"}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="项目详情" key="1" >
                            <Card className={"detail-show-cards"} hoverable={false}>
                                <div dangerouslySetInnerHTML = {{ __html: detailInfo} } />
                            </Card>
                        </TabPane>
                        <TabPane tab="购票须知" key="2" >
                            <Card className={"cards"} hoverable={false}>
                                <p className={"detail-show-stem"}>限购规则</p>
                                <p className={"detail-show-content"}>每笔订单最多购买6张</p>
                                <p className={"detail-show-stem"}>入场规则</p>
                                <p className={"detail-show-content"}>须打开【APP-我的票夹】扫码入场，截图无效。</p>
                                <p className={"detail-show-stem"}>儿童购票</p>
                                <p className={"detail-show-content"}>儿童一律凭票入场</p>
                                <p className={"detail-show-stem"}>发票说明</p>
                                <p className={"detail-show-content"}>演出开始前，去【APP-订单详情页】提交发票申请。演出结束后1个月左右邮寄给你，需自付邮费。</p>
                                <p className={"detail-show-stem"}>实名购票规则</p>
                                <p className={"detail-show-content"}>无需实名购票</p>
                                <p className={"detail-show-stem"}>异常排单说明</p>
                                <p className={"detail-show-content"}>对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形： （1）通过同一ID订购超出限购张数的订单。 （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。</p>
                            </Card>
                        </TabPane>
                        <TabPane tab="观演须知" key="3" >
                            <Card className={"cards"} hoverable={false}>
                                <p className={"detail-show-stem"}>演出时长</p>
                                <p className={"detail-show-content"}>以现场为准</p>
                                <p className={"detail-show-stem"}>入场时间</p>
                                <p className={"detail-show-content"}>请于开始前约30分钟入场</p>
                                <p className={"detail-show-stem"}>禁止携带物品</p>
                                <p className={"detail-show-content"}>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合</p>
                                <p className={"detail-show-stem"}>寄存说明</p>
                                <p className={"detail-show-content"}>无寄存处</p>
                            </Card>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            );
    }
}
