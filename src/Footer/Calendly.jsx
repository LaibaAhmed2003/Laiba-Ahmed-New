import React from "react";
import { InlineWidget } from "react-calendly";
import "./Footer.css";
const CalendlySection = () => {
  return (
    <div className="calendly-section">
      <h2> Book 1-1 Call</h2>
      <InlineWidget
        url="https://calendly.com/laiba-sabahat9/15-min?month=2024-07"
        className="calendly-widget"
        styles={{ height: "800px" }}
      />
    </div>
  );
};

export default CalendlySection;
