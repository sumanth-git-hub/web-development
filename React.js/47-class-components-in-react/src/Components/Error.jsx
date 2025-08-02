import React from 'react'
import Header from './Header'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <Header />
        <div className='my-20 px-4 md:px-8'>
            <p>{error.status} {error.data}</p>
        <Link to="./" className='text-blue-500'>Back to Homepage</Link>
        </div>
    </div>
  )
}
