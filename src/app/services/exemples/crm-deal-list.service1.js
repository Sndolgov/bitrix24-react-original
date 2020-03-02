import React, {Component} from "react";
import MyError from "../../common/MyError";
import Loading from "../../common/Loading";
import Spinner from "../../common/Spinner";

class DealList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            deals: null
        };
        this.getDealList(1);
    }

    renderTableData() {
        return this.state.deals.map((deal, index) => {
            const {ID, TITLE, OPPORTUNITY} = deal; //destructuring
            return (
                <tr key={index}>
                    <td>{ID}</td>
                    <td>{TITLE}</td>
                    <td>{OPPORTUNITY}</td>
                </tr>

            )
        })
    };

    renderTableHeader() {
        let header = Object.keys(this.state.deals[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
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
                            this.setState({loading: false, deals: data});
                            if (res.more())
                                res.next();

                            /*       for (let i = 0; i < data.length; i++) {
                                       console.log('OPPORTUNITY', parseFloat(data[i].OPPORTUNITY));
                                       console.log('TITLE', data[i].TITLE);
                                       // dealSum += parseFloat(data[i].OPPORTUNITY);
                                       // dealHTML += '<tr><th scope="row">' + data[indexDeal].ID + '</th><td>' + data[indexDeal].TITLE +'</td><td>'
                                       //     + data[indexDeal].OPPORTUNITY + '</td></tr>';
                                   }

                                   if (result.more())
                                       result.next();
                                   else {
                                       $('#deal-list').html(dealHTML);
                                       $('#deal-sum').html('<span class="volume">' + dealSum + '</span><br/>общая сумма');
                                   }*/

                        }
                    }
                });
        });
    }


    render() {
        // this.getDealList(1);
        /*   if (this.state.error) {
               return (
                   <div>
                       <h1>Error</h1>
                   </div>)
           } else return (
               <div id="app" className="container-fluid">
                   <div className="alert alert-success" role="alert" id="user-name"><i
                       className="fa fa-spinner fa-spin"></i></div>
               </div>
           )*/
        if (!this.state.loading) {
            if (this.state.error) {
                return (
                    <MyError error={'Error list deal requesting: ' + this.state.error.ex.error_description}/>
                )
            } else {
                return (
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="card">
                                <table className="table table-responsive">
                                    <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
                /*         <div id="app" className="container-fluid">
                             <div className="bs-callout bs-callout-danger">
                                 <h4>Получение списочных данных</h4>
                                 <p>Текущий пользователь: <span id="user-name"><i className="fa fa-spinner fa-spin"></i></span>
                                 </p>
                             </div>
                             <div className="row">
                                 <div className="col-md-8 col-sm-6">
                                     <div className="panel panel-default">
                                         <table className="table table-responsive">
                                             <thead>
                                             <tr>
                                                 <th>#</th>
                                                 <th>Название</th>
                                                 <th>Сумма</th>
                                             </tr>
                                             </thead>
                                             <tbody id="deal-list">
                                             <tr>
                                                 <td colSpan="3"><i className="fa fa-spinner fa-spin"></i></td>
                                             </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 <div className="col-md-4 col-sm-6">
                                     <div className="panel panel-success">
                                         <div id="deal-sum" className="panel-body text-right">
                                             <i className="fa fa-spinner fa-spin"></i>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>*/
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
