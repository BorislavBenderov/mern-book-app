import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useLocalStorage('profile', {});

    const userLogin = (result) => {
        setLoggedUser(result);
    }

    const userLogout = () => {
        setLoggedUser({});
    }

    return (
        <AuthContext.Provider value={{ loggedUser, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    );
}