import React, {Component} from "react";
import MyError from "../common/MyError";
import Loading from "../common/Loading";
import Spinner from "../common/Spinner";
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
// import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableBody from "@material-ui/core/TableBody";
import MyTable from "../common/MyTable";


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

    renderTableData() {
        return this.state.deals.map((deal, index) => {
            return (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {deal.ID}
                    </TableCell>
                    <TableCell align="left">{deal.TITLE}</TableCell>
                    <TableCell align="left">{deal.OPPORTUNITY}</TableCell>
                </TableRow>
            )
        })
    };

    renderTableHeader() {
        let header = Object.keys(this.state.deals[0]);
        return header.map((key, index) => {
            if (index === 0)
                return <TableCell>{key.toUpperCase()}</TableCell>
            else return (
                <TableCell align="left">{key.toUpperCase()}</TableCell>
            )
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
                            this.setState({loading: false, deals: this.state.deals.concat(data)});
                        }
                    }
                });
        });
    }

    render() {

        if (!this.state.loading) {
            if (this.state.error) {
                return (
                    <MyError error={'Error list deal requesting: ' + this.state.error.ex.error_description}/>
                )
            } else {
                return (
                    <MyTable headers={Object.keys(this.state.deals[0])} data= {this.state.deals}/>
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
