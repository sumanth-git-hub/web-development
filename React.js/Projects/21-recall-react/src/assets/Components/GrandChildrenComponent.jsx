import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import { AuthContext } from '../Contexts/AuthContext'

export const GrandChildrenComponent = () => {

   const {inputUserName} = useContext(AuthContext)

  return (
    <div>
        <h3>Grand Children Component</h3>
        <p>{`FInally user called ${inputUserName.name} reached grand child component`}</p>
    </div>
  )
}
