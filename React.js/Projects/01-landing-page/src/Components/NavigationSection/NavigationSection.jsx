import '../NavigationSection/NavigationStyles.css'
const NavigationSection = () => {
  return (
    <nav className='nav'>
      <div className='nav-logo'>carBrand</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default NavigationSection