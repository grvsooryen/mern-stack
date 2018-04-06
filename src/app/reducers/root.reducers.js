import {combineReducers} from 'redux';
import ContactReducers from './contact.reducers';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    contactDetail:ContactReducers,
    router: routerReducer
});