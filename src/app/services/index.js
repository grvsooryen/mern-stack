import "whatwg-fetch";
import * as API from "./config.js";
export default class APIServices {
    static listContact() {
        return fetch(API.API_ROOT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    static addContact(req) {
        return fetch(API.API_ROOT, {
            method: 'POST',
            body: JSON.stringify(req)
        });
    }
    static deleteContact(id) {
        return fetch(API.API_ROOT + "/" + id, {
            method: 'DELETE'
        });
    }
    static editContact(id) {
        return fetch(API.API_ROOT + "/" + id, {
            method: 'GET'
        });
    }
    static updateContact(id, req) {
        return fetch(API.API_ROOT + "/" + id, {
            method: 'PUT',
            body: JSON.stringify(req)
        });
    }
}