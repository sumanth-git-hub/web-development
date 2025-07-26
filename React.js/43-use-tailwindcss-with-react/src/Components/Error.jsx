import React from 'react'
import Header from './Header'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <Header />
        <div className='my-20'>
            <p>{error.status} {error.data}</p>
        <Link to="./">Back to Homepage</Link>
        </div>
    </div>
  )
}
