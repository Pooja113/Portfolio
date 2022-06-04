import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";


const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav className="nav__wrapper" id="Navbar" style={{ backgroundColor: darkMode ? "black" : "white" }} >
      <div className="nav__left"  style={{ color: darkMode ? "white" : "black" }}>
        <div className="logo">
          <Link to="home" spy={true} smooth={true}>
              Pooja
          </Link>
        </div>
        <Toggle />
      </div>
      <div className="nav__right"  style={{ color: darkMode ? "white" : "black" }}>
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
