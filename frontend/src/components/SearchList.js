import React from 'react';
import {List} from 'antd';
import {SearchGoods} from "./SearchGoods";

//debugger;

export class SearchList extends React.Component{
    constructor(props) {
        super(props);
        this.state={goodsList:this.props.info}
        // debugger;
        //console.log('SearchList参数',this.props.info)
    }

    render(){
        return(
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.goodsList}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}
                renderItem={item => (
                    <List.Item>
                        <SearchGoods info={item} />
                    </List.Item>
                )}
            />
            // <div>aaaaaa</div>
        );
    }
}