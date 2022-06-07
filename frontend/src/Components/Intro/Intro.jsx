import Github from "../../img/github.png";
import React, { useContext } from "react";
import "./Intro.css";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
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
          <a href="https://www.linkedin.com/in/pooja-paul/" target="blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://twitter.com/poojapaul135" target="blank">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://github.com/Pooja113  " target="blank">
            <img src={Github} alt="" />
          </a>
          </div>
        </div>
        </div>

    </div>
    </header>
  );
};

export default Intro;
