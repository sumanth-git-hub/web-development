import {useState} from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import AccordionComp from './AccordionComp'


export default function HomePage() {
            const [query, setQuery] = useState("")

  return (
    <main>
      <section className="search-filter-container">
        <SearchBar setQuery={setQuery}> </SearchBar>
        <AccordionComp></AccordionComp>
      </section>
      <CardContainer query={query} />
    </main>
  );
}
