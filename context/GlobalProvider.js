import { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({children}) => {

    const [isLoggedIn, setisLoggedIn] = useState(false);

    const [user, setuser] = useState(null);

    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res) => {
            if (res) {
                setisLoggedIn(true);
                setuser(res);
            } else {
                setisLoggedIn(false);
                setuser(null);
            }
        })
        .catch((error) => {
            console.log('global get current user error :',error);
        })
        .finally(() => {
            setisLoading(false);
        })

    }, [])
    
    
    return (
        <GlobalContext.Provider value={{
            isLoading,
            isLoggedIn,
            user,
            setisLoggedIn,
            setuser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;