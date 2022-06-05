import React from "react";
import "./Portfolio.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  return (
  
    <section id="portfolio" >
      <div className="portfolio__wrapper">
        <div className="projects">
          <div className="portfolio__heading">
            <span>Projects</span>
          </div>  
          <div className="portfolio__items">
            <Link to="/">
              <div className="portfolio__item">
              <img src={HOC} alt="" />
                <h2 className="project__heading">WordPress Developer</h2>
                <p className="project__tech">
                  Lorem, ipsum dolor sit amet 
                </p>
              </div>
            </Link>
            <div className="portfolio__item">
              <img src={Sidebar} alt="" />
              <h2 className="project__heading">WordPress Developer</h2>
              <p className="project__tech">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
            <div className="portfolio__item">
              <img src={MusicApp} alt="" />
              <h2 className="project__heading">WordPress Developer</h2>
              <p className="project__tech">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
            <div className="portfolio__item">
              <img src={Ecommerce} alt="" />
              <h2 className="project__heading">WordPress Developer</h2>
              <p className="project__tech">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
            <div className="portfolio__item">
              <img src={HOC} alt="" />
              <h2 className="project__heading">WordPress Developer</h2>
              <p className="project__tech">
                Lorem, ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
