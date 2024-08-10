// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../media/newlogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faBars } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <div className="Navbar-container">
//       <div className="logo">
//         <img src={logo} alt="" />
//       </div>
//       <div className="navlist">
//         <Link to="/services" className="navitem">
//           Services
//         </Link>
//         <Link to="/projects" className="navitem">
//           Projects
//         </Link>
//         <Link to="/how-it-works" className="navitem">
//           How it works?
//         </Link>
//         <Link to="/testimonial" className="navitem">
//           Testimonial
//         </Link>
//       </div>
//       <div className="mainbtn">
//         <Link to="/connect" className="connectbtn">
//           Book 1-1 Call
//           <FontAwesomeIcon icon={faChevronRight} className="chevron" />
//         </Link>
//       </div>
//       <div className="menu-bar">
//         <FontAwesomeIcon icon={faBars} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../media/newlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import the cross icon

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="Navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`navlist ${isNavOpen ? "open" : ""}`}>
        {isNavOpen && (
          <div className="close-icon" onClick={toggleNav}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
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
      <div className="menu-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
