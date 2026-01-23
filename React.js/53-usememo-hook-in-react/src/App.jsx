import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemoHook from './components/UseMemoHook'
import FilterUsingMemo from './components/FilterUsingMemo'

function App() {

  return (
   <div className='react-app'>
    <UseMemoHook />
    <FilterUsingMemo />
   </div>
  )
}

export default App
