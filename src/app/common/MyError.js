import React, {Component} from "react";

export default (props) => {
    return (
        <>
        <h3 style={{color: 'red'}}>{props.error}</h3>
        </>
    )
}