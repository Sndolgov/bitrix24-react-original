import React, {Component} from "react";
import MyError from "../common/MyError";
import Loading from "../common/Loading";
import Spinner from "../common/Spinner";

import MyMaterialTable from "../common/MyMaterialTable";


class DealList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            deals: [],
        };
        this.getDealList(1);
    }


    getDealList(idUser) {
        return new Promise((resolve, reject) => {
            BX24.callMethod("crm.deal.list",
                {
                    order: {"DATE_CREATE": "ASC"},
                    // filter: {"ASSIGNED_BY_ID": idUser, "CLOSED": 'Y'},
                    filter: {"ASSIGNED_BY_ID": idUser},
                    select: ["ID", "TITLE", "OPPORTUNITY"]
                }, (res) => {
                    {
                        if (res.error()) {
                            this.setState({loading: false, error: res.error()});
                            // curapp.displayErrorMessage('К сожалению, произошла ошибка получения сделок. Попробуйте повторить отчет позже');
                            // console.error(result.error());
                            console.log(this.state.error.ex.error_description)
                        } else {
                            var data = res.data();
                            console.log(data);
                            this.setState({loading: false, deals: this.state.deals.concat(data)});
                        }
                    }
                });
        });
    }

    getAmount(){
        let amount = 0;
        this.state.deals.map((key, index)=>{
            amount+=parseInt(key['OPPORTUNITY']);
        })
        return amount;
    }

    render() {

        if (!this.state.loading) {
            if (this.state.error) {
                return (
                    <MyError error={'Error list deal requesting: ' + this.state.error.ex.error_description}/>
                )
            } else {
                return (
                    <div style={{display:"flex"}}>
                        <MyMaterialTable headers={Object.keys(this.state.deals[0])} data={this.state.deals}/>
                        <div className="amount">
                            <div>{this.getAmount()}</div>
                            <div stile={{fontSize: 12}}>amount</div>
                        </div>
                    </div>
                )
            }
        } else return (
            <>
                <Loading text={'Deal list'}/>
                <Spinner/>
            </>
        )
    }
}

export default DealList
