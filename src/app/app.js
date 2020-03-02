import React from "react";
// import React, {Component} from "react";
import CurrentUser from "./services/get-current-user.service";
import DealList from "./services/crm-deal-list.service";
import UserList from "./services/handler-user-list-service";


/*class App extends Component {

    render() {
        return (<>
            <CurrentUser/>
        </>)
    }
}

export default App;*/

export default (props) => {
    return (
        <div className="container-fluid">
                <UserList/>
        </div>)
}
