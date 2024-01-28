import { getApiCall, postApiCall } from "./httpApis";


let baseUrl = process.env.REACT_APP_BASE_URL;

const loginApi = (creds : any, callback : any) => {

    let url = `${baseUrl}auth/login`;
    console.log("the url that i am hitting is as follows while logging in and sending the google token to the backend for this purpose  \n", url);
    // sending the post request to the server 
    postApiCall(url, creds, callback);

}

const authenticateUserApi = (callback : any) => {
    // console.log("checking whether the user is already logged in or not \n\n");
    let url = `${baseUrl}auth/authorize`;

    // sending the post request for this purpose 
    getApiCall(url, callback);
}

export {
    loginApi, 
    authenticateUserApi
}