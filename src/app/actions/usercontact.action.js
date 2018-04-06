import APIServices from "../services";

/*Create Type*/
export const ADD_CONTACT="ADD_CONTACT";
export const DELETE_CONTACT="DELETE_CONTACT";
export const UPDATE_CONTACT="UPDATE_CONTACT";
export const GET_CONTACT="GET_CONTACT";

export const saveContact=(userContactResponse)=>{
    return{
        type:ADD_CONTACT,
        userContactResponse
    }
}
export const updateContact=(userContactResponse)=>{
    return{
        type:UPDATE_CONTACT,
        userContactResponse
    }
}
export const deleteContact=(id)=>{
    return{
        type:DELETE_CONTACT,
        val:id
    }
}
export const getContact=(contactList)=>{
	{console.log('contact List : ',contactList)}
    return{
        type:GET_CONTACT,
        val:contactList
    }
}
export const contactError = (error) => {
    return {
        type:ERROR_LOGIN,
        error
    };
}

export function contactAPICall(contactData) {
    
	return function (dispatch, getState) {
		return APIServices.addContact(contactData)
			.then((data) => {
				if (data.isError) {
					dispatch(contactError(data));
				} else {
					dispatch(saveContact(data));
				}
			})
			.catch((error) => {
				throw (error);
			});
	};
}

export function getContactAPICall() {
	console.log('login data->');
	return function (dispatch, getState) {
		return APIServices.listContact()
		.then(response => response.json())
			.then((data) => {
				if (data.isError) {
					console.log('error->', data);
					dispatch(contactError(data));
				} else {
					console.log('login data111->', data);
					dispatch(getContact(data));
				}
			})
			.catch((error) => {
				throw (error);
			});
	};
}