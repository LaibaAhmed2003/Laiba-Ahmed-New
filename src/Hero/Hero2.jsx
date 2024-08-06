import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../media/heroimage2.png";
import "./Hero2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "../media/abimgcrop.png";
const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="text-img">
        <div className="text-sec">
          <h1>
            I create <span> website </span> that grab attention of your{" "}
            <span>targeted audience. </span>
          </h1>
          <p>
            Imagine a website that not only looks stunning but also grabs the
            attention of your targeted audience instantly.
          </p>
          <div className="button">
            <Link to="/connect" className="herobtn">
              See Work{" "}
              <FontAwesomeIcon icon={faChevronRight} className="chevron" />
            </Link>
          </div>
        </div>
        <div className="image-sec">
          <img src={heroimg} alt="hero-image" className="hero-image" />
          <div className="creative">
            <img src={Profile} alt="" />
            <h3>Creative</h3>
          </div>
          <div className="creative dynamic">
            <img src={Profile} alt="" />
            <h3>Dynamic</h3>
          </div>
          <div className="creative user">
            <img src={Profile} alt="" />
            <h3>User Friendly</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
