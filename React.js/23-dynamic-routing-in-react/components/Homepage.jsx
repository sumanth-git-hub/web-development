import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Accordion from "./Accordion";
import CardContainer from "./CardContainer";
import { useState } from "react";


export default function Homepage() {

        const [query, setQuery] = useState("");

  return (
    <main>
        <section className="search-filter-container">
            <SearchBar setQuery={setQuery} />
            <Accordion />
        </section>
        <CardContainer query={query} />
      </main>
  )
}
