import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header-container">
        <div className="header-content">
            <h1 className="title"><Link to="/">Where in the world?</Link></h1>
            <p className="theme-changer"><i className="fa-regular fa-moon"></i><span>&nbsp;&nbsp;Dark Mode</span></p>
        </div>
    </header>
  )
}
