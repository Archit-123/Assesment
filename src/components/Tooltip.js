import React from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
