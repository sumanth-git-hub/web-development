import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent({theme}) {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  // const [isDarkMode, setIsDarkMode] = useState(
  //   JSON.parse(localStorage.getItem("DarkMode"))
  // );
  const [isDarkMode, setIsDarkMode] = theme
  console.log(JSON.parse(localStorage.getItem("DarkMode")));

  // we are not ready to manipulate the dom in react so we use other method to implement dark mode that's why below code ois commented
  
  // if (isDarkMode) {
  //   document.body.classList.add("dark-mode");
  // } else {
  //   document.body.classList.remove("dark-mode");
  // }

  return (
    <header className={`header-container ${isDarkMode && "dark-mode"}`}>
      <div className="header-content">
        <h1 className="title">
          <Link to="/">Where in the world?</Link>
        </h1>
        <p
          className="theme-changer"
          onClick={(e) => {
            // document.body.classList.toggle("dark-mode");
            setIsDarkMode(!isDarkMode);
            // console.log(!isDarkMode)
            localStorage.setItem("DarkMode", !isDarkMode);
          }}
        >
          <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
          <span>{` ${isDarkMode ? "Light Mode" : "Dark Mode"}`}</span>
        </p>
      </div>
    </header>
  );
}
