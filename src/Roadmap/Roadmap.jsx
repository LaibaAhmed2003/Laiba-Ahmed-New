import React, { useEffect, useState, useRef } from "react";
import "./Roadmap.css";
import discovery from "../media/discovery.png";
import wireframing from "../media/discovery.png";
import design from "../media/discovery.png";
import development from "../media/discovery.png";
import deployment from "../media/discovery.png";

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const boxItems = document.querySelectorAll(".boxitem");
      boxItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const activeElement = slider.querySelectorAll("h4")[activeIndex];
      if (activeElement) {
        const sliderTop = slider.getBoundingClientRect().top;
        const activeTop = activeElement.getBoundingClientRect().top;
        const activeHeight = activeTop - sliderTop;

        slider.style.setProperty(
          "--line-height",
          `${activeHeight + activeElement.offsetHeight / 2}px`
        );
      }
    }
  }, [activeIndex]);

  return (
    <div className="Roadmap-container" id="how-it-works">
      <h2>How We Achieve It</h2>
      <div className="roadmapinner">
        <div className="slider" ref={sliderRef}>
          {[1, 2, 3, 4, 5].map((num, index) => (
            <h4 key={index} className={activeIndex === index ? "active" : ""}>
              {num}
            </h4>
          ))}
          <div className="line"></div>
        </div>
        <div className="box-container">
          {[...Array(5)].map((_, index) => (
            <div
              className={`boxitem ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              {index === 0 && (
                <div className="textpart">
                  <div className="discovery">
                    <h3>Discovery Workshop</h3>
                    <p>
                      We delve into your objectives, determine success metrics,
                      identify areas to improve, and define the target audience
                      you want to attract.
                    </p>
                  </div>
                  <div className="time">
                    <h6>"1 - 2 hours"</h6>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="textpart">
                  <div className="wireframing">
                    <h3>Wireframing & Prototyping</h3>
                    <p>
                      We create wireframes to outline the structure and layout,
                      followed by interactive prototypes to test usability and
                      gather feedback.
                    </p>
                  </div>
                  <div className="time">
                    <h6>"2 - 3 hours"</h6>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="textpart">
                  <div className="design">
                    <h3>Visual Design</h3>
                    <p>
                      Our team crafts high-fidelity mockups with a consistent
                      design system, ensuring responsiveness and alignment with
                      your brand identity.
                    </p>
                  </div>
                  <div className="time">
                    <h6>"3 - 4 hours"</h6>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className="textpart">
                  <div className="development">
                    <h3>Development</h3>
                    <p>
                      We turn the designs into a functional website using the
                      latest technologies, ensuring it is fast, secure, and
                      mobile-friendly.
                    </p>
                  </div>
                  <div className="time">
                    <h6>"4 - 5 hours"</h6>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className="textpart">
                  <div className="deployment">
                    <h3>Testing & Deployment</h3>
                    <p>
                      We rigorously test the website to ensure it meets all
                      standards and deploy it, providing post-launch support for
                      any issues.
                    </p>
                  </div>
                  <div className="time">
                    <h6>"1 - 2 hours"</h6>
                  </div>
                </div>
              )}
              <div className="imagepart">
                <img
                  src={
                    index === 0
                      ? discovery
                      : index === 1
                      ? wireframing
                      : index === 2
                      ? design
                      : index === 3
                      ? development
                      : deployment
                  }
                  alt="roadmap"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
