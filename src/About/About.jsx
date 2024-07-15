import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import aboutimg from "../media/abimg.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={aboutimg} alt="About-image" />
      </div>
      <div className="text-container">
        <h2>Hi, I'm Laiba Ahmed.</h2>
        <p>
          I am an imperfect human being just like you. We take one step at a
          time. Maybe on the 38th step, we continue to stumble. But we keep
          getting up, because falling doesn't keep us on the ground. We keep
          moving forward no matter what and learning from our mistakes.
          <br></br>
          <br></br>
          One action to inch you closer, to move you further, to move you onward
          in the direction of your dream. BUT, there is one catch: NO one can
          take action for you. You have to be the one to take it, even it it's
          with trembling knees. You are loved here. You are supported here. We
          got your back. We believe in you. Are you ready to take that first
          step?
        </p>
        <div className="button">
          <Link to="/connect" className="about-btn">
            Get Started
            <FontAwesomeIcon icon={faChevronRight} className="chevron2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
