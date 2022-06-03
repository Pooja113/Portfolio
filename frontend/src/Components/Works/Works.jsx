import React, { useContext } from "react";
import "./Works.css";
import NodeJS from "../../img/Nodejs.png";
import ReactJS from "../../img/React.png";
import Wordpress from "../../img/WordPress.png";
import Javascript from "../../img/Javascript.png";
import mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works in All these
          </span>
          <span>Technologies</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button work__button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 15 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ReactJS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={NodeJS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Wordpress} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mysql} alt="" />
          </div>
          

          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
