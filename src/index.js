import App from './app/app';
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/application.module.css';
import "./css/styles.css";
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./app/store/reducers/rootReducer";
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(
        //for async
        reduxThunk
    ));

const store = createStore(rootReducer, enhancer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
