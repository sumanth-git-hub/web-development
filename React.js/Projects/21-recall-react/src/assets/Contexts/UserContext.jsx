import { createContext, useState } from "react";

export const UserContext = createContext()

export function WrapperComponent({children}) {
    const [userName] = useState("Sumanth")

    return (
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    )
}