import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import HomePage from './Components/HomePage'

function App() {
  const [isOpen, setIsOpen] = useState(null)

  return (
    <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <Outlet context={{ isOpen, setIsOpen }} />
    </>
  )
}

export default App
