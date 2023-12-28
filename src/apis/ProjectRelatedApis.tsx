import { IProjectCreateInterface, IProjectDetailsInterface } from "../interfaces/ProjectRelatedInterfaces";
import { getApiCall, postApiCall, putApiCall } from "./httpApis";


let baseUrl = process.env.REACT_APP_BASE_URL;

const  getAllProjectsApi = (callback : any) => {
    let url = `${baseUrl}project/`;
    getApiCall(url, callback);

}

const getProjectDetailsApi = (projId : (string|undefined), callback : any) => {
    let url = `${baseUrl}project/${projId}`;
    getApiCall(url, callback);
}

const updateProjectDetailsApi = (projId : (string), updatedProjDetails: (IProjectDetailsInterface), callback : any) => 
{
    let url = `${baseUrl}project/${projId}`;
    putApiCall(url, updatedProjDetails, callback)
}

const createNewProjectApi = (newProjectDetails : IProjectCreateInterface, callback : any) => 
{
    let url = `${baseUrl}project`;
    postApiCall(url, newProjectDetails, callback);
}


const addNewTeamMemberApi = (projId : string, payload : any, callback : any) => {
    let url = `${baseUrl}project/${projId}/addTeamMember`
    postApiCall(url, payload, callback);
}

const removeTeamMemberApi = (projId : string, payload : any, callback : any) =>
{
    let url = `${baseUrl}project/${projId}/removeTeamMember`;
    postApiCall(url, payload, callback);
}

export {
    getAllProjectsApi, 
    getProjectDetailsApi,
    updateProjectDetailsApi, 
    createNewProjectApi , 
    addNewTeamMemberApi, 
    removeTeamMemberApi
};