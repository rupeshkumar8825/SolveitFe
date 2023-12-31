// here we will mention all the common interfaces which will be used across all the components 

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
