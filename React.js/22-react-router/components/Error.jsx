import React from 'react'
import HeaderComponent from './HeaderComponent'
import { useRouteError } from 'react-router-dom'

export default function Error() {
      const error = useRouteError()
      console.log(error)
  return (
    <>
    <HeaderComponent />
        <div className='error-page'>
            <h2>Oops!</h2>
        <p>Something went wrong!</p>
        <p><span>{error.status}</span> {error.statusText}</p>
        <a href="/"><button className='ButtonElement'>Back to Home</button></a>
        </div>
    </>
  )
}
