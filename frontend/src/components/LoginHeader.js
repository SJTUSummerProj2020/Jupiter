import React from 'react';
import {Link} from 'react-router-dom';
import '../css/loginheader.css';

export class LoginHeader extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="loginheader">
                <Link to={{pathname:'/'}}>
                    <div className="loginlogo">
                        <img src={[require("../assets/planet.png")]} width={80} height={80} alt="Website logo"/>
                    </div>
                </Link>
            </div>
        );
    }
}
