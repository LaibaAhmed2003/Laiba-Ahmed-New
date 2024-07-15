import { useState } from "react"; // Import useState hook
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
  // State to manage which testimonial is selected
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);

  // Function to handle click on a testimonial
  const handleTestimonialClick = (testimonialNumber) => {
    setSelectedTestimonial(testimonialNumber);
  };

  return (
    <div className="Testimonial-container" id="testimonial-con">
      <h2>What My Clients Says.</h2>
      <div className="innertest-container">
        <div className="innertext-test">
          {/* First Testimonial */}
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

          {/* Second Testimonial */}
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

          {/* Third Testimonial */}
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
          {/* {fourth Testimonial} */}
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
          {/* Fifth Testimonial */}
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
              "Laiba didn't just create a website for me, she crafted a digital
              sanctuary where souls seeking reinvention can find solace and
              guidance. Her attention to detail, creativity, and technical
              prowess brought my vision to life in ways I couldn't have
              imagined. Thanks to Laiba's expertise, my platform is not just
              functional but a true reflection of the transformative journey I
              offer.If you're seeking a web developer who understands your
              vision and executes it flawlessly, look no further than Laiba.
              Thank you, Laiba, for your exceptional service and dedication!"
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
              "I'm thrilled to share my gratitude for Laiba, the genius behind
              my website. Laiba didn't just create a website for me; she built a
              virtual haven where individuals can embark on their journey to
              wellness and a positive mindset. Her talent and dedication are
              evident in every pixel, making navigation smooth and content
              engaging. Laiba, thank you for your exceptional work and for
              bringing my vision to life in such a beautiful way!"
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
              "I couldn't be happier with the website Laiba created for my
              LinkedIn leads coaching business. Laiba's expertise in web
              development is unmatched, and it shows in every aspect of my site.
              She captured the essence of my brand perfectly, making it easy for
              potential clients to connect with me. Laiba, thank you for your
              exceptional service and for helping me showcase my coaching
              services beautifully!"
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
              "I just have to express my heartfelt thanks to Laiba for her
              incredible work on my website. As a breathwork trainer and coach,
              it was essential for me to have a platform that reflects the
              serenity and transformation I offer. Laiba not only understood my
              vision but brought it to life with elegance and precision. Her
              talent as a web developer is truly exceptional, and I couldn't be
              happier with the result. Thank you, Laiba, for creating a space
              where others can discover the power of breathwork!"
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
              "I've got to give a massive shoutout to Laiba for her incredible
              work on my website. As a fitness trainer and coach, I needed a
              platform that not only showcased my services but also motivated
              visitors to take action. Laiba nailed it! Her creativity and
              attention to detail turned my ideas into a stunning reality.
              Thanks to her, I now have a website that reflects my passion for
              fitness and helps me connect with clients. Laiba, you're a web
              development wizard."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
