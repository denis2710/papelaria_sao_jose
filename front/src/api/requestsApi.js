import {HTTP} from '../common/http-common';
import store from "./../store";

const token = store.state.accessToken
console.log({token})
const config = {
    headers: { Authorization: " Bearer " + token }
}


export function getAllProducts () {
    HTTP
    .get("products", null, null, config)
    .then(response => {
        return response.data
    })
}