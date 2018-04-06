import * as actionTypes from '../actions/usercontact.action';

const initialState={
    userContactDetail:{
    id:'',
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    },
    result:[]
}

const ContactReducers=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_CONTACT:
        let results = state.result.slice();
        results.push(action.userContactResponse);
        return{
            ...state,
            result:state.result.concat(action.userContactResponse)
        }
        case actionTypes.updateContact:
        return{
            ...state.result,
            ...action.userContactResponse
        }
        case actionTypes.GET_CONTACT:
            return{
                ...state.result,
                result:action.val
            }
        case actionTypes.DELETE_CONTACT:
            break;
        
        default:
           return state;
    }
};

export default ContactReducers;