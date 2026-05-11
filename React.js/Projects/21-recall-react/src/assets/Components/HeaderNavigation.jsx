import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export const HeaderNavigation = () => {
  const {inputUserName, loginFunction, logoutFunction} = useContext(AuthContext)
  console.log(inputUserName.name)
  return (
    <header>
        <nav className='navigation-component'>
            <NavLink className={({isActive}) => isActive ? "yesActive": "notActive"} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "yesActive": "notActive"} to="/form">Form</NavLink>
            <NavLink className={({isActive}) => isActive ? "yesActive": "notActive"} to="/profile">Profile</NavLink>
            {!inputUserName.isAuth ? <NavLink className={({isActive}) => isActive ? "yesActive": "notActive"} to="/login">Login</NavLink> : <button onClick={() => {
              logoutFunction()
            }}>Logout</button> }
        </nav>
    </header>
  )
}
