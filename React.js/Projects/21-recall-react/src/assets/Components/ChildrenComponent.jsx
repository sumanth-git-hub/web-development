import React, { useContext } from 'react'
import { GrandChildrenComponent } from './GrandChildrenComponent'
import { UserContext } from '../Contexts/UserContext'
import { AuthContext } from '../Contexts/AuthContext'

export const ChildrenComponent = () => {
const {inputUserName} = useContext(AuthContext)
  return (
    <div>
        <h3>Children Component</h3>
        <p>{`Hello ${inputUserName.name}, good afternoon!`}</p>
        <GrandChildrenComponent />
    </div>
  )
}
