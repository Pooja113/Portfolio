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
    <nav className="nav__wrapper">
      <div className='nav__left'>
        <div className='nav__name'>Pooja Paul</div>
      </div>
      <div className='nav__right'>
      <div className='nav__list'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
      </div>
      <button className='button nav__contact'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
