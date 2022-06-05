import React from "react";
import "./About.css";
import profile from "../../img/boy.png";
import Resume from './resume.pdf';

const About = () => {
  return (
    <section id="about">
    <div className="about">
      <div className="about__text" >
        <span>About Me</span>
        <h1>Born and Raised in Shimla , India. Been at work since 2016</h1>
        <span>
          Throughout my 6+ years of development experience, I worked in different technologies, building products from the ground up or implementing new features.
        </span>
        <span>I have worked on WordPress and MERN technologies, and completed a wide range of projects using them. I'm always happy to find the best solutions for any problems .</span>
        <span>I consider myself passionate and hardworking. My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers.</span>
        <a href={Resume} download>
          <button className="button about__button">Download CV</button>
        </a>
      </div>
      <div className="profile__pic">
        <img src={profile} alt="" />
      </div>
    </div>
    </section>
  );
};

export default About;
