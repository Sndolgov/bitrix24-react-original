import React from "react";

export default (props) => {
    return (
        <li className="list-group-item" key={props.index}><a  className="btn btn-danger btn-raised"
                                                              style={{borderRadius: 30,  marginRight: 10}} onClick={props.onDelete}>
            <i className="fa fa-times"></i>
            <div className="ripple-wrapper"></div>
        </a> {props.user.name}</li>
    )
}
