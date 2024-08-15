import React from "react";
import Nalu from "../media/nalu3.png";
import evolvebyte from "../media/evolvebytelogo2.png";
import karl from "../media/karllogo3.png";
import laura from "../media/lauralogo.png";
import nm from "../media/nmlogo.png";
import "./Client.css";

const Client = () => {
  const clientLogos = [
    { src: Nalu, alt: "nalu-breathwork" },
    { src: evolvebyte, alt: "evolvebyte" },
    { src: karl, alt: "karl", className: "karl" },
    { src: laura, alt: "laura" },
    { src: nm, alt: "nm" },
  ];

  return (
    <div className="Client-Container">
      <div className="Client-Wrapper">
        <div className="Client-Inner">
          {clientLogos.map((logo, index) => (
            <div className="Client-Item" key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.className ? logo.className : ""}
              />
              {logo.name && <h3>{logo.name}</h3>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
