import React from 'react'
import Header from './Header'
// import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
      // const error = useRouteError()
      // if(error === undefined){
      //   error === "404"
      //   console.log(error)
      // }
  return (
    <div>
        <div className='error-element'>
            <h2>Oops!</h2>
            <p>Sorry the webpage not exist due to 404</p>
            {/* <p>Reason of the {error.data}</p> */}
            {/* <a href="/"><button>Back to Homepage</button></a> */}
            <button className='back-button' onClick={(e) => {
              window.location.href = "/"
            }}>Back to Homepage</button>
        </div>
    </div>
  )
}
