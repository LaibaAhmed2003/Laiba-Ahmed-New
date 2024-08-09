import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CalendlySection from "./Calendly";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="calendly-container">
        <CalendlySection />
      </div>
      <div className="footer-content">
        <div className="footer-upper">
          <h2>Unlock your full potential</h2>
          <h5 className="herobtn" style={{ marginTop: "0px" }}>
            Book 1-1 Call
            <FontAwesomeIcon icon={faChevronRight} className="chevron" />
          </h5>
        </div>
        <div className="footer-lower">
          <div className="privacy">
            <h4>Privacy Policy - Laiba Ahmed</h4>
          </div>
          <div className="social">
            <h5 className="icon">laiba.sabahat9@gmail.com</h5>
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
