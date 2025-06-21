import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";
import {useTheme} from "../hooks/useTheme";

export default function HeaderComponent() {
  // const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useTheme()

  return (
    <header className={`header-container ${isDarkMode && "dark-mode"}`}>
      <div className="header-content">
        <h1 className="title">
          <Link to="/">Where in the world?</Link>
        </h1>
        <p
          className="theme-changer"
          onClick={(e) => {
            setIsDarkMode(!isDarkMode);
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
