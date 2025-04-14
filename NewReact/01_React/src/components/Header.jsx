import React from 'react'

function Header() {
  return (
    <div>
         <nav className="nav">
          <img src="src/assets/react.svg" alt="" height={40} />
          <ul className="list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Header
