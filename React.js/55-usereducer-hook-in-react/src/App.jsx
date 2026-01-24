import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import AgeCount from './components/AgeCount'
// import { AgeCount } from './components/AgeCount'

function App() {

  return (
    <div className='app'>
      <Counter />
      <AgeCount />
    </div>
  )
}

export default App
