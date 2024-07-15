import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../media/heroimage2.png";
import "./Hero2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="text-img">
        <div className="text-sec">
          <h1>
            Level Up <span>Your Life</span> & Business With A Modern Website
          </h1>
          <p>
            Unlock the Power of Your Website for Lasting Transformation through
            dynamic website
          </p>
          <div className="button">
            <Link to="/connect" className="herobtn">
              Get Started{" "}
              <FontAwesomeIcon icon={faChevronRight} className="chevron" />
            </Link>
          </div>
        </div>
        <div className="image-sec">
          <img src={heroimg} alt="hero-image" className="hero-image" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
