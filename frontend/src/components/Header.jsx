import React from 'react'
import Socials2 from './Socials2';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'

function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <header id='header'>
      <div className="header-links">
        <ul>
          <li><RouterLink to='/'>Home</RouterLink></li>
          <li className='dropdown'>
            <span>More Pages</span>
            <ul className='dropdown-content'>
              <RouterLink to='/blog'><li>Blog</li></RouterLink>
              <RouterLink to='/coding'><li>Coding</li></RouterLink>
              <RouterLink to='/faq'><li>FAQ</li></RouterLink>
            </ul>
          </li>
          {isHomePage && <li><ScrollLink to='about-me' smooth={true} duration={500} offset={-200}>About</ScrollLink></li>}
          {isHomePage && <li><ScrollLink to='skills' smooth={true} duration={500} offset={-180}>Skills</ScrollLink></li>}
          {isHomePage && <li><ScrollLink to='experience' smooth={true} duration={500} offset={-180}>Experience</ScrollLink></li>}
          {isHomePage &&<li><ScrollLink to='education' smooth={true} duration={500} offset={-200}>Education</ScrollLink></li>}
        </ul>
      </div>
      <h1><RouterLink to='/'>Thato Emmanuel Baloyi</RouterLink></h1>
      <Socials2 />
    </header>
  )
}

export default Header