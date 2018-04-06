import {connect} from 'react-redux';
import * as actionCreators from '../actions/employee.action';
import NewContact from '../views/demo/newcontact';


//Use this as the return type of mapStateToProps

export const mapStateToProps = state => {
    return {
        authenticate: state.userdata.isAuthenticate
    }
};
export const mapDispatchToProps = dispatch => {
    return {
        onInsertContactDetail:(contactResponse) => dispatch(actionCreators.contactAPICall(contactResponse))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewContact);