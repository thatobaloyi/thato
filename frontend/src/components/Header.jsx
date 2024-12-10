import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ThatoResume from '../assets/resume/thato.pdf';
import Socials2 from './Socials2';

function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  const handleToggle = () => {
    setNavMenuOpen(!isNavMenuOpen)
  }

  const handleDownload = () => {
    saveAs(ThatoResume, 'Thato_Resume.pdf')
  }

  return (

    <header className='navbar navbar-expand-md fixed-top mt-2' id='header' >
      <div id='header-div'>
        {/* <Socials2 /> */}
        <button className="navbar-toggler" type='button' onClick={handleToggle} style={{ padding: '1em', margin: '0.5em' }}>
          <span className="navbar-togger-icon">=</span>
        </button>
        <h5><RouterLink to='/'>Thato Baloyi</RouterLink></h5>
      </div>

      <button id='download-btn' onClick={handleDownload}>Download Resume</button>

      <div className={`collapse navbar-collapse ${isNavMenuOpen ? "show" : ""}`} id="navmenu" style={{ padding: '1em', marginLeft: '1em' }}>
        <ul className='navbar-nav gap-3'>
          <li className="nav-item">
            <RouterLink to='/'>Home</RouterLink>
          </li>
          {/* <li className='dropdown'>
              <span>More Pages</span>
              <ul className='dropdown-content'>
                <RouterLink to='/blog'><li>Blog</li></RouterLink>
                <RouterLink to='/coding'><li>Coding</li></RouterLink>
                <RouterLink to='/faq'><li>FAQ</li></RouterLink>
              </ul>
            </li> */}
          {isHomePage && <li className='nav-item'><ScrollLink to='about-me' offset={-240}>About</ScrollLink></li>}
          {isHomePage && <li className='nav-item'><ScrollLink to='skills' offset={-100}>Skills</ScrollLink></li>}
          {isHomePage && <li className='nav-item'><ScrollLink to='experience' offset={-100}>Experience</ScrollLink></li>}
          {isHomePage && <li className='nav-item'><ScrollLink to='education' offset={-100}>Education</ScrollLink></li>}
        </ul>
      </div>

    </header>
    // <header id='header' className='navbar navbar-expand-lg'>
    //     <div className="header-links collapse navbar-collapse" id="navmenu">
    //       <ul className="navbar-nav ms-auto">
    //         <li className='nav-item'><RouterLink to='/'>Home</RouterLink></li>
    //         <li className='dropdown nav-item'>
    //           <span>More Pages</span>
    //           <ul className='dropdown-content'>
    //             <RouterLink to='/blog'><li>Blog</li></RouterLink>
    //             <RouterLink to='/coding'><li>Coding</li></RouterLink>
    //             <RouterLink to='/faq'><li>FAQ</li></RouterLink>
    //           </ul>
    //         </li>
    //         {isHomePage && <li className='nav-item'><ScrollLink to='about-me' smooth={true} duration={500} offset={-200}>About</ScrollLink></li>}
    //         {isHomePage && <li className='nav-item'><ScrollLink to='skills' smooth={true} duration={500} offset={-180}>Skills</ScrollLink></li>}
    //         {isHomePage && <li className='nav-item'><ScrollLink to='experience' smooth={true} duration={500} offset={-180}>Experience</ScrollLink></li>}
    //         {isHomePage && <li className='nav-item'><ScrollLink to='education' smooth={true} duration={500} offset={-200}>Education</ScrollLink></li>}
    //       </ul>
    //     </div>
    //     <h1><RouterLink to='/'>Thato Emmanuel Baloyi</RouterLink></h1>
    //     <Socials2 />
    // </header>
  )
}

export default Header