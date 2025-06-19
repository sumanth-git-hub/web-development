import {useState} from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchBar from './components/SearchBar'
import CardContainer from './components/CardContainer'

import styles from "./style.css"
import SearchBar from './components/SearchBar'
import AccordionComp from './components/AccordionComp'
import { Outlet } from 'react-router-dom'

export default function App() {

   const [isDarkMode, setIsDarkMode] = useState(
      JSON.parse(localStorage.getItem("DarkMode"))
    );

  return (
    <div>
      <HeaderComponent theme={[isDarkMode, setIsDarkMode]} />
      <Outlet context={[isDarkMode, setIsDarkMode]} />
    </div>
  )
}
