export interface IAuthState  {
    userId : (string| null), 
    email : (string | null), 
    isLoggedIn : boolean, 
};


export interface ILoginRequest  {
    email : (string | null), 
    token : (string | null)
};
