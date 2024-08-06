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
          Did you know that almost 85% of founders are unaware of their
          website's potential?
          <br />
          <br />
          I've analyzed over 230 websites and found common issues:
          <br />
          <br />
          Misaligned design and sections with their target audience.
          <br />
          Low page sessions due to vague website design.
          <br />
          Slow website speed causing visitors to leave without taking action.
          <br />
          Non-mobile-responsive websites leading to unfilled opt-in forms.
          <br />
          <br />
          These mistakes can drastically lower your business ROI. If you're
          facing any of these issues, it's time to revamp your website.
          <br />
          <br />
          Here's how I've helped 100+ businesses increase their conversion
          rates:
          <br />
          <br />
          Customized website design tailored to your audience.
          <br />
          Result-driven development to enhance usability.
          <br />
          Engaging landing pages with multiple sections.
          <br />
          Improved website speed and mobile responsiveness.
          <br />
          Top-notch design quality that sets your brand apart.
          <br />
          Automated chatbots to convert more customers.
          <br />
          Optimizing your website with the right strategies will boost
          conversions and revenue. Remember, your website promotes you 24/7.
          <br />
          <br />
          About Me:
          <br />
          <br />
          I turn complex problems into modern website designs and optimized
          code. I have two years of experience in web design and development and
          specialize in creating fast, secure, mobile-friendly websites using:
          <br />
          <br />
          WordPress (Elementor Pro, Divi, Avada, Beaver Builder)
          <br />
          Webflow
          <br />
          Shopify
          <br />
          Squarespace
          <br />
          Front-end development
          <br />
          Custom designs (React.js, MERN, PHP)
          <br />
          <br />I also offer 1 month of free customer support. Book a call now—I
          look forward to working with you!
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
