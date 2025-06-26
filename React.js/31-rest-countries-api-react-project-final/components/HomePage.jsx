import {useContext, useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import AccordionComp from './AccordionComp'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import useWindowSize from '../hooks/useWindowSize'


export default function HomePage() {
            const [query, setQuery] = useState("")
    // const [isDarkMode] = useOutletContext()
    const [isDarkMode] = useContext(ThemeContext)
    // console.log(isDarkMode)
    
    const windowSize = useWindowSize()

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <section className="search-filter-container">
        <SearchBar setQuery={setQuery}> </SearchBar>
        <AccordionComp setQuery={setQuery}></AccordionComp>
      </section>
      {/* <h1 style={{textAlign: "center"}}>{windowSize.width} X {windowSize.height}</h1> */}
      <CardContainer query={query} />
    </main>
  );
}
