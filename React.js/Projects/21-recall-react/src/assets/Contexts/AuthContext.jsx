import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export function AuthWrapper({children}) {
    const [inputUserName, setInputUserName] = useState({name: "", isAuth: false})

    function loginFunction(fetchName) {
        setInputUserName({name: fetchName, isAuth: true})
    }
    function logoutFunction() {
        setInputUserName({name: "", isAuth: false})
    }
    return (
        <AuthContext.Provider value={{inputUserName, loginFunction, logoutFunction}}>
            {children}
        </AuthContext.Provider>
    )
}