import React from 'react'
import HeaderComponent from './HeaderComponent'
import { useRouteError } from 'react-router-dom'

export default function Error() {
      const error = useRouteError()
      console.log(error)
  return (
    <>        <div className='error-page'>
            <h2>Oops!</h2>
        <p>Something went wrong!</p>
        <p><span>404</span> not found</p>
        <button className='ButtonElement' onClick={(() => {
          window.location.href = "/"
        })}>Back to Home</button>
        </div>
    </>
  )
}
