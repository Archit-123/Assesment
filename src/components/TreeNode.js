import React, { useState } from "react";

const TreeNode = ({ label, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <li>
      <span
        className={`caret ${isActive ? "caret-down" : ""}`}
        onClick={handleClick}
      >
        {label}
      </span>
      <ul className={`nested ${isActive ? "active" : ""}`}>{children}</ul>
    </li>
  );
};

export default TreeNode;
