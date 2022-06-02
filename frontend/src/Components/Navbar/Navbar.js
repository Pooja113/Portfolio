import React from 'react'
import './Navbar.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className='nav-left'>
        <div className='nav-name'>Pooja Paul</div>
      </div>
      <div className='nav-right'>
      <div className='nav-list'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
      </div>
      <button className='contact'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
