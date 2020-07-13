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
                </Switch>
            </Router>
        );
    }
}

export default BasicRoute;
