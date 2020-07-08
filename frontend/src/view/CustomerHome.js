import React from 'react';
import {withRouter} from "react-router-dom";
import {ImageCarousel} from "../components/Carousel";
import {Header} from "../components/Header";
import {GoodsList} from "../components/GoodsList";
import "../css/header.css";
import {ClassificationCard} from "../components/ClassificationCard";
export class CustomerHome extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <ImageCarousel/>
                <div className={"goodsList"} style={{width: 1060,marginLeft: 88}}>
                    {/*<GoodsList/>*/}
                    <ClassificationCard/>
                </div>
            </div>
        );
    }
}

// export default withRouter(CustomerHome);
