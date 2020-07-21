import React from 'react';
import {List} from 'antd';
import {Goods} from "./Goods";

export class GoodsList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <List
                    grid={{gutter: 10, column: 3}}
                    dataSource={this.props.goodsList}
                    renderItem={item => (
                        <List.Item>
                            <Goods info={item} />
                        </List.Item>
                    )}
                />
            </div>
        );
    }

}
