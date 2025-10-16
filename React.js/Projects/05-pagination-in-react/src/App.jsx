import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './Components/Pagination'
import AddPagination from './Components/Pagination/AddPagination'

function App() {

  return (
    <div>
      <AddPagination />
      <Pagination />
    </div>
  )
}

export default App
