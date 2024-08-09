'use client'

import {createContext, ReactNode, useState} from "react";
interface IAuthContextType {
    auth: boolean;
    toggleAuth: () => void;
    count : number;
}
interface IAuthProviderProps {
    children: ReactNode;
}
export const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [auth, setAuth] = useState(false);
    const [count, setCount] = useState(0);
    
    const toggleAuth = () => {
        setAuth((prevAuth) => !prevAuth);
    };
    
    return (
        <AuthContext.Provider value={{ auth, toggleAuth, count }}>
            {children}
        </AuthContext.Provider>
    );
}
