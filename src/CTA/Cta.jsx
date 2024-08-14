import "./Cta.css";
import React from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cta = () => {
  return (
    <div className="Cta-container">
      <h2>
        Helping Others To Create A Sales Generating Website.
        <br />
        Let's Talk!
      </h2>
      <h3>-Laiba</h3>
      <div className="ctabutton">
        <ScrollLink
          to="calendly"
          smooth={true}
          duration={500}
          className="ctabtn"
          style={{ cursor: "pointer" }}
        >
          Get Started
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Cta;
