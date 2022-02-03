import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
};