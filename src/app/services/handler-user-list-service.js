import React, {Component} from "react";
import UserRow from "../common/user/UserRow";


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userList: [
                {id: 1,
                name: 'Sergey'},
                {id: 2,
                name: 'David'}
            ]
        };
    }

    deleteUser(index){
        console.log('DeleteUser');
        const userList = this.state.userList;
        userList.splice(index, 1);
        this.setState(userList)
    }

    showUserList() {
        return this.state.userList.map((key, index) => {
            return (
                <UserRow user={key} index={index} onDelete={()=>this.deleteUser(index)}/>
            )
        })
    }

    addRatingUserRow(arUser) {
        const userList = this.state.userList;
        userList.push({id: this.state.userList.length+1, name: 'newUser'});
        this.setState(userList)
    }

    render() {
        return (
            <div id="app" className="container-fluid">
                <div className="bs-callout bs-callout-danger">
                    <i className="fa fa-cloud pull-left fa-3x"></i>
                    <h4>Установка приложения "Рейтинг"</h4>
                    <p>Составьте список пользователей, которые будут участвовать в рейтинге</p>
                </div>
                <div>
                    <a onClick={() => this.addRatingUserRow(this.state.user)}
                       className="btn btn-primary btn-raised">
                        <i className="fa fa-user"></i> добавить
                        <div className="ripple-wrapper"></div>
                    </a>
                </div >
                <ul className="list-group" style={{marginTop: 20, hight: '100%', overflow: 'auto'}}>
                    <li className="list-group-item">User:</li>
                    {this.showUserList()}
                </ul>
            </div>
        )
    }
}

export default UserList
