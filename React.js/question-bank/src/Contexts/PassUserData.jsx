import React, { createContext, useState } from 'react'

export const PassUserData = createContext()


export function DataProvider ({children}) {
      const [getUserName, setUserName] = useState({userName: "Sumanth", userAge: 27})
  return (
    <PassUserData.Provider value={getUserName}>
        {children}
    </PassUserData.Provider>
  )
}

