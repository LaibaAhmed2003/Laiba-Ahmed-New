import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../media/newlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navlist">
        <Link to="/services" className="navitem">
          Services
        </Link>
        <Link to="/projects" className="navitem">
          Projects
        </Link>
        <Link to="/how-it-works" className="navitem">
          How it works?
        </Link>
        <Link to="/testimonial" className="navitem">
          Testimonial
        </Link>
      </div>
      <div className="mainbtn">
        <Link to="/connect" className="connectbtn">
          Book 1-1 Call
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
