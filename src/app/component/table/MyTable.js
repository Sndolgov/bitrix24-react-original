import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const renderTableHeader = (headers) => {
    return headers.map((key, index) => {
        if (index === 0)
            return <StyledTableCell>{key.toUpperCase()}</StyledTableCell>
        else return (
            <StyledTableCell align="left">{key.toUpperCase()}</StyledTableCell>
        )
    })
};

const renderCell = (row, index) => {
    const fields = Object.keys(row);
    return fields.map((r, index)=>{
        return (<StyledTableCell component="th" scope="row">
            {row[r]}
        </StyledTableCell>)
    });
};

const  renderTableData = (data) => {
    return data.map((d, index) => {
        return (
            <StyledTableRow key={index}>
                {renderCell(d, index)}
            </StyledTableRow>
        )
    })
};

export default function CustomizedTables(props) {
    const classes = useStyles()
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        { renderTableHeader(props.headers)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableData(props.data)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}