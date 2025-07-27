import React from "react";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind-css.png"
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 flex justify-between shadow-xl py-4 md:px-8 fixed top-0 w-full backdrop-blur-sm z-10">
      <Link to="./"><img className="w-12" src={tailwindLogo} alt="react-logo" /></Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": "text-black"} to="./" end>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": "text-black"} to="./about-us">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": "text-black"} to="./contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
