import { getApiCall, postApiCall } from "./httpApis";


let baseUrl = process.env.REACT_APP_BASE_URL;

const loginApi = (creds : any, callback : any) => {

    let url = `${baseUrl}auth/login`;
    postApiCall(url, creds, callback);

}



const authenticateUserApi = (callback : any) => {
    let url = `${baseUrl}auth/authenticate`;
    getApiCall(url, callback);
}



export {
    loginApi, 
    authenticateUserApi
}