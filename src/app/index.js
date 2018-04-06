import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import {configureStore} from "./stores/index";
import App from './App';
// import NewContact from './testdemo';
// import ForgotPassword from './ForgotPassword';
ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
