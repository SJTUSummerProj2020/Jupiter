import React from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import 'antd/dist/antd.min.css';
const {Search} = Input;
export class SearchBar extends React.Component{
    render() {
        return(
            <Search
                placeholder={"搜索你感兴趣的演出"}
                onSearch={value => console.log(value)}
            />
        );
    }
}
