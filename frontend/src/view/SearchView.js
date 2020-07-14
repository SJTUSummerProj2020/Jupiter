import React from "react";
import {Header} from "../components/Header";
import {getGoodsByName} from "../services/goodsService";
import {SearchList} from "../components/SearchList";

// debugger;
export class SearchView extends React.Component{
    constructor(props) {
        super(props);
        // debugger;
        this.state={
            searchName:this.props.location.state.itemCode,
            searchResultList:[],
        }
    }

    componentDidMount() {
        const callback = (data) => {
            // debugger;
            // let tmp = data.data.goods;
            // console.log('tmp',tmp);
            console.log('searchView里的参数',data);
            this.setState({searchResultList:data.data.goods})
        };
        // console.log(this.props.location.state.itemCode);
        const requestData = {name:this.props.location.state.itemCode};
        getGoodsByName(requestData,callback);

        // debugger;
    }

    render(){
        return(
            <div>
                <Header/>
                <SearchList info={this.state.searchResultList}/>
            </div>

        );
    }
}