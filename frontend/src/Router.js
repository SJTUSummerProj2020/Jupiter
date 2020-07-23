import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {history} from "./utils/history";
import {CustomerHome} from "./view/CustomerHome";
import {DetailListView} from "./view/DetailListView";
import {PersonalInfoView} from "./view/PersonalInfoView";
import {OrderListView} from "./view/OrderListView";
import {DetailView} from "./view/DetailView";
import {LoginView} from "./view/LoginView";
import {DetailOrderView} from "./view/DetailOrderView";
import{SearchView} from "./view/SearchView";
import {UserListView} from "./view/UserListView";
import {AdminOrderListView} from "./view/AdminOrderListView";
import {RegisterView} from "./view/RegisterView";
import {AuctionView} from "./view/AuctionView";
import {AuctionListView} from "./view/AuctionListView";
import {AdminGoodsView} from "./view/AdminGoodsView";
import {OrderSearchView} from "./view/OrderSearchView";

class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={CustomerHome}/>
                    <Route exact path="/login" component={LoginView}/>
                    <Route exact path="/detail" component={DetailView}/>
                    <Route exact path="/goodsList" component={DetailListView}/>
                    <Route exact path="/personalInfo" component={PersonalInfoView}/>
                    <Route exact path="/orderList" component={OrderListView}/>
                    <Route exact path="/detailOrder" component={DetailOrderView}/>
                    <Route exact path="/search" component={SearchView}/>
                    <Route exact path="/userList" component={UserListView}/>
                    <Route exact path="/adminOrderList" component={AdminOrderListView}/>
                    <Route exact path="/register" component={RegisterView}/>
                    <Route exact path="/auction" component={AuctionView}/>
                    <Route exact path="/auctionlist" component={AuctionListView}/>
                    <Route exact path="/adminGoods" component={AdminGoodsView}/>
                    <Route exact path="/orderSearch" component={OrderSearchView}/>
                </Switch>
            </Router>
        );
    }
}

export default BasicRoute;
