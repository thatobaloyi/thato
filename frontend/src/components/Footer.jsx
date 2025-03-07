import React from 'react'
import Socials2 from './Socials2'
import { Link } from 'react-router-dom'

function Footer() {
  const year  = new Date().getFullYear()
  return (
    <footer id='footer'>
        <Socials2/>
        <p>Thato Baloyi &copy; {year} All rights reserved.</p>
        <p><Link to='privacy-policy'>Privacy Policy</Link></p>
    </footer>
  )
}

export default Footer