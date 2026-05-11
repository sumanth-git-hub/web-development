import React, { useContext } from 'react'
import { ChildrenComponent } from './ChildrenComponent'
import { UserContext } from '../Contexts/UserContext'
import { AuthContext } from '../Contexts/AuthContext'

export const ParentComponent = () => {

    // const userName = useContext(UserContext)
    const {inputUserName} = useContext(AuthContext)

  return (
    <div>
        <h2>Main Parent Component</h2>
        <p>{`Hello ${inputUserName.name}, Good morning!`}</p>
        <ChildrenComponent />
    </div>
  )
}
