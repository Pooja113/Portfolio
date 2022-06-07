import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import Github from "../../img/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="footer__content">
        <span>poojapaul.92@gmail.com</span>
        <div className="footer__icons">
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
  );
};

export default Footer;
