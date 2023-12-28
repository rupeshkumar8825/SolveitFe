export interface IUserDetails {
    id : string, 
    userName : string, 
    email : string,
    division : string 
}

export  interface IUserFullDetails {
    userId : string, 
    userName : string, 
    email : string, 
    division : string, 
    listOfProjects : Array<IProjectsWorkingOn>

};

export interface IProjectsWorkingOn {
    projId : string, 
    projName : string, 
    role : string
};