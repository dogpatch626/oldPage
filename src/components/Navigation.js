import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navigation.css'

const Navigation = ({ handleDarkModeToggle }) => {
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
        <li onClick={handleDarkModeToggle}>
          <FontAwesomeIcon icon={faMoon} size='2x' className='dark-mode-toggle' />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
