import React from 'react';
import { Row, Col,Card,Tabs} from 'antd';
import '../css/detailshowtab.css';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export class DetailShowTab extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Row align = "top" gutter={16}>
                <Col className={"detail-show-tab"}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="项目详情" key="1" >
                            <Card className={"detail-show-cards"} hoverable={false}>
                                <div dangerouslySetInnerHTML = {{ __html: "<div class=\"notice-content\" data-v-7712902c=\"\"><div class=\"detail\" data-spm=\"detail-info\" data-v-7712902c=\"\"><div class=\"list\" id=\"detail\"><div class=\"title\">项目介绍</div> <div class=\"words\"><p><p><strong data-spm-anchor-id=\"a2oeg.project.detail-info.i0.2b506474r5FqPA\">【快递】配送公告</strong></p><p>选择快递配送的用户：请您注意，本项目页下相关产品的配送将由活动主办方负责。为寄送产品的需要，大麦网需将您的个人信息（包括：姓名、手机号码、收货地址）披露给活动主办方。如您不同意给予此项授权，请谨慎参与。</p><p><span style=\"font-size: 16px;\"><strong>该商品快递费皆为到付，快递默认顺丰。</strong></span></p><p></p><p>SPO大容量 可折叠 轻便 旅行收纳袋</p><p>定价：68元</p><p>产品信息</p><p>颜色：深蓝、玫红、桔色、紫色</p><p>材质：尼龙</p><p>特点：防水、轻薄、便携、时尚</p><p>尺寸（手工平铺测量，会有1-3厘米的误差）:</p><p>长：37厘米 宽：16厘米高：41厘米</p><p>款式：单肩/手提</p><p><img height=\"871\" src=\"//img.alicdn.com/imgextra/i1/2251059038/O1CN01QDvXHu2GdSF7ImAQe_!!2251059038.png_q60.jpg_.webp\" width=\"661\"/><img height=\"500\" src=\"//img.alicdn.com/imgextra/i2/2251059038/O1CN01MReFvU2GdSF4rlOKp_!!2251059038.jpg_q60.jpg_.webp\" width=\"668\"/></p><p><img height=\"504\" src=\"//img.alicdn.com/imgextra/i1/2251059038/O1CN01lKp1Y42GdSF6J6SJN_!!2251059038.jpg_q60.jpg_.webp\" width=\"672\"/></p><p><img height=\"507\" src=\"//img.alicdn.com/imgextra/i4/2251059038/O1CN01YU3hgq2GdSF4rwX9T_!!2251059038.jpg_q60.jpg_.webp\" width=\"676\"/></p><p><img height=\"893\" src=\"//img.alicdn.com/imgextra/i3/2251059038/O1CN01NprQS42GdSEuY8s0y_!!2251059038.png_q60.jpg_.webp\" width=\"678\"/></p><p><img height=\"509\" src=\"//img.alicdn.com/imgextra/i2/2251059038/O1CN01qrpDTw2GdSF260qVg_!!2251059038.jpg_q60.jpg_.webp\" width=\"679\"/></p><p></p><p></p><p>*图片均为实拍，因光线、屏显等不可避免因素造成的图片色差，线头、杂线、气味等属于正常现象。</p><p>*选择快递配送的用户：请您注意，本项目页下相关产品的配送将由活动主办方负责。为寄送产品的需要，大麦网需将您的个人信息（包括：姓名、手机号码、收货地址）披露给活动主办方。如您不同意给予此项授权，请谨慎参与。</p><p></p></p></div></div> <div class=\"list\" id=\"notice0\"><div class=\"title\">购票须知</div> <div class=\"words\"><div><p class=\"item_title\">限购规则</p> <ul><li>每笔订单最多购买6张</li></ul></div><div><p class=\"item_title\">退票/换票规则</p> <ul><li>票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</li></ul></div><div><p class=\"item_title\">入场规则</p> <ul><li>须携带纸质门票验票入场。</li></ul></div><div><p class=\"item_title\">儿童购票</p> <ul><li>该商品为衍生品，不涉及入场</li></ul></div><div><p class=\"item_title\">发票说明</p> <ul><li>演出开始前，去【APP-订单详情页】提交发票申请。演出结束后1个月左右邮寄给你，需自付邮费。</li></ul></div><div><p class=\"item_title\">实名购票规则</p> <ul><li>无需实名购票</li></ul></div><div><p class=\"item_title\">异常排单说明</p> <ul><li>对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：（1）通过同一ID订购超出限购张数的订单。（2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。</li></ul></div></div></div><div class=\"list\" id=\"notice1\"><div class=\"title\">活动须知</div> <div class=\"words\"><div><p class=\"item_title\">活动时长</p> <ul><li>该商品为衍生品，不涉及演出时长</li></ul></div><div><p class=\"item_title\">入场时间</p> <ul><li>该商品为衍生品，不涉及入场</li></ul></div><div><p class=\"item_title\">禁止携带物品</p> <ul><li>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合。</li></ul></div><div><p class=\"item_title\">寄存说明</p> <ul><li>无寄存处,请自行保管携带物品，谨防贵重物品丢失。</li></ul></div></div></div></div></div>" }} />
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
