import "./Cta.css";
import React from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import dot1 from "../media/dot1.png";
import dot2 from "../media/dot2.png";

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
          See Work
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </ScrollLink>
        <ScrollLink
          to="calendly"
          smooth={true}
          duration={500}
          className="ctabtn meet"
          style={{ cursor: "pointer" }}
        >
          Book 1-1 Meeting
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </ScrollLink>
        <img src={dot1} alt="" className="dotimg" />
      </div>
    </div>
  );
};

export default Cta;
