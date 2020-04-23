import React, {Component} from "react";
import {getEntities} from "../store/actions/entityActions";
import {connect} from "react-redux";

class DealList extends Component {

    componentDidMount() {
        let promBX24 = this.props.getEntities('users', {DATE_ACTIVE_FROM: 'ASC'});
        promBX24.then(value => {
            console.log('data: ', value.data());
            console.log('entities: ', this.props.entities)
        });

    }

    render() {
        return (
            <div id="app" className="container-fluid">
                <div className="bs-callout bs-callout-danger">
                    <h4>Формирование цепочки вызовов</h4>
                    <p>вот как надо</p>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title">Участники рейтинга</h3>
                            </div>
                            <div className="panel-body">
                                <div className="list-group"/>
                                <i className="fa fa-spinner fa-spin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Мой результат</h3>
                        </div>
                        <div className="panel-body">
                            <div className="list-group">
                                <i className="fa fa-spinner fa-spin"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        entities: state.entityReducer.entities,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getEntities: (entity, sort) => dispatch(getEntities(entity, sort)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DealList);