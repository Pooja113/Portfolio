import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="intro__name" >
          <span style={{ color: darkMode ? "white" : "" }} >WELCOME! </span>
          <span  id="home">I AM</span> <span>Pooja Paul</span>
          <span  style={{ color: darkMode ? "white" : "" }}>
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
        <div  id="about"></div>

        </div>

    </div>
  );
};

export default Intro;
