import React, { useState } from "react";
import "./HamburgerMenu.css";
// import Tree from "./Tree";
import Tooltip from "./Tooltip";
import TreeStruct from "./TreeStruct";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [activeOption, setActiveOption] = useState("all");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (option) => {
    setActiveOption(option);
    setIsOpen1(false);
  };

  return (
    <div className="hamburger-menu-container">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu ${isOpen ? "open1" : ""}`}>
        <div className="menu-child">
          <Tooltip text="All">
            <h3
              className={`all ${activeOption === "all" ? "active" : ""}`}
              onClick={() => handleMenuClick("all")}
            >
              All
            </h3>
          </Tooltip>
          <h3
            className={`board ${activeOption === "board" ? "active" : ""}`}
            onClick={() => handleMenuClick("board")}
          >
            Board
          </h3>
          <h3
            className={`recent ${activeOption === "recent" ? "active" : ""}`}
            onClick={() => handleMenuClick("recent")}
          >
            Recent
          </h3>
          <h3
            className={`graph ${activeOption === "graph" ? "active" : ""}`}
            onClick={() => handleMenuClick("graph")}
          >
            Graph
          </h3>
        </div>
        {activeOption === "graph" && <div className="graph-child">graph</div>}
        {activeOption === "recent" && (
          <div className="recent-child">recent</div>
        )}
        {activeOption === "board" && <div className="board-child">Board</div>}
        {activeOption === "all" && (
          <div className="tree">
            <TreeStruct></TreeStruct>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
