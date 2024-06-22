import React from 'react'
import img from '../assets/contentstar.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'> 
      <img src={img} alt="Header Image" />
      <div className='navlinks'>
      <Link to="/" className='navlink'>Home</Link>
      <Link to="/about" className='navlink'>About Us</Link>
      <Link to="/contact" className='navlink'>Contact</Link>
      </div>
    </div>
  )
}

export default Header