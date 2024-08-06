import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import laura from "../media/laura.jpg";
import Jennifer from "../media/jennifer.jpg";
import Michelle from "../media/Michelle.jpg";
import Neha from "../media/Neha.jpg";
import karl from "../media/karl.png";
import quote1 from "../media/quote1.png";

import "./Testimonial.css";

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);
  const handleTestimonialClick = (testimonialNumber) => {
    setSelectedTestimonial(testimonialNumber);
  };

  return (
    <div className="Testimonial-container" id="testimonial-con">
      <h2>What My Clients Says.</h2>
      <div className="innertest-container">
        <div className="innertext-test">
          <div
            className={`testimonial testimonial1 ${
              selectedTestimonial === 1 ? "active" : ""
            }`}
            onClick={() => handleTestimonialClick(1)}
          >
            <div className="client-info">
              <div className="image-con">
                <img src={laura} alt="" />
              </div>
              <div className="clientname">
                <h4>Laura Enzor</h4>
                <p>Soul Reinvension coach</p>
              </div>
            </div>
          </div>
          <div
            className={`testimonial testimonial2 ${
              selectedTestimonial === 2 ? "active" : ""
            }`}
            onClick={() => handleTestimonialClick(2)}
          >
            <div className="client-info">
              <img src={Michelle} alt="" />
              <div className="clientname">
                <h4>Michelle Flynn</h4>
                <p>Mindset & Health Coach</p>
              </div>
            </div>
          </div>
          <div
            className={`testimonial testimonial3 ${
              selectedTestimonial === 3 ? "active" : ""
            }`}
            onClick={() => handleTestimonialClick(3)}
          >
            <div className="client-info">
              <img src={Neha} alt="" />
              <div className="clientname">
                <h4>Neha Menahil</h4>
                <p>Linkedin Lead expert</p>
              </div>
            </div>
          </div>
          <div
            className={`testimonial testimonial4 ${
              selectedTestimonial === 4 ? "active" : ""
            }`}
            onClick={() => handleTestimonialClick(4)}
          >
            <div className="client-info">
              <img src={Jennifer} alt="" />
              <div className="clientname">
                <h4>Jennifer Barnett</h4>
                <p>Breathwork Trainer</p>
              </div>
            </div>
          </div>
          <div
            className={`testimonial testimonial5 ${
              selectedTestimonial === 5 ? "active" : ""
            }`}
            onClick={() => handleTestimonialClick(5)}
          >
            <div className="client-info">
              <img src={karl} alt="" />
              <div className="clientname">
                <h4>Karl Hall</h4>
                <p>Fitness Trainer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-container">
          <div
            className="client-testimonial"
            style={{ display: selectedTestimonial === 1 ? "block" : "none" }}
          >
            <img src={quote1} alt="" className="quote-img" />
            <h3>It was a fantastic experience!</h3>

            <div className="stars">
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
            </div>

            <p>
              "Laiba didn't just build a website for me, she created a welcoming
              space where people looking for change can find comfort and
              guidance. Her attention to detail, creativity, and technical
              skills made my vision come to life in ways I never expected.
              Thanks to Laiba, my platform is not just functional but truly
              reflects the journey I offer. If you need a web developer who
              understands and perfectly executes your vision, Laiba is the one.
              Thank you, Laiba, for your amazing service and dedication!"
              <br></br>
              <br />
            </p>
          </div>
          <div
            className="client-testimonial"
            style={{ display: selectedTestimonial === 2 ? "block" : "none" }}
          >
            <img src={quote1} alt="" className="quote-img" />
            <h3>It was a great experience!</h3>
            <div className="stars">
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
            </div>
            <p>
              "Laiba is an absolute wizard when it comes to website design! She
              didn't just build a website for me, she created a cozy online
              space that truly reflects my brand and helps people feel good. The
              website is easy to navigate and looks amazing. I'm so happy with
              the final product. Thanks, Laiba, for bringing my vision to life!"
            </p>
          </div>
          <div
            className="client-testimonial"
            style={{ display: selectedTestimonial === 3 ? "block" : "none" }}
          >
            <img src={quote1} alt="" className="quote-img" />
            <h3>It was a amazing experience!</h3>
            <div className="stars">
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
            </div>
            <p>
              Laiba did an amazing job on my LinkedIn coaching website! She
              really understands my business and captured its essence perfectly.
              The site looks great and is easy to navigate. I’m so happy with
              the results!
            </p>
          </div>
          <div
            className="client-testimonial"
            style={{ display: selectedTestimonial === 4 ? "block" : "none" }}
          >
            <img src={quote1} alt="" className="quote-img" />
            <h3>It was a great experience!</h3>
            <div className="stars">
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
            </div>
            <p>
              "Laiba did an amazing job on my breathwork website. She totally
              captured the calm and peaceful vibe I wanted. The site is
              beautiful and easy to use. I’m so happy with how it turned out!"
            </p>
          </div>
          <div
            className="client-testimonial"
            style={{ display: selectedTestimonial === 5 ? "block" : "none" }}
          >
            <img src={quote1} alt="" className="quote-img" />
            <h3>It was a great experience!</h3>
            <div className="stars">
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
              <FontAwesomeIcon className="yellow-star" icon={faStar} />
            </div>
            <p>
              "Laiba did an awesome job on my fitness website! She totally
              nailed it. The site looks great and really motivates people to get
              moving. Thanks, Laiba, for helping me build such a cool online
              gym! "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
