import React from 'react';
import { Row, Col,Card,InputNumber,Radio,Button,message} from 'antd';
import"../css/detailcard.css"
import { ExclamationCircleFilled } from '@ant-design/icons';
import {getGoodsByGoodsId} from "../services/goodsService";
import {addOrder, checkSession, getOrdersByUserId} from "../services/userService";
import {Link} from 'react-router-dom';
import {history} from "../utils/history";

const RadioGroup = Radio.Group;

export class DetailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goodsData :"", //用后端返回的data进行初始化
            goodsDetailTime:"aaa",
            ticketsType:"bbb",
            unitPrice:0,
            totalPrice:0,
            ticketsNum:1,
            goodDetailTimeArray:[],
            ticketTypeArray:[],
            surplus:-1,
            user:null,
            loggedIn:false,
            orderId:0,
        };
    }

    componentDidMount() {
        // debugger;
        const callback = (data) => {
            let userInfoStr = sessionStorage.getItem('user');
            if(userInfoStr != null){
                let userInfo = JSON.parse(userInfoStr);
                this.setState({user:userInfo.userId});
            }
            // this.setState({user:data.data.userId});
            this.setState({goodsData:data.data});
            this.setState({goodsDetailTime:data.data.goodsDetails[0].time});
            this.setState({ticketsType:data.data.goodsDetails[0].ticketType});
            this.setState({unitPrice:data.data.goodsDetails[0].price});
            this.setState({totalPrice:data.data.goodsDetails[0].price})
            this.getGoodsDetailTime(data.data);
            this.getTicketType(data.data,data.data.ticketsType);
            this.getUnitPrice(data.data,data.data.ticketsType);
        };
        if(this.props.info === null)
            return;
        const requestData = {goodsId:this.props.info.tmpId};
        getGoodsByGoodsId(requestData,callback);


    }

    onChange1=(e) =>{
        // this.setState({goodsDetailTime:e.target.value});
        this.setState(()=>({goodsDetailTime:e.target.value}));
        this.getTicketType(this.state.goodsData,e.target.value);
        // this.setState({goodsDetailTime:e.target.value});
        this.setState(()=>({goodsDetailTime:e.target.value}));
        // console.log('场次',this.state.goodsDetailTime);
        this.getSurplus();
    }

    onChange2=(e)=> {
        // console.log('票档',e.target.value);
        // this.setState({ticketsType:e.target.value});
        this.setState(()=>({ticketsType:e.target.value}));
        let unitValue=this.getUnitPrice(this.state.goodsData,e.target.value);
        this.getTotalPrice(this.state.goodsData,this.state.ticketsNum,unitValue);
        this.getSurplus();
    }

    onChange3=(value)=> {
        this.setState({ticketsNum:value});
        this.getTotalPrice(this.state.goodsData,value,this.state.unitPrice);
    }

    getGoodsDetailTime=(data)=>{  //实际调用时参数应该为this.state.goodsData
        if(data.goodsDetails == null)
            return null;
        let len = data.goodsDetails.length;
        let i = 0;
        let tmpArray = [];
        for (i = 0; i < len; i++) {
            if(tmpArray.indexOf(data.goodsDetails[i].time) === -1)
                tmpArray.push(data.goodsDetails[i].time)
        }

        // this.setState({goodsDetailTimeArray:tmpArray});
        this.setState(()=>({goodsDetailTimeArray:tmpArray}));
    }

    getTicketType=(data,another)=> {
        if(data.goodsDetails == null)
            return null;
        let tmp;
        if(another===undefined) {
            tmp = this.state.goodsDetailTime;
        }
        else{
            tmp = another
        }
        let len = data.goodsDetails.length;
        let tmpArray = [];
        let i = 0;
        for (i = 0; i < len; i++) {
            if (this.state.goodsData.goodsDetails[i].time === tmp && tmpArray.indexOf(data.goodsDetails[i].ticketType) === -1) {
                tmpArray.push(data.goodsDetails[i].ticketType);
                // console.log("找到票档了");
            }
        }
        // this.setState({ticketTypeArray:tmpArray});
        this.setState(()=>({ticketTypeArray:tmpArray}));
    }

    getUnitPrice=(data,value)=>{  //value是ticketType
        if(data.goodsDetails == null)
            return null;
        let len = data.goodsDetails.length;
        let i = 0;
        for(i=0;i<len;i++) {
            if (data.goodsDetails[i].time === this.state.goodsDetailTime &&
                data.goodsDetails[i].ticketType === value) {
                this.setState({unitPrice: data.goodsDetails[i].price});
                return data.goodsDetails[i].price;
            }
        }
    }

    getTotalPrice=(data,num,unitValue)=> {
        let tmp = 0;
        tmp = num*unitValue;
        this.setState({totalPrice:tmp});
    }
    getSurplus=()=>{
        if(this.state.goodsData.goodsDetails == null){
            return 0;
        }
        let len = this.state.goodsData.goodsDetails.length;
        let i = 0;
        console.log(this.state.goodsDetailTime);
        console.log(this.state.ticketsType);
        for(i=0; i < len;i++){
            if(this.state.goodsData.goodsDetails[i].time === this.state.goodsDetailTime &&
            this.state.goodsData.goodsDetails[i].ticketType === this.state.ticketsType){
                this.setState({surplus:this.state.goodsData.goodsDetails[i].surplus});
                break;
            }
            // console.log('库存',this.state.goodsData.goodsDetails[i].surplus);
            return this.state.goodsData.goodsDetails[i].surplus;
        }
    }
    clickSurplus=()=>{
        this.getSurplus();
        this.setState((state)=>({surplus:state.surplus}))

    }
    displaySurplus=()=>{
        console.log(this.state.surplus)
        if(this.state.surplus === 0){
            return"无货"
        }
        if(this.state.surplus === 1){
            return"有货";
        }
        if(this.state.surplus === 2){
            return"预售";
        }
        return" ";
    }

    allMatch=()=>{ //查看票档和场次是否匹配
        let len = this.state.goodsData.goodsDetails.length;
        let i = 0;
        for(i = 0;i<len;++i){
            if(this.state.goodsDetailTime === this.state.goodsData.goodsDetails[i].time &&
            this.state.ticketsType === this.state.goodsData.goodsDetails[i].ticketType) {
                return true;
            }
        }
        return false;
    }

    getDetailId=()=>{
        let len = this.state.goodsData.goodsDetails.length;
        let Id = 0;
        let i = 0;
        for(i = 0;i<len;++i){
            if(this.state.goodsDetailTime === this.state.goodsData.goodsDetails[i].time &&
                this.state.ticketsType === this.state.goodsData.goodsDetails[i].ticketType) {
                Id = this.state.goodsData.goodsDetails[i].detailId;
            }
        }
        return Id;
    }

    buyNow=()=>{
        // debugger;
        if(this.props.user !== null){
            this.clickSurplus();
            if(this.allMatch()){
                let userId = this.props.user;
                let detailId = this.getDetailId();
                let number = this.state.ticketsNum;
                let json = {
                    userId: userId,
                    detailId:detailId,
                    number:number,
                }
                const callback = (data)=>{
                    if(data.status>=0){
                        this.setState({orderId:data.data.orderId});
                        message.success(data.msg + "请至订单界面查询订单信息 \n 您的订单号是"+data.data.orderId);
                    }
                    else{
                        message.error(data.msg);
                    }
                }
                addOrder(json,callback);
            }
            else{
                message.error("该选项无货");
            }
        }
        else{
            message.error("请登录");
            history.push('/login');
            return;
        }
    }

    getPath=()=>{
        if(this.props.user === null){
            return 'login';
        }
        return 'detailOrder';
    }

    render(){
        if(this.props.info === null)
            return null;
        return(
            <Card hoverable={false}
                  className={"detail-card"}>
                <Row>
                    <Col span={8} className={"poster"}>
                        <img alt = "goodsImage" src = {this.state.goodsData.image} className={"detail-card-img"}/>
                    </Col>
                    <Col span = {16} >
                        <Row className={"detail-card-show-name"}>
                            {this.state.goodsData.name}
                        </Row>
                        <Row className={"detail-card-show-time"}>
                            <Col>时间：</Col>
                            <Col> {this.state.goodsData.startTime} - {this.state.goodsData.endTime}</Col>
                        </Row>
                        <Row className={"detail-card-show-address"}>
                            <Col>
                                地点：
                            </Col>
                            <Col>
                                {this.state.goodsData.address}
                            </Col>
                        </Row>
                        <Row className={"detail-card-tips"}><ExclamationCircleFilled className={"detail-card-icon"}/>
                            场次时间均为演出当地时间
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                场次
                            </Col>
                            <Col className={"detail-card-show-time"}>
                                <RadioGroup options={this.state.goodsDetailTimeArray} onChange={this.onChange1} value={this.state.goodsDetailTime} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                票档
                            </Col>
                            <Col className={"detail-card-show-time"}>
                                {/*<Radio.Group size="large" onChange={onChange2} defaultValue="a">*/}
                                {/*    <Radio.Button value="a">1980元</Radio.Button>*/}
                                {/*    <Radio.Button value="b">880元</Radio.Button>*/}
                                {/*</Radio.Group>*/}
                                <RadioGroup options={this.state.ticketTypeArray} onChange={this.onChange2} value={this.state.ticketsType}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                数量
                            </Col>
                            <Col className={"detail-card-num-choice"}>
                                <InputNumber min={1} max={6} defaultValue={1} onChange={this.onChange3} />
                            </Col>
                            <Col className={"detail-card-tips"}>
                                <ExclamationCircleFilled className={"detail-card-icon"}/>每笔订单最多限购6张。
                                <Button onClick={this.clickSurplus}>点击刷新库存状况  库存：{this.displaySurplus()}</Button>

                            </Col>
                        </Row>
                        <Row>
                            <Col className={"detail-card-stems"}>
                                合计
                            </Col>
                            <Col className={"detail-card-money"}>
                                {this.state.totalPrice}
                            </Col>
                            <Col className={"detail-card-yuan"}>元</Col>
                        </Row>
                        <Row>
                            <Link to={{ pathname: this.getPath() , state : this.state}}>
                            <button className={"detail-card-buy-button"} onClick={this.buyNow}>
                                    立即购买
                                </button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }
}
