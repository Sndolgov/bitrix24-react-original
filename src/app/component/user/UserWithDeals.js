import React from 'react'
import './UserWithDeals.module.css'

const UserWithDeals = (props) =>
    (
        <div className="list-group-item">

            <div className="row">
                <div className='wrap_img'>
                    <img src={props.user.PERSONAL_PHOTO} alt="icon"/>
                </div>
                <div className="row">
                    <div className="action-secondary">
                        <i className="mdi-material-info"/>
                    </div>
                    <span className="list-group-item-light">
                    {props.user.NAME}&nbsp;
                </span>
                    <p className="list-group-item-secondary text-dark">
                        {props.user.SUM} (сделок:
                        {props.user.DEAL_COUNT})
                    </p>
                </div>
            </div>
        </div>
    );

export default UserWithDeals;