import React from 'react'

export default function HeaderComponent({children, spanChild}) {
  return (
    <header className="header-container">
        <div className="header-content">
            <h1 className="title"><a href="./index.html">{children}</a></h1>
            <p className="theme-changer"><i className="fa-regular fa-moon"></i><span> Dark Mode</span></p>
        </div>
    </header>
  )
}
