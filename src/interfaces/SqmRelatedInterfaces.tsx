export interface IPossibleAnswers {
    ansId : string,
    currAnswer : string, 
}

export interface ISqmDetails {
    paramId : string, 
    parameter : string, 
    possibleAnswers : Array<IPossibleAnswers>,
    currentAnsId : (string | null), 
    currMarks : number, 
    currRemarks : string, 
    serialNumber : number, 
    userDefinedAns : (string | null)
}

export interface IMetadataDetails {
    metaId : string, 
    sqr : string, 
    sqmFilledBy : string, 
    sqmApprovedBy : string, 
    branch : string, 
    repoLink : string, 
    commitId : string, 
    otherInfo : string
}

export interface ISqmUpdateInterface {
    paramId : string, 
    currAnsId : string, 
    currMarks : number, 
    remarks : string, 
    userDefinedAns : (string | null)
};

export interface ISqmProgressTableInterface {
    updatedBy : string, 
    updatedOn : string, 
    oldScore : number, 
    newScore : number
}

export interface ISqmProgressApiResponse {
    projId : string, 
    logId : string, 
    oldScore : number, 
    newScore : number, 
    updatedOn : string, 
}