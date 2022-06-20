import React from "react";
import "./Portfolio.css";
import Sharkcart from "../../img/sharkcart.png";
import Huddle from "../../img/huddle.png";

const Portfolio = () => {
  return (
    <section id="portfolio" >
      <div className="portfolio__wrapper">
        <div className="portfolio__heading">
            <span>Projects</span>
         </div>
         <div className="portfolio__items">
            <div className="portfolio__item">
                <a href="https://sharkcart.herokuapp.com/">
                <img src={Sharkcart} alt="" />
                <h2 className="project__heading">SharkCart Ecommerce Project</h2>
                <p className="project__tech">
                       Lorem, ipsum dolor sit amet 
                </p>
                </a>
            </div>
            <div className="portfolio__item">
                <a href="https://huddle-chat.herokuapp.com/">
                <img src={Huddle} alt="" />
                <h2 className="project__heading">Huddle Chat App</h2>
                <p className="project__tech">
                       Lorem, ipsum dolor sit amet 
                </p>
                </a>
            </div>
            <div className="portfolio__item">
                <a href="https://sharkcart.herokuapp.com/">
                <img src={Sharkcart} alt="" />
                <h2 className="project__heading">SharkCart Ecommerce Project</h2>
                <p className="project__tech">
                       Lorem, ipsum dolor sit amet 
                </p>
                </a>
            </div>
          </div>
        </div>
      </section>

    
  );
};

export default Portfolio;
