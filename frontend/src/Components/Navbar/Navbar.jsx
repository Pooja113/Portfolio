import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <nav className="nav__wrapper" id="Navbar">
      <div className="nav__left">
        <div className="logo">
          <Link to="home" spy={true} smooth={true}>
              Pooja
          </Link>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__list">
          <ul>
            <li>
              <Link to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
           
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button nav__button">Contact</button>
        </Link>
      </div>

    </nav>

  );
};

export default Navbar;
