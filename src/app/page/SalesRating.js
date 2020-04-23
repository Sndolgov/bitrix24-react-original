import React, {Component} from "react";
import {getCurrentUser} from "../store/actions/currentUserAcrions";
import {connect} from "react-redux";
import Spinner from "../component/loading/Spinner";
import CurrentUser from "../component/user/CurrentUser";

class SalesRating extends Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="bs-callout bs-callout-danger">
                    <h4>Рейтинг по продажам <span id="rating-date"/></h4>
                    <CurrentUser/>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="panel panel-default">
                            <div className="list-group">
                                <div className="list-group-item">
                                    <div className="row-action-primary"><i className="rating-place-1">?</i></div>
                                    <div className="row-content text-success">
                                        <div className="action-secondary"><i className="mdi-material-info"/></div>
                                        <i className="fa fa-spinner fa-spin"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="panel panel-success">

                            <div className="list-group">
                                <div className="list-group-item">
                                    <div className="row-action-primary"><i className="fa fa-usd"/></div>
                                    <div className="row-content text-success">
                                        <div className="action-secondary"><i className="mdi-material-info"/></div>
                                        <span id="deal-sum">
								<i className="fa fa-spinner fa-spin"/>
							</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUserReducer.currentUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentUser: () => dispatch(getCurrentUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesRating);