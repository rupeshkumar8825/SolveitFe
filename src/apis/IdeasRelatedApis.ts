import { getApiCall, postApiCall, putApiCall } from "./httpApis";

// let baseUrl = "https://localhost:7106/api/";
let baseUrl = process.env.REACT_APP_BASE_URL;

console.log("the base url is as follows \n",baseUrl);

const getAllIdeasApi = (callback : any) => {
    let url = `${baseUrl}ideas/`;
    getApiCall(url, callback);
} 

const createNewIdeasApi = (payload : any , callback : any) => {
    let url = `${baseUrl}ideas/`;
    postApiCall(url, payload, callback);    
}

export {
    getAllIdeasApi, 
    createNewIdeasApi, 
}
// const startupSqmForProjectApi = (projId : string, callback : any) => 
// {
//     let url = `${baseUrl}sqm/startup/${projId}`;
//     postApiCall(url, [], callback);

// }


// const getProjectSqmDetailsApi = (projId : string, callback : any) => 
// {
//     let url = `${baseUrl}sqm/${projId}`;
//     getApiCall(url, callback);
// }


// const getMetadataOfProjectApi = (projId : string, callback : any) => 
// {
//     let url = `${baseUrl}metadata/${projId}`;
//     getApiCall(url, callback);
// }

// const updateMetadataApi = (projId : string, payload : any, callback : any) => 
// {
//     let url = `${baseUrl}metadata/${projId}`;

//     putApiCall(url, payload, callback);
// }


// const updateProjectSqmDetailsApi = (projId : string, payload : any, callback : any) =>
// {
//     let url = `${baseUrl}sqm/${projId}`;
//     putApiCall(url, payload, callback);
// }

// const approveProjectSqmApi = (projId : string, payload : any, callback : any) => 
// {
//     let url = `${baseUrl}sqm/approve/${projId}`;
//     postApiCall(url, payload, callback);
// }

// const getProjectSqmProgressApi = (projId : string, callback : any) => 
// {
//     let url = `${baseUrl}sqmlog/${projId}`;
//     getApiCall(url, callback);
// }

// export {
//     startupSqmForProjectApi, 
//     getProjectSqmDetailsApi, 
//     getMetadataOfProjectApi, 
//     updateMetadataApi, 
//     updateProjectSqmDetailsApi, 
//     approveProjectSqmApi, 
//     getProjectSqmProgressApi

// }