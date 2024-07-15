import "./Cta.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cta = () => {
  return (
    <div className="Cta-container">
      <h2>
        Helping Others See & Become The Best Version of Themselves.
        <br />
        Let's Talk!
      </h2>
      <h3>-Laiba</h3>
      <div className="ctabutton">
        <Link to="/connect" className="ctabtn">
          Book 1-1 Call
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </Link>
      </div>
    </div>
  );
};

export default Cta;
