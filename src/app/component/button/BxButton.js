import React from 'react';

export default (props) => {
    return (
        <>
            <a onClick={() => props.onClick()}
               className={`btn btn-${props.type} btn-raised`}>
                <i className="fa fa-user"/> {props.label}
                <div className="ripple-wrapper"/>
            </a>
        </ >
    )
}