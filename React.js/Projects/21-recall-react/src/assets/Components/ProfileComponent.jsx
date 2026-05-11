import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

export const ProfileComponent = () => {

    const {inputUserName} = useContext(AuthContext)

  return (
    <div>
        <p>Hello {inputUserName.name} Welcome</p>
    </div>
  )
}
