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
        With over two years of experience and 110 websites under my belt, I
        specialize <br /> in creating custom web designs that align with your
        target audience.
      </p>
      <div className="service-inner-contents">
        <div className="service1">
          <div className="upper">
            <img src={uiux} alt="" />
            <h3>UI/UX Design</h3>
          </div>
          <div className="lower">
            <ul>
              <li>Discovery & Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Visual Design</li>
              <li>Review, Approval & Handoff</li>
            </ul>
          </div>
        </div>
        <div className="service1">
          <div className="upper">
            <img src={webdev} alt="" />
            <h3>Web Development</h3>
          </div>
          <div className="lower">
            <ul>
              <li>Requirements Gathering & Planning</li>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>Testing & Deployment</li>
            </ul>
          </div>
        </div>

        <div className="service1">
          <div className="upper">
            <img src={content} alt="" />
            <h3>Content Publishing</h3>
          </div>
          <div className="lower">
            <ul>
              <li>Content Collection & Organization</li>
              <li>Formatting & Optimization</li>
              <li>Uploading & Integration</li>
              <li>Review, Approval & Publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2;
