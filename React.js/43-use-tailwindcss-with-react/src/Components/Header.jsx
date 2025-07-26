import React from "react";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 flex justify-between shadow-xl py-4 md:px-8 fixed top-0 w-full backdrop-blur-sm z-10">
      <img src={reactLogo} alt="react-logo" />
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./about-us">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
