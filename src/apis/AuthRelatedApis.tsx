import { getApiCall, postApiCall } from "./httpApis";


let baseUrl = process.env.REACT_APP_BASE_URL;

const loginApi = (creds : any, callback : any) => {
    // console.log("Making the post request to login to the user\n\n");
    let url = `${baseUrl}auth/login`;

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