import React from 'react'
import Socials2 from './Socials2';
import { Link } from 'react-router-dom';

function Header() {
  const scrollToComponent = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth',
    block: 'start',
    inline: 'start'
   });
  }


  return (
    <header>
        <div className="header-links">
            <ul>
                <a><li><Link to='/'>Home</Link></li></a>
                <a><li><Link to='/blog'>Blog</Link></li></a>
                <a><li><Link to='/coding'>Coding</Link></li></a>
                <a><li><Link to='/faq'>FAQ</Link></li></a>
                {/* <a onClick={() => scrollToComponent('about-me')}><li>About</li></a>
                <a onClick={() => scrollToComponent('skills')}><li>Skills</li></a>
                <a onClick={() => scrollToComponent('education')}><li>Education</li></a> */}
            </ul>
        </div>
        <h1><Link to='/'>Thato Emmanuel Baloyi</Link></h1>
        <Socials2/>
    </header>
  )
}

export default Header