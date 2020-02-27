import React, {Component} from "react";
import Loading from "../common/Loading";
// import '../../css/application.css'


class CurrentUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

        this.getCurrentUser().then(currentUser => {
            this.setState({
                user: currentUser,
                loading: false
            });
        });
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            BX24.init(function () {
                BX24.callMethod("user.current", {}, function (res) {
                    resolve(res.answer.result);
                });
            });
        });
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="bs-callout bs-callout-danger">
                    <p>Current user: <span><i className="fa fa-spinner fa-spin">{this.state.user.LAST_NAME} {this.state.user.NAME}</i></span></p>
                </div>
            );
        } else {
            return (
                <Loading text={'Current user'}/>
            )
        }
    }
}

export default CurrentUser


/*export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        BX24.init(function () {
            BX24.callMethod("user.current", {}, function (res) {
                resolve(res.answer.result);
            });
        });
    });
}

export default (props)=> {
    return (
        <>
            <h1>MY COMPONENT</h1>
        </>
    )
}*/


/*export default (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve(res), 2000);
  });
}*/

