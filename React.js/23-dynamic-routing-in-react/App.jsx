import React from "react";
import Header from "./components/Header";
import styles from "./style.css";
import styles from "./components/Country.css"
import SearchBar from "./components/SearchBar";
import Accordion from "./components/Accordion";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Homepage from "./components/Homepage";
import FooterComponent from "./components/FooterComponent";

export default function App() {
  return (
    <>
      <Header />
    <Outlet />
    {/* <FooterComponent />  */}
    </>
  );
}
