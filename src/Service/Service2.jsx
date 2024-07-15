import React from "react";
import "./Service2.css";
import discovery from "../media/discovery.png";
import uiux from "../media/ui.gif";
import webdev from "../media/webdev.gif";
import content from "../media/content.gif";

const Service2 = () => {
  return (
    <div className="service-container">
      <h2>What I do?</h2>
      <p>
        Lorem ipsum dolor sit consectetur adipisicing elit. Dolor, corporis!
        Lorem ipsum dolor <br></br> sit, amet consectetur adipisicing elit.
        Optio, at!
      </p>
      <div className="service-inner-contents">
        <div className="service1">
          <div className="upper">
            <img src={uiux} alt="" />
            <h3>UI/UX Design</h3>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum dolor sit consectetur adipisicing elit. Necessitatibus
              quod aut.
            </p>
          </div>
        </div>
        <div className="service1">
          <div className="upper">
            <img src={webdev} alt="" />
            <h3>Web Development</h3>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum dolor sit consectetur adipisicing elit. Necessitatibus
              quod aut.
            </p>
          </div>
        </div>

        <div className="service1">
          <div className="upper">
            <img src={content} alt="" />
            <h3>Content Publishing</h3>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum dolor sit consectetur adipisicing elit. Necessitatibus
              quod aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
