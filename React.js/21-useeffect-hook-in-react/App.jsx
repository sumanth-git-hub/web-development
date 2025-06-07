import {useState} from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchBar from './components/SearchBar'
import CardContainer from './components/CardContainer'

import styles from "./style.css"
import SearchBar from './components/SearchBar'
import AccordionComp from './components/AccordionComp'

export default function App() {
        const [query, setQuery] = useState("")
        console.log(query)
        console.log(setQuery)
  return (
    <div>
        <HeaderComponent />
        <main>
            <section className="search-filter-container">
            <SearchBar setQuery={setQuery}> </SearchBar>
            <AccordionComp></AccordionComp>
        </section>
           {
        query === "unmount" ? "" : <CardContainer query={query}>
            </CardContainer>
           }
        </main>
    </div>
  )
}
