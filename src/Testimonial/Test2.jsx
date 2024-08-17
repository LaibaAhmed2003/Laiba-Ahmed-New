import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import laura from "../media/laura.jpg";
import Jennifer from "../media/jennifer.jpg";
import Michelle from "../media/Michelle.jpg";
import Neha from "../media/Neha.jpg";
import karl from "../media/karl.png";
import quote1 from "../media/quote1.png";
import "./Test2.css";

const Testimonial = () => {
  // Set Laura's testimonial as selected by default
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const isMobile = window.innerWidth < 768;

  const handleTestimonialClick = (testimonialNumber) => {
    setSelectedTestimonial(testimonialNumber);
  };

  const handleBackClick = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="Testimonial-container" id="testimonial testimonial-con">
      <h2>What My Clients Say.</h2>
      <div className="innertest-container">
        <div className="innertext-test">
          {[laura, Michelle, Neha, Jennifer, karl].map((img, index) => (
            <div
              key={index}
              className={`testimonial testimonial${index + 1} ${
                selectedTestimonial === index + 1 ? "active" : ""
              }`}
              onClick={() => handleTestimonialClick(index + 1)}
            >
              <div className="client-info">
                <div className="image-con">
                  <img src={img} alt="" />
                </div>
                <div className="clientname">
                  <h4>
                    {index === 0
                      ? "Laura Enzor"
                      : index === 1
                      ? "Michelle Flynn"
                      : index === 2
                      ? "Neha Menahil"
                      : index === 3
                      ? "Jennifer Barnett"
                      : "Karl Hall"}
                  </h4>
                  <p>
                    {index === 0
                      ? "Soul Reinvension Coach"
                      : index === 1
                      ? "Mindset & Health Coach"
                      : index === 2
                      ? "LinkedIn Lead Expert"
                      : index === 3
                      ? "Breathwork Trainer"
                      : "Fitness Trainer"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Display */}
        {!isMobile && (
          <div className="text-container">
            {selectedTestimonial && (
              <div className="client-testimonial">
                <img src={quote1} alt="" className="quote-img" />
                <h3>
                  {selectedTestimonial === 1
                    ? "It was a fantastic experience!"
                    : selectedTestimonial === 2
                    ? "It was a great experience!"
                    : selectedTestimonial === 3
                    ? "It was an amazing experience!"
                    : selectedTestimonial === 4
                    ? "It was a great experience!"
                    : "It was a great experience!"}
                </h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="yellow-star"
                      icon={faStar}
                    />
                  ))}
                </div>
                <p>
                  {selectedTestimonial === 1
                    ? "Laiba didn't just build a website for me, she created a welcoming space where people looking for change can find comfort and guidance. Her attention to detail, creativity, and technical skills made my vision come to life in ways I never expected. Thanks to Laiba, my platform is not just functional but truly reflects the journey I offer. If you need a web developer who understands and perfectly executes your vision, Laiba is the one. Thank you, Laiba, for your amazing service and dedication!"
                    : selectedTestimonial === 2
                    ? "Laiba is an absolute wizard when it comes to website design! She didn't just build a website for me, she created a cozy online space that truly reflects my brand and helps people feel good. The website is easy to navigate and looks amazing. I'm so happy with the final product. Thanks, Laiba, for bringing my vision to life!"
                    : selectedTestimonial === 3
                    ? "Laiba did an amazing job on my LinkedIn coaching website! She really understands my business and captured its essence perfectly. The site looks great and is easy to navigate. I’m so happy with the results!"
                    : selectedTestimonial === 4
                    ? "Laiba did an amazing job on my breathwork website. She totally captured the calm and peaceful vibe I wanted. The site is beautiful and easy to use. I’m so happy with how it turned out!"
                    : "Laiba did an awesome job on my fitness website! She totally nailed it. The site looks great and really motivates people to get moving. Thanks, Laiba, for helping me build such a cool online gym!"}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Mobile Display */}
        {isMobile && (
          <div
            className={`text-container ${selectedTestimonial ? "active" : ""}`}
          >
            {selectedTestimonial && (
              <div className="back-arrow" onClick={handleBackClick}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <div className="mobile-client-info">
                  <img
                    src={
                      selectedTestimonial === 1
                        ? laura
                        : selectedTestimonial === 2
                        ? Michelle
                        : selectedTestimonial === 3
                        ? Neha
                        : selectedTestimonial === 4
                        ? Jennifer
                        : karl
                    }
                    alt="Client"
                  />
                  <div className="mobile-clientname">
                    <h4>
                      {selectedTestimonial === 1
                        ? "Laura Enzor"
                        : selectedTestimonial === 2
                        ? "Michelle Flynn"
                        : selectedTestimonial === 3
                        ? "Neha Menahil"
                        : selectedTestimonial === 4
                        ? "Jennifer Barnett"
                        : "Karl Hall"}
                    </h4>
                    <p>
                      {selectedTestimonial === 1
                        ? "Soul Reinvension Coach"
                        : selectedTestimonial === 2
                        ? "Mindset & Health Coach"
                        : selectedTestimonial === 3
                        ? "LinkedIn Lead Expert"
                        : selectedTestimonial === 4
                        ? "Breathwork Trainer"
                        : "Fitness Trainer"}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedTestimonial && (
              <div className="client-testimonial">
                <img src={quote1} alt="" className="quote-img" />
                <h3>
                  {selectedTestimonial === 1
                    ? "It was a fantastic experience!"
                    : selectedTestimonial === 2
                    ? "It was a great experience!"
                    : selectedTestimonial === 3
                    ? "It was an amazing experience!"
                    : selectedTestimonial === 4
                    ? "It was a great experience!"
                    : "It was a great experience!"}
                </h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="yellow-star"
                      icon={faStar}
                    />
                  ))}
                </div>
                <p>
                  {selectedTestimonial === 1
                    ? "Laiba didn't just build a website for me, she created a welcoming space where people looking for change can find comfort and guidance. Her attention to detail, creativity, and technical skills made my vision come to life in ways I never expected. Thanks to Laiba, my platform is not just functional but truly reflects the journey I offer. If you need a web developer who understands and perfectly executes your vision, Laiba is the one. Thank you, Laiba, for your amazing service and dedication!"
                    : selectedTestimonial === 2
                    ? "Laiba is an absolute wizard when it comes to website design! She didn't just build a website for me, she created a cozy online space that truly reflects my brand and helps people feel good. The website is easy to navigate and looks amazing. I'm so happy with the final product. Thanks, Laiba, for bringing my vision to life!"
                    : selectedTestimonial === 3
                    ? "Laiba did an amazing job on my LinkedIn coaching website! She really understands my business and captured its essence perfectly. The site looks great and is easy to navigate. I’m so happy with the results!"
                    : selectedTestimonial === 4
                    ? "Laiba did an amazing job on my breathwork website. She totally captured the calm and peaceful vibe I wanted. The site is beautiful and easy to use. I’m so happy with how it turned out!"
                    : "Laiba did an awesome job on my fitness website! She totally nailed it. The site looks great and really motivates people to get moving. Thanks, Laiba, for helping me build such a cool online gym!"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
