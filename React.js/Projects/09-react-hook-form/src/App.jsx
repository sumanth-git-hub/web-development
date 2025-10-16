import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactHookForm from './Components/ReactHookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ReactHookForm />
    </div>
  )
}

export default App
