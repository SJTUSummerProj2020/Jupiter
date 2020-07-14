import React from 'react';
import {List} from 'antd';
import {SearchGoods} from "./SearchGoods";
import {Link} from "react-router-dom";

//debugger;

export class SearchList extends React.Component{
    constructor(props) {
        super(props);
        this.state={goodsList:[]}
        // debugger;
        //console.log('SearchList参数',this.props.info)
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
                    pageSize: 16,
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
            // <div>aaaaaa</div>
        );
    }
}
