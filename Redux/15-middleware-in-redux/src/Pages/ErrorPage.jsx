import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
    <h2>Ohh Something went wrong please go back to <Link to="/home">Home</Link></h2>
    </div>
  )
}

export default ErrorPage