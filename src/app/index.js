import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./stores/store";
import App from './App.js';

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
