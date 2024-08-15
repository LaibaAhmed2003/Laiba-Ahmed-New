import React from "react";
import "./Client2.css";

const Technologies = () => {
  const techList = [
    "React.js",
    "Next.js",
    "JavaScript",
    "CSS",
    "Tailwind.css",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <div className="Technologies-Container">
      <div className="Technologies-Wrapper">
        <div className="Technologies-Inner">
          {techList.map((tech, index) => (
            <div className="Technologies-Item" key={index}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
