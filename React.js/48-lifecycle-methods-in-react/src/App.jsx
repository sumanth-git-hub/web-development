import { Suspense, useState } from 'react'
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
    <div className="pt-24 px-4">
       <Suspense fallback={<h3 className="text-2xl font-bold text-center">Loading...</h3>}>
     <Outlet context={{ isOpen, setIsOpen }} /></Suspense>
    </div>
    </>
  )
}

export default App
