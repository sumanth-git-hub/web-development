import React from 'react'
import HeaderComponent from './HeaderComponent'
import { useRouteError } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Error() {
      const error = useRouteError()
      console.log(error)
      const [isDarkMode] = useTheme()
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>        <div className='error-page'>
            <h2>Oops!</h2>
        <p>Something went wrong!</p>
        <p><span>404</span> not found</p>
        <button className='ButtonElement' onClick={(() => {
          window.location.href = "/"
        })}>Back to Home</button>
        </div>
    </main>
  )
}
