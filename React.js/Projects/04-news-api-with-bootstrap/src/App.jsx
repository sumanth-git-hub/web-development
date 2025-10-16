import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsApp from './Components/NewsApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NewsApp />
    </div>
  )
}

export default App
