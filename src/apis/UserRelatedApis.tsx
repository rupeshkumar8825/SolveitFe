import { getApiCall } from "./httpApis";

// let baseUrl = "https://localhost:7106/api/";
let baseUrl = process.env.REACT_APP_BASE_URL;


const getUsersListApi = (callback : any ) => {
    let url = `${baseUrl}user/`;

    getApiCall(url, callback);
};

const getUserDetailsById = (paramId : string, callback : any) => {
    let url = `${baseUrl}user/${paramId}`;

    getApiCall(url, callback);
}

// say everything went fine 
export {
    getUsersListApi, 
    getUserDetailsById
}