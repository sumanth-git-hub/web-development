import React, { useContext, useState } from 'react'
import { json, Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

export default function HeaderComponent() {

  // const [isDarkMode, setIsDarkMode] = theme

  const [isDarkMode, setIsDarkMode] = useTheme()

  // console.log(JSON.parse(localStorage.getItem("DarkMode")))

  return (
    <header className={`header-container ${isDarkMode && "dark-mode"}`}>
        <div className="header-content">
            <h1 className="title"><Link to="/">Where in the world?</Link></h1>
            <p className={`theme-changer`} onClick={(e) => {
              setIsDarkMode(!isDarkMode)
              // console.log(!isDarkMode)
              localStorage.setItem("DarkMode", !isDarkMode)
            }}><i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i><span>{`${isDarkMode ? " Light Mode" : " Dark Mode"}`}</span></p>
        </div>
    </header>
  )
}
