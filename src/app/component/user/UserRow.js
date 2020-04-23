import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteUser} from "../../store/actions/userListActions";

class UserRow extends Component {
    render() {
        return (
            <li className="list-group-item"><a className="btn btn-danger btn-raised"
                                               style={{borderRadius: 30, marginRight: 10}}
                                               onClick={() => this.props.deleteUser(this.props.user.id)}>
                <i className="fa fa-times"/>
                <div className="ripple-wrapper"/>
            </a> {this.props.user.name}</li>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(null, mapDispatchToProps)(UserRow);
