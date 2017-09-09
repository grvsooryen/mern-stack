import {applyMiddleware, combineReducers, createStore} from "redux";
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import ReduxThunk from 'redux-thunk';

const history = createHistory();

const middleware = applyMiddleware(createLogger(), routerMiddleware(history), ReduxThunk);

export default createStore(combineReducers({
    router: routerReducer
}), middleware);