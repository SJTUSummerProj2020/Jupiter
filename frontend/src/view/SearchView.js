import React from "react";
import {Header} from "../components/Header";
import {getGoodsByName} from "../services/goodsService";
import {Col, Row, BackTop} from 'antd';
import {SearchList} from "../components/SearchList";
import '../css/searchlist.css';
import {checkSession} from "../services/userService";

export class SearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            searchResultList:[],
            loggedIn:false,
            user:null
        }
    }

    componentDidMount() {
        const checkSession_callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                )
            }
        };
        checkSession(checkSession_callback);
        const callback = (data) => {
            console.log('searchView里的参数',data);
            this.setState({searchResultList:data.data.goods})
        };
        console.log(this.props.location.search.substring(6));
        console.log(decodeURI(this.props.location.search.substring(6)));
        const requestData = {name:decodeURI(this.props.location.search.substring(6))};
        getGoodsByName(requestData,callback);
    }

    componentWillReceiveProps(nextProps,nextContext){
        const requestData = {name:decodeURI(nextProps.location.search.substring(6))};
        const callback = (data) => {
            console.log('searchView里的参数',data);
            this.setState({searchResultList:data.data.goods})
        };
        getGoodsByName(requestData,callback);
    }


    render(){
        return(
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                />
                <Row>
                    <Col span={20} push={1} className={"searchList"}>
                        <SearchList info={this.state.searchResultList} />
                    </Col>
                    <BackTop/>
                </Row>
            </div>

        );
    }
}
