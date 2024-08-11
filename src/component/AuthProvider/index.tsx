"use client";

import {createContext, ReactNode, useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

interface IAuthContextType {
    auth: boolean;
    toggleAuth: () => void;
    saveToSessionStorage: () => void;
    saveToLocalStorage: () => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [auth, setAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathName = usePathname();
    
    useEffect(() => {
        const storedAuthSession = sessionStorage.getItem("auth");
        const storedAuthLocal = localStorage.getItem("auth");
        if (storedAuthSession !== null) {
            setAuth(storedAuthSession === "true");
        }
        if (storedAuthLocal !== null) {
            setAuth(storedAuthLocal === "true");
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        if (!isLoading && !auth) {
            router.push("/");
        }
        if (pathName === "/" && auth) {
            router.push("/petition");
        }
    }, [auth, router, isLoading, pathName]);
    
    const saveToSessionStorage = () => {
        sessionStorage.setItem("auth", "true");
    };
    
    const saveToLocalStorage = () => {
        localStorage.setItem("auth", "true");
    };
    
    const toggleAuth = () => {
        setAuth(true);
    };
    
    return (
        <AuthContext.Provider value={{auth, toggleAuth, saveToSessionStorage, saveToLocalStorage}}>
            {children}
        </AuthContext.Provider>
    );
}
