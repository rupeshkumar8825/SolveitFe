import { getApiCall, postApiCall, postApiCallForFileUpload, putApiCall } from "./httpApis";

// let baseUrl = "https://localhost:7106/api/";
let baseUrl = process.env.REACT_APP_BASE_URL;

console.log("the base url is as follows \n",baseUrl);

const getAllIdeasApi = (callback : any) => {
    let url = `${baseUrl}ideas/`;
    getApiCall(url, callback);
} 

const createNewIdeasApi = (payload : any , callback : any) => {
    let url = `${baseUrl}ideas/`;
    postApiCallForFileUpload(url, payload, callback);    
}

const getIdeaDetailsByIdApi = (ideaId : string, callback : any) => {
    let url = `${baseUrl}ideas/${ideaId}`;
    getApiCall(url, callback);
}

const getIdeaThumbnailApi = (callback : any) => {
    let url = `${baseUrl}ideas/image/thumbnail`;
    getApiCall(url, callback);
}

export {
    getAllIdeasApi, 
    createNewIdeasApi, 
    getIdeaDetailsByIdApi, 
    getIdeaThumbnailApi
}