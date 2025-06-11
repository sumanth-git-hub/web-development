import React from 'react'

export default function HeaderComponent() {
  return (
    <header className="header-container">
        <div className="header-content">
            <h1 className="title"><a href="./index.html">Where in the world?</a></h1>
            <p className="theme-changer"><i className="fa-regular fa-moon"></i><span>&nbsp;&nbsp;Dark Mode</span></p>
        </div>
    </header>
  )
}
