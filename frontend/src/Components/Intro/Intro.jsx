import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      <div className="intro__left">
        <div className="intro__name">
          <span style={{ color: darkMode ? "white" : "" }}>WELCOME! </span>
          <span>I AM</span>
          <span>Pooja Paul</span>
          <span  style={{ color: darkMode ? "white" : "" }}>
            Full Stack Web Developer
          </span>
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
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-15%" }}
          whileInView={{ left: "-8%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "75%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="WordPress" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "16rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="MERN" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
