export interface Login{
    email:string;
    senha:string;
}

export interface User{
    email:string;
    name:string;
}
export interface AuthContextType  {
    isAuthenticated:boolean;
    user:User;
    signIn:(data: Login) => Promise<void>
    
}

export interface UserInformation{
    id:string;
}


