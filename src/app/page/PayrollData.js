import React, {Component} from "react";
import Spinner from "../component/loading/Spinner";
import {connect} from "react-redux";
import {getCurrentUser} from "../store/actions/currentUserAcrions";
import CurrentUser from "../component/user/CurrentUser";


export default () => {
    return (
        <div className="bs-callout bs-callout-danger">
            <h4>Receipt of payroll data</h4>
            <div>Current user: <CurrentUser/></div>
        </div>
    );
}



