import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind-css.png"
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Header({isOpen, setIsOpen}) {
  return (
    <header className="px-4 flex justify-between shadow-xl py-4 md:px-8 fixed top-0 w-full z-10 bg-white/30 backdrop-blur-sm">
      <Link to="./"><img className="w-12" src={tailwindLogo} alt="react-logo" /></Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": ""} to="./" end>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": ""} to="./about-us">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "text-amber-500 underline decoration-blue-500 decoration-dotted": ""} to="./contact">Contact</NavLink>
          </li>
          <li><button className="cursor-pointer" onClick={() => {
           setIsOpen("signin")
          }}>Sign in </button>
          <Modal isOpen={isOpen === "signin"} setIsOpen={() => setIsOpen(null)}
          headerLine= {<div className="text-xl font-bold">Sign In</div>}
          footerLine={<div className="flex justify-end gap-4">
          <button onClick={() => {
            setIsOpen(false)
          }} className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
            Cancel
          </button>
          <button onClick={() => {
            setIsOpen(null)
          }}  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>}
          >
            <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
          </Modal>
          </li>
        </ul>
      </nav>
    </header>
  );
}
