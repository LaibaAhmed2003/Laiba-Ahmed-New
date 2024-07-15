import React, { useEffect, useState, useRef } from "react";
import "./Roadmap.css";
import discovery from "../media/discovery.png";

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
    <div className="Roadmap-container">
      <h2>How we Achieve it</h2>
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
              <div className="textpart">
                <div className="discovery">
                  <h3>Discovery Workshop</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam blanditiis facere impedit eaque officiis in? Magnam
                    ut quas quod alias.
                  </p>
                </div>
                <div className="time">
                  <h6>"1 - 2 hour"</h6>
                </div>
              </div>
              <div className="imagepart">
                <img src={discovery} alt="roadmap" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
