import React from 'react'

const UserWithDeals = (props) =>
    (
        <div className="list-group-item">
            <div className="row-picture">
                <img className="circle" style={{width: '100px'}} src={props.user.PERSONAL_PHOTO} alt="icon"/>
            </div>
            <div className="row-content">
                <div className="action-secondary">
                    <i className="mdi-material-info"/>
                </div>
                <span className="list-group-item-heading"> 
                    {props.user.FIRST_NAME}
                    {props.user.LAST_NAME} 
                </span>
                <p className="list-group-item-text text-success">
                    {props.user.SUM} (сделок:
                    {props.user.DEAL_COUNT})
                </p>
            </div>
        </div>
    );

export default UserWithDeals;