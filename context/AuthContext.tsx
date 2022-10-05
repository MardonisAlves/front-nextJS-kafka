import {  createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import { AuthContextType, Login, User} from "../interfaces/auth.interface";
import { AuthService, UserInfomation } from "../services/AuthService";
import Router from "next/router";

type MyComponentProps = React.PropsWithChildren<{}>;
export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children}:MyComponentProps){

    const [user, setUser] = useState<User | any>(null);
    const isAuthenticated = !!user;

    useEffect( () => {
        const {'nextauth.token': token, email} = parseCookies();
        if(token){
            UserInfomation(email).then(response => {
                setUser(response)
            })
        }
    },[]);

    async function signIn({email, senha}:Login){
        const {access_token, useremail,} = await AuthService({
            email, senha
        });

        setCookie(undefined, 'nextauth.token', access_token,{
            maxAge: 60 * 60 * 1, // 1hour
        });

        setCookie(undefined, 'email', useremail,{
            maxAge: 60 * 60 * 1, // 1hour
        });

        setUser(user);
        Router.push('/home')
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}