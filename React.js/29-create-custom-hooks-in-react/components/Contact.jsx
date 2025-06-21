import React, { useContext } from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'
import {useTheme} from '../hooks/useTheme'

export default function Contact() {
  // const [isDarkMode] = useContext(ThemeContext)

   const [isDarkMode] = useTheme()

    console.log("Hello Contact webpage")
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <h1>Contact us</h1>
    </main>
  )
}
