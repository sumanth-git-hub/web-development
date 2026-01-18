import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageCardCarousel } from './components/ImageCardCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='react-app'>
      <ImageCardCarousel />
    </div>
  )
}

export default App
