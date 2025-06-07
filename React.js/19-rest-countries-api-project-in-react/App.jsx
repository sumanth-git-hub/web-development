import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import SearchBar from "./components/SearchBar";
import AccordionElement from "./components/AccordionElement";
import CountriesCardContainer from "./components/CountriesCardContainer";
import styles from "./style.css";

export default function App() {
  return (
    <>
      <div>
        <HeaderComponent>Where in the world?</HeaderComponent>
      </div>
      <main>
        <section className="search-filter-container">
          <SearchBar />
          <AccordionElement
            option1={"Africa"}
            option2={"America"}
            option3={"Asia"}
            option4={"Europe"}
            option5={"Oceania"}
          >
            Filter by Region
          </AccordionElement>
        </section>
          <CountriesCardContainer>
          </CountriesCardContainer>
      </main>
    </>
  );
}
