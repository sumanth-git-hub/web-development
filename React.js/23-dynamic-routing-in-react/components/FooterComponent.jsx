import React from 'react'
import { Link } from 'react-router-dom'


export default function FooterComponent() {
  return (
    <div className='footer-component'>
        <p>Footer Component</p>
        <footer>
            <Link to="/">Home</Link>
            <a href="/contact">Contact</a>
        </footer>
    </div>
  )
}
