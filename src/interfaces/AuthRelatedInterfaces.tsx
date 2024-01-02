// here we will write the auth related interfaces for this purpose 
export interface IAuthState {
    userId : (string | null), 
    email : (string | null), 
    isLoggedIn : boolean
}