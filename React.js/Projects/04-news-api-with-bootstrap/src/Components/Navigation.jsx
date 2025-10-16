import React from 'react'

const Navigation = ({setNewsCategory}) => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container">
    <a className="navbar-brand" href="/">
      <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
    </a>
    <ul className="nav">
  <li className="nav-item">
    <span className="nav-link active " onClick={() => setNewsCategory("business")}>Business</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" onClick={() => setNewsCategory("entertainment")} >Entertainment</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" onClick={() => setNewsCategory("health")} >Health</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" onClick={() => setNewsCategory("science")}>Science</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" onClick={() => setNewsCategory("sports")}>Sports</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" onClick={() => setNewsCategory("technology")}>Technology</span>
  </li>
</ul>
  </div>
</nav>
  )
}

export default Navigation