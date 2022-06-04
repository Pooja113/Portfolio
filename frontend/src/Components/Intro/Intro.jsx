import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <header id="home">
    <div className="intro"   >
        <div className="intro__name" >
          <span>WELCOME! </span>
          <span>I AM</span> <span>Pooja Paul</span>
          <span>
            Full Stack Web Developer
          </span>
          <div className="hire__space">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button intro__button">Hire me</button>
          </Link>
          <div className="intro__icons">
            <Link to="/">
              <img src={Github} alt="" />
            </Link>
            <Link to="/">
              <img src={LinkedIn} alt="" />
            </Link>
            <Link to="/">
              <img src={Instagram} alt="" />
            </Link>
          </div>
        </div>
        </div>

    </div>
    </header>
  );
};

export default Intro;
