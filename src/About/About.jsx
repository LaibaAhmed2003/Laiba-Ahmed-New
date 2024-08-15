import React from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
          Did you know 85% of founders aren't fully aware of their website's
          potential?
          <br></br>
          <br></br>
          After analyzing over 230 websites, I've found common issues like
          misaligned design, low page sessions, slow speed, and non-mobile
          responsiveness. These mistakes can seriously hurt your ROI.
          <br></br>
          <br></br>
          I've helped 100+ businesses improve conversions through custom
          designs, better usability, engaging landing pages, faster speeds, and
          mobile optimization. Remember, your website promotes you 24/7.
          <br></br>
          {/* <br></br> */}
          {/* <span>About me:</span> */}
          <br></br> I specialize in turning complex problems into modern,
          optimized websites. With two years of experience, I create fast,
          secure, mobile-friendly sites using WordPress, Webflow, Shopify,
          Squarespace, and custom designs.
          <br></br>
          <br></br>
          Plus, I offer 1 month of free customer support. Let's chat—I look
          forward to working with you!
        </p>
        <div className="button">
          <ScrollLink
            to="calendly"
            smooth={true}
            duration={500}
            className="about-btn"
            style={{ cursor: "pointer" }}
          >
            Get Started
            <FontAwesomeIcon icon={faChevronRight} className="chevron" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default About;
