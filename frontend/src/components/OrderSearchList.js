import React from 'react';
import {DatePicker,Input, List,Row,Col} from 'antd';
import "../css/ordersearchlist.css"

const {Search} = Input;

const { RangePicker } = DatePicker;

let flag = false;

// debugger;
export class OrderSearchList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            orders:null,
            searchOrders:null,
            showOrders:null,
            searchValue:''
        }
        // debugger;
    }

    componentDidMount() {
        this.setState({
            orders:this.props.orders,
            showOrders:this.props.orders,
            searchOrders:this.props.orders,
            searchValue:''
        })
        // console.log('lol',this.props);
    }

    searchChange = ({target: {value}}) => {
        if(value===""){
            this.setState(
                {
                    showOrders: this.state.orders,
                    searchValue:''
                }
            );
            return;
        }
        this.setState({searchValue: value})
        let arr = [];
        let list = this.state.orders;
        let search = value.toLowerCase();

        for (let i = 0; i < list.length; i++) {
            if (
                list[i].orderId.toString() === search.toString()
            ) {
                arr.push(list[i]);
            }
            if(list[i].goods.name.toLowerCase().indexOf(search)>=0){
                arr.push(list[i]);
            }
        }
        this.setState(
            {
                showOrders: arr,
                searchOrders:arr
            }
        );
        flag = true;
    }

    timeChange = (value, dateString) => {
        if(dateString[0]===''||dateString[1]==='')
        {
            this.setState(
                {showOrders: this.state.orders}
            );
            return;
        }
        console.log('Formatted Selected Time: ', dateString);
        const startTime= new Date(Date.parse(dateString[0]));
        const endTime=new Date(Date.parse(dateString[1]));
        let arr = [];
        let list;
        if(flag === true){
            list = this.state.showOrders;
        }
        else{
            list = this.state.searchOrders;
        }

        for (let i = 0; i < list.length; i++) {
            let time = new Date(Date.parse(list[i].time));
            if (
                time >startTime && time<endTime
            ) {
                arr.push(list[i]);
            }
        }
        this.setState(
            {showOrders: arr}
        );
        flag = false;
    }

    render() {
        if(this.state.orders === null){
            return null;
        }
        console.log('render',this.state.orders);
        return(
          <div>
              <br/>
              <br/>
              <Search value={this.state.searchValue} placeholder="search for orders" onChange={this.searchChange}
                      enterButton/>
              <br/>
              <br/>
              <RangePicker onChange ={this.timeChange}/>

              <Row>
                  <Col className={"order-search-orderId"}>
                      OrderId
                  </Col>
                  <Col className={"order-search-name"}>
                      name
                  </Col>
                  <Col className={"order-search-goodsId"}>
                      goodsId
                  </Col>
                  <Col className={"order-search-userId"}>
                      userId
                  </Col>
                  <Col className={"order-search-price"}>
                      price
                  </Col>
                  <Col className={"order-search-time"}>
                      time
                  </Col>
              </Row>
              <List
                  // dataSource={this.state.showOrders}
                  dataSource={this.state.showOrders}
                  renderItem={item => (
                      <List.Item>
                          {/*<List.Item.Meta*/}
                          {/*    title={'order:' + item.orderId}*/}
                          {/*    description={'time:' + item.time}*/}
                          {/*/>*/}
                          {/*<OrderTimeDetail info={item.items}/>*/}
                          <Row>
                              <Col className={"order-search-orderId"}>
                                  {item.orderId}
                              </Col>
                              <Col className={"order-search-name"}>
                                  {item.goods.name}
                              </Col>
                              <Col className={"order-search-goodsId"}>
                                  {item.goods.goodsId}
                              </Col>
                              <Col className={"order-search-userId"}>
                                  {item.userId}
                              </Col>
                              <Col className={"order-search-price"}>
                                  {item.price}
                              </Col>
                              <Col className={"order-search-time"}>
                                  {item.time}
                              </Col>
                          </Row>
                      </List.Item>
                  )}
              />
          </div>
        );
    }
}