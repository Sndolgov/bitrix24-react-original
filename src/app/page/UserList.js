import React, {Component} from "react";
import UserRow from "../component/user/UserRow";
import {connect} from 'react-redux'
import {
    addRatingUserRow,
    errorHandler,
    finishInstallation,

} from "../store/actions/userListActions";
import BxButton from "../component/button/BxButton";
import MyError from "../component/error/MyError";
import {deleteEntityById, getEntities} from "../store/actions/entityActions";

class UserList extends Component {

    showUserList() {
        return Object.keys(this.props.userList).map((id, index) => {
            return (
                <UserRow user={this.props.userList[id]} key={index}/>
            )
        })
    }


    render() {
        return (
            this.props.error
                ? <MyError error={this.props.error} errorHandler={this.props.errorHandler}/>
                : <div id="app" className="container-fluid">
                    <div className="bs-callout bs-callout-danger">
                        <i className="fa fa-cloud pull-left fa-3x"/>
                        <h4>Установка приложения "Рейтинг"</h4>
                        <p>Составьте список пользователей, которые будут участвовать в рейтинге</p>
                    </div>
                    <BxButton
                        onClick={this.props.addRatingUserRow}
                        type={'primary'}
                        label={'Add user'}
                    />
                    <ul className="list-group"
                        style={{marginTop: 20, marginBottom: 20, height: '100%', overflow: 'auto'}}>
                        <li className="list-group-item">Users:</li>
                        {this.showUserList()}
                    </ul>
                    {
                        Object.keys(this.props.userList).length !== 0
                            ? <BxButton
                                type={'success'}
                                onClick={() => this.props.finishInstallation(this.props.history)}
                                label={'Save users'}
                            />
                            : null
                    }
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userList: state.userListReducer.userList,
        error: state.userListReducer.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addRatingUserRow: () => dispatch(addRatingUserRow()),
        errorHandler: () => dispatch(errorHandler()),
        getUsers: (entity, sort) => dispatch(getEntities(entity, sort)),
        deleteUserById: (entity, id) => dispatch(deleteEntityById(entity, id)),
        finishInstallation: (history) => dispatch(finishInstallation(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
