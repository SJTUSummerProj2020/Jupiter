import React from 'react';
import {List, Pagination} from 'antd';
import {SearchGoods} from "./SearchGoods";
import {Link} from "react-router-dom";


export class SearchList extends React.Component{
    constructor(props) {
        super(props);
        this.state={goodsList:[]}
    }

    componentDidMount() {
    }

    render(){
        const info = this.props.info;
        console.log(info)
        return(
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={info}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 24,
                    showSizeChanger: false,
                    showTotal: total => {
                        return(
                            <span>总共 {total} 个结果</span>
                        );
                }
                }}
                renderItem={item => (
                    <List.Item>
                        <Link to={{
                            pathname: '/detail',
                            search: '?id=' + item.goodsId}}
                              target="_blank"
                        >
                        <SearchGoods info={item} />
                        </Link>
                    </List.Item>
                )}
            />
        );
    }
}
