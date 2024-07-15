import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faSwatchbook,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import myvideo from "../media/myvideo.mp4";

const Service = () => {
  return (
    <div className="service-container">
      <video autoPlay muted loop className="video-background">
        <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>How I Help Businesses?</h2>
      <div className="service-inner">
        <div className="Web-development">
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            delectus?
          </p>
          <div className="lowerdesign">
            <div className="arrow">
              <FontAwesomeIcon icon={faChevronRight} className="chevron" />
            </div>
            <div className="text">Read more</div>
            <div className="icon">
              <FontAwesomeIcon icon={faCubes} />
            </div>
          </div>
        </div>
        <div className="Web-development">
          <h3>UI UX</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            delectus?
          </p>
          <div className="lowerdesign">
            <div className="arrow">
              <FontAwesomeIcon icon={faChevronRight} className="chevron" />
            </div>
            <div className="text">Read more</div>
            <div className="icon">
              <FontAwesomeIcon icon={faSwatchbook} />
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="innerbanner">
          <h4>Visual Identity</h4>
          <h4>User Experience</h4>
          <h4>Verbal Identity</h4>
          <h4>Brand Story</h4>
          <h4>Market Positioning</h4>
          <h4>Content Strategy</h4>
        </div>
      </div>
    </div>
  );
};
export default Service;
