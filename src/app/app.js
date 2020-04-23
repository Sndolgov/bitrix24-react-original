import React, {Component} from "react";
import UserList from "./page/UserList";
import {connect} from 'react-redux'
import {Redirect, Route, Switch} from "react-router-dom";
import SalesRating from "./page/SalesRating";
import DealList from "./page/DealList";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route path='/sales' exact component={SalesRating}/>
                <Route path='/' exact component={DealList}/>
                <Redirect to={'/'}/>
            </Switch>)
    }
}

export default connect()(App);

