import {useContext} from "react";
import {AuthContext} from "@/component/AuthProvider";

export function useAuth() {
    /* if (context === undefined) {
         throw new Error('useAuth must be used within an AuthProvider');
     }*/
    return useContext(AuthContext);
}
