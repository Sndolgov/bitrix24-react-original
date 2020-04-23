import React, {Component} from "react";
import {connect} from "react-redux";
import Spinner from "../loading/Spinner";
import {getCurrentUser} from "../../store/actions/currentUserAcrions";


class CurrentUser extends Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            this.props.currentUser
                ? <span><i>{this.props.currentUser.LAST_NAME} {this.props.currentUser.NAME}</i></span>
                : <Spinner/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);

