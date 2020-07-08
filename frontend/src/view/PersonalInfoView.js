import React from 'react';
import {Header} from "../components/Header";
import "../css/header.css";
import {PersonalInfo} from "../components/PersonalInfo";

export class PersonalInfoView extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <PersonalInfo/>
            </div>
        );
    }
}
