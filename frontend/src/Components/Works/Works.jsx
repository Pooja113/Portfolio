import React, { useContext } from "react";
import "./Works.css";
import NodeJS from "../../img/Nodejs.png";
import ReactJS from "../../img/React.png";
import Wordpress from "../../img/WordPress.png";
import Javascript from "../../img/Javascript.png";
import mysql from "../../img/mysql.png";
import { motion } from "framer-motion";
const Works = () => {
  // context

  // transition
  return (
    <div className="works" id="works">
      <div className="work__left">
          <span>Works in All these</span>
          <span>Technologies</span>
          <p>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </p>
      
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          >
        </div>

        {/* right side */}
      </div>
      <div className="work__right">
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
      </div>
    </div>
  );
};

export default Works;
