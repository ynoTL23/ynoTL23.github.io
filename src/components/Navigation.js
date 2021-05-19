import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='selected'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' activeClassName='selected'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='selected'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
