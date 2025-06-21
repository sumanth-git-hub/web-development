import {useState} from 'react'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'
import AccordionComp from './AccordionComp'
import { useOutlet, useOutletContext } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext'
import {useTheme} from '../hooks/useTheme'
// import { useWindowSize } from '../hooks/useWindowSize'


export default function HomePage() {
            const [query, setQuery] = useState("")
  // const [isDarkMode] = useOutletContext()
  // console.log(isDarkMode)

  // const [isDarkMode] = useContext(ThemeContext)
  const [isDarkMode] = useTheme()
  // console.log(isDarkMode)

  // const windowSize = useWindowSize()

  return (
    <main className={`${isDarkMode && 'dark-mode'}`}>
      <section className="search-filter-container">
        <SearchBar setQuery={setQuery}> </SearchBar>
        <AccordionComp></AccordionComp>
      </section>
      {/* <h1 style={{textAlign: "center"}}>{windowSize.width} X {windowSize.height}</h1> */}
      <CardContainer query={query} />
    </main>
  );
}
