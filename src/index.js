import App from './app/app';
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/application.module.css';
import "./css/styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
