import React, { useContext } from 'react'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Contact() {
    console.log("Hello Contact webpage")

      const [isDarkMode] = useContext(ThemeContext)

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <h1>Contact us</h1>
    </main>
  )
}
