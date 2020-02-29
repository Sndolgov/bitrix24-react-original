import React from "react";
// import React, {Component} from "react";
import CurrentUser from "./services/get-current-user.service";
import DealList from "./services/crm-deal-list.service2";


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
            <div className="bs-callout bs-callout-danger">
                <h4>Receipt of payroll data</h4>
                <CurrentUser/>
                <hr/>
                <DealList/>
            </div>
        </div>)
}
