import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import accordion from './components/accordion'
import './App.css'
import Accordion from './components/accordion'
import FaqAccordion from './components/FaqAccordion'
import VanillaAccordion from './components/VanillaAccordion'

function App() {

  return (
    <div>
      <h2 className='text-center mt-4 mb-4 font-bold'>Accordion Component in <span className='text-sky-300'>React</span></h2>
      <p className='text-center'>When the user clicked on the question accordion answer accordion will expand and previously opened answer section get collapse, and data flows from the object format called [items]</p>
    <Accordion />
    <FaqAccordion />
    <VanillaAccordion />
    </div>
  )
}

export default App
