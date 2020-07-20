import React from "react";
import {Header} from "../components/Header";
import {DetailOrderCard} from "../components/DetailOrderCard";
import {checkSession} from "../services/userService";
import {logout} from "../services/userService";
import {message} from "antd";

export class DetailOrderView extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.state={loggedIn:false,user:null};
    }
    componentDidMount() {
        const callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                )
            }
        };
        checkSession(callback);
    }

    logout = () => {
        console.log("Logout");
        const callback = (data) => {
            sessionStorage.removeItem("user");
            this.setState(
                {
                    loggedIn:false,
                    user:null
                }
            );
            message.success(data.msg);
        };
        logout(callback);
    }

    render() {
        return(
            <div>
               <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logout={this.logout}
               />
               <DetailOrderCard info={this.props.location.state}/>
            </div>
        );
    }
}
