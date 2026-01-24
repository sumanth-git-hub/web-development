import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseCallBackHook } from './components/UseCallBackHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='react-app'>
      <h1>Understand the useCallback() hook in react</h1>
      <UseCallBackHook />
    </div>
  )
}

export default App
