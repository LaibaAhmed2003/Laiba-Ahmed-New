// import React, { useEffect } from "react";
// import "./Projects.css";
// // import laura from "../media/lauraimg.png";
// import nmweb from "../media/nmwebsite.png";
// import nalu from "../media/Nalu2.png";
// import karl from "../media/karlhall.png";
// import evolvebyte from "../media/Evolvebyte.png";
// import Nmtech from "../media/Nmtechedge.png";
// import Lauraphone from "../media/lauraphoneimg.jpeg";
// import nmphone from "../media/nmphone.jpeg";
// import naluphone from "../media/Naluphone.jpeg";
// import karlphone from "../media/karlphone.jpeg";
// import evolvebytephone from "../media/evolvebytephone.jpeg";
// // import evolve from "../media/eb.png";
// import nmm from "../media/mn.png";
// import kh from "../media/kh.png";
// import evolve from "../media/1.png";
// import jen from "../media/2.png";
// import laura from "../media/3.png";
// import { Link } from "react-scroll";

// const Projects = () => {
//   return (
//     <div className="Projects-container" id="projects">
//       <h2>Latest Mindblowing Work</h2>
//       <div className="projects-inner">
//         <div className="project-item">
//           <div className="text">
//             <h3>
//               Laura <br /> Enzor
//             </h3>
//             <h5>View CaseStudy
//             <Link></Link>
//             </h5>
//           </div>
//           <div className="image">
//             {/* <img src={laura} alt="laura-enzor" className="laptop" />
//             <img src={Lauraphone} alt="" className="phoneimg" /> */}
//             <img src={laura} alt="" className="singleimg" />
//           </div>
//         </div>
//         <hr />

//         <div className="project-item">
//           <div className="text">
//             <h3>
//               Neha <br /> Menahil
//             </h3>
//             <h5>View CaseStudy</h5>
//           </div>
//           <div className="image">
//             {/* <img src={nmweb} alt="neha-menahil" className="laptop" />
//             <img src={nmphone} alt="" className="phoneimg" /> */}
//             <img src={nmm} alt="" className="singleimg" />
//           </div>
//         </div>
//         <hr />

//         <div className="project-item">
//           <div className="text">
//             <h3>
//               Jennifer <br /> Barnett
//             </h3>
//             <h5>View CaseStudy</h5>
//           </div>
//           <div className="image">
//             {/* <img src={nalu} alt="jennifer-barnett" className="laptop" />
//             <img src={naluphone} alt="" className="phoneimg" /> */}
//             <img src={jen} alt="" className="singleimg" />
//           </div>
//         </div>
//         <hr />

//         <div className="project-item">
//           <div className="text">
//             <h3>
//               Karl <br /> Hall
//             </h3>
//             <h5>View CaseStudy</h5>
//           </div>
//           <div className="image">
//             {/* <img src={karl} alt="karl-hall" className="laptop" />
//             <img src={karlphone} alt="" className="phoneimg" /> */}
//             <img src={kh} alt="" className="singleimg" />
//           </div>
//         </div>
//         <hr />

//         <div className="project-item">
//           <div className="text">
//             <h3>EvolveByte</h3>
//             <h5>View CaseStudy</h5>
//           </div>
//           <div className="image">
//             {/* <img src={evolvebyte} alt="evolvebyte" className="laptop" />
//             <img src={evolvebytephone} alt="" className="phoneimg" /> */}
//             <img src={evolve} alt="" className="singleimg" />
//           </div>
//         </div>

//         {/* <div className="project-item">
//           <div className="text">
//             <h3>Nmtechedge</h3>
//             <h5>View CaseStudy</h5>
//           </div>
//           <div className="image">
//             <img src={nmm} alt="" className="singleimg" />
//           </div>
//         </div> */}
//         <hr />
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
// import laura from "../media/lauraimg.png";
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
// import evolve from "../media/eb.png";
import nmm from "../media/mn.png";
import kh from "../media/kh.png";
import evolve from "../media/1.png";
import jen from "../media/2.png";
import laura from "../media/3.png";
import { Link } from "react-scroll";

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
            <h5>
              <a
                href="https://www.lauraenzor.com/"
                target="_blank"
                className="view-casestudy-link"
              >
                View CaseStudy
              </a>
            </h5>
          </div>
          <div className="image">
            <img src={laura} alt="laura-enzor" className="singleimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Neha <br /> Menahil
            </h3>
            <h5>
              <a
                href="https://nehamenahil.com/"
                target="_blank"
                className="view-casestudy-link"
              >
                View CaseStudy
              </a>
            </h5>
          </div>
          <div className="image">
            <img src={nmm} alt="neha-menahil" className="singleimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Jennifer <br /> Barnett
            </h3>
            <h5>
              <a
                href="https://nalubreathwork.com/"
                target="_blank"
                className="view-casestudy-link"
              >
                View CaseStudy
              </a>
            </h5>
          </div>
          <div className="image">
            <img src={jen} alt="jennifer-barnett" className="singleimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>
              Karl <br /> Hall
            </h3>
            <h5>
              <a
                href="https://karlhallfitness.com/"
                className="view-casestudy-link"
                target="_blank"
              >
                View CaseStudy
              </a>
            </h5>
          </div>
          <div className="image">
            <img src={kh} alt="karl-hall" className="singleimg" />
          </div>
        </div>
        <hr />

        <div className="project-item">
          <div className="text">
            <h3>EvolveByte</h3>
            <h5>
              <a
                href="https://www.evolvebyte.com/"
                target="_blank"
                className="view-casestudy-link"
              >
                View CaseStudy
              </a>
            </h5>
          </div>
          <div className="image">
            <img src={evolve} alt="evolvebyte" className="singleimg" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
