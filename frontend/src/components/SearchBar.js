import React from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import 'antd/dist/antd.min.css';
import {history} from "../utils/history";
const {Search} = Input;


let showName = null;
export class SearchBar extends React.Component{

    searchChange = (value) => {
        showName = value;
        history.push({
            "pathname":'/search',
            state: { itemCode: showName }
        });
    };

    render() {
        return(
            <Search
                placeholder={"搜索你感兴趣的演出"}
                onSearch={this.searchChange}
            />
        );
    }
}
