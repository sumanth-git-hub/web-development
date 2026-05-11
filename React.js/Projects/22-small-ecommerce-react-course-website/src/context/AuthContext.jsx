import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export default function AuthProvider({children}) {
    // const [user, setUser] = useState(null)
    const [user, setUser] = useState(localStorage.getItem("CurrentUserEmail") ? {email: localStorage.getItem("CurrentUserEmail")} : null)


    function signUp(email, password) {
        // const users = []
        let users = JSON.parse(localStorage.getItem('setUsersData') )  || []

        if(users.find((unique) => unique.email === email)){
            return {success: false, error: "Email Already Exist"}
        }

        const newUser = {email, password}
        users.push(newUser);
        console.log(users)
        localStorage.setItem("setUsersData", JSON.stringify(users))
        localStorage.setItem("CurrentUserEmail", email)

        setUser({email})

        return {success: true}
    }
    function login(email, password) {
       const users = JSON.parse(localStorage.getItem('setUsersData') )  || []

        const user = users.find(
      (u) => u.email === email && u.password === password
    );
        if (!user) {
      return { success: false, error: "Invalid email or password" };
    }    

        localStorage.setItem("CurrentUserEmail", email)
        setUser({email})
        return {success: true}

        
    }
    function logout() {
        localStorage.removeItem("CurrentUserEmail")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signUp, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook created

export function useAuth() {
    const contextFetched = useContext(AuthContext)

    return contextFetched;
}