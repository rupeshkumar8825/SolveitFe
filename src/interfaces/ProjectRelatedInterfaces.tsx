export interface IProjectDetailsInterface {
   projId : (string | null), 
   projName : (string | null), 
   projStatus : (string | null), 
   projLead : (string | null), 
   projDescription : (string | null), 
   customer : (string | null) , 
   lastUpdatedOn : (string | null), 
   sqr : (string | null),
   teamMembers : (Array<ITeamMember>)
};

export interface ITeamMember {
    userId : (string | null), 
    email : (string | null), 
    role : (string | null)
};

export interface IProjectCreateInterface {
    projName : (string | null), 
    projDescription : (string | null), 
    customer : (string | null), 
    projLead : (string | null), 
    sqr : (string | null)
} 

// defining the interface for storing employee and corresponding role 
// export interface IEmployeeToRole {
//     userId : string, 
//     email : string,
//     role : string
// };

export interface IProjectToNewTeamMember {
    projId : string, 
    teamMembers : Array<ITeamMember>
};