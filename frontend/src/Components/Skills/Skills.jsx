import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" >
      <div className="skills__wrapper">
        <div className="skills">
          <div className="skills__heading">
            <span>Skills</span>
          </div>
          
          <div className="core__skills">
            <div className="core__skill">
              <h2 className="core__skill__heading">WordPress Developer</h2>
              <p className="core__skill__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore odit minus?
              </p>
            </div>
            <div className="core__skill">
              <h2 className="core__skill__heading">MERN Stack Developer</h2>
              <p className="core__skill__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore odit minus?
              </p>
            </div>
            <div className="core__skill">
              <h2 className="core__skill__heading">Problem Solving</h2>
              <p className="core__skill__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore odit minus?
              </p>
            </div>
          </div>
          <div className="tech__skills">
            <div className="tech__heading">
              Technologies, I'm Familiar with
            </div>
            <div className="tech__list">
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Tailwind</div>
              <div>Bootstrap</div>
              <div>PHP</div>
              <div>Javascript</div>
              <div>jQuery</div>
              <div>JSON</div>
              <div>AJAX</div>
              <div>ReactJS</div>
              <div>Redux</div>
              <div>NodeJS</div>
              <div>ExpressJS</div>
              <div>Mongoose</div>
              <div>MongoDB</div>
              <div>Firebase</div>
              <div>MySQL</div>
              <div>Github</div>
              <div>Git</div>
              <div>Heroku</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
