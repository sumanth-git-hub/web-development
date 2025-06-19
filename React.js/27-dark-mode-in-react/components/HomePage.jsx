import {useState} from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import AccordionComp from './AccordionComp'
import { useOutlet, useOutletContext } from 'react-router-dom'


export default function HomePage() {
            const [query, setQuery] = useState("")
  const [isDarkMode] = useOutletContext()
  console.log(isDarkMode)
  return (
    <main className={`${isDarkMode && 'dark-mode'}`}>
      <section className="search-filter-container">
        <SearchBar setQuery={setQuery}> </SearchBar>
        <AccordionComp></AccordionComp>
      </section>
      <CardContainer query={query} />
    </main>
  );
}
