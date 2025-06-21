import {useContext, useState} from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import AccordionComp from './AccordionComp'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'


export default function HomePage() {
            const [query, setQuery] = useState("")
    // const [isDarkMode] = useOutletContext()
    const [isDarkMode] = useContext(ThemeContext)
    console.log(isDarkMode)
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <section className="search-filter-container">
        <SearchBar setQuery={setQuery}> </SearchBar>
        <AccordionComp></AccordionComp>
      </section>
      <CardContainer query={query} />
    </main>
  );
}
