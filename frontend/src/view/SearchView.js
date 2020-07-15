import React from "react";
import {Header} from "../components/Header";
import {getGoodsByName} from "../services/goodsService";
import {Col, Row, BackTop} from 'antd';
import {SearchList} from "../components/SearchList";
import '../css/searchlist.css';

export class SearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            searchResultList:[],
        }
    }

    componentDidMount() {
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
                <Header/>
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
