import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stepper from './components/Stepper'

function App() {

  return (
    <div>
      <h2 className='text-center my-4 font-bold text-lg'>Stepper Component in <span className='text-sky-300'>React</span></h2>
      <Stepper />
    </div>
  )
}

export default App
