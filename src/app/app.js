import React from "react";
// import React, {Component} from "react";
import CurrentUser from "./services/get-current-user.service";
import DealList from "./services/crm-deal-list.service";
import Spinner from "./common/Spiner";




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
        <div id="app" className="container-fluid">
            <h4>Receipt of payroll data</h4>
            <button type="button" className="btn btn-default btn-lg"><i className="fa fa-spinner fa-spin"></i></button>
            <div className="spinner-border" role="status">
                <span className="sr-only">Загрузка...</span>
            </div>
            <Spinner/>
            <CurrentUser/>
            <hr/>
            <DealList/>
        </div>)
}
