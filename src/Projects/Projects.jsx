import React, { useEffect } from "react";
import "./Projects.css";
import laura from "../media/lauraimg.png";
import nmweb from "../media/nmwebsite.png";
import nalu from "../media/Nalu2.png";
import karl from "../media/karlhall.png";
import evolvebyte from "../media/Evolvebyte.png";
import Nmtech from "../media/Nmtechedge.png";
import Lauraphone from "../media/lauraphoneimg.jpeg";
import nmphone from "../media/nmphone.jpeg";
import naluphone from "../media/Naluphone.jpeg";
import karlphone from "../media/karlphone.jpeg";
import evolvebytephone from "../media/evolvebytephone.jpeg";

const Projects = () => {
  return (
    <div className="Projects-container" id="projects">
      <h2>Latest Mindblowing Work</h2>
      <div className="projects-inner">
        <div className="project-item">
          <div className="text">
            <h3>
              Laura <br /> Enzor
            </h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={laura} alt="laura-enzor" className="laptop" />
            <img src={Lauraphone} alt="" className="phoneimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Neha <br /> Menahil
            </h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={nmweb} alt="neha-menahil" className="laptop" />
            <img src={nmphone} alt="" className="phoneimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Jennifer <br /> Barnett
            </h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={nalu} alt="jennifer-barnett" className="laptop" />
            <img src={naluphone} alt="" className="phoneimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Karl <br /> Hall
            </h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={karl} alt="karl-hall" className="laptop" />
            <img src={karlphone} alt="" className="phoneimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>EvolveByte</h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={evolvebyte} alt="evolvebyte" className="laptop" />
            <img src={evolvebytephone} alt="" className="phoneimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>Nmtechedge</h3>
            <h5>View CaseStudy</h5>
          </div>
          <div className="image">
            <img src={Nmtech} alt="nmtechedge" className="laptop" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
