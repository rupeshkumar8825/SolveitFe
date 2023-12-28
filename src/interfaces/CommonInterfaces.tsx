export interface IAlert {
    activate : boolean, 
    success : boolean, 
    message : string
}

export interface buttonPairProps {
    buttonContent1 : string, 
    buttonContent2 : string, 
    buttonBg1 : string, 
    buttonBg2 : string, 
    width : string, 
    height : string, 
    buttonHandler1() : void, 
    buttonHandler2() : void,  
}


export interface buttonTripleProps {
    buttonContent1 : string, 
    buttonContent2 : string, 
    buttonContent3 : string, 
    buttonBg1 : string, 
    buttonBg2 : string,
    buttonBg3 : string, 
    width : string, 
    height : string, 
    buttonHandler1() : void, 
    buttonHandler2() : void, 
    buttonHandler3() : void

}