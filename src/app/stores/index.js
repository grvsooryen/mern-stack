import {applyMiddleware, combineReducers, createStore} from "redux";
import {routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/root.reducers';

const history = createHistory();

const middleware = applyMiddleware(createLogger(), routerMiddleware(history), ReduxThunk);

export function configureStore(){
    try{
        return createStore(rootReducer,{},middleware);
    }
    catch(ex){
        throw ex;
    }
}