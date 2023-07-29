import React, { useEffect, useState } from "react";
import "./RightHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function RightHeader() {
  const [isvisible, setisvisible] = useState(false);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="right-header">
      <h4>
        <FontAwesomeIcon icon={faUserPlus} flip="horizontal" />
        INVITE TEAM MEMBERS
      </h4>
      <FontAwesomeIcon className="icon" icon={faBell} />
      <div className="profile" onClick={() => setisvisible(!isvisible)}>
        <h3>AM</h3>
      </div>
      {isvisible && (
        <div className="modal">
          <div className="modal-child" onClick={() => toggleTheme()}>
            Dark mode
          </div>
          <div className="modal-child">Profile</div>
          <hr></hr>
          <div className="modal-child">What`s new</div>
          <div className="modal-child">Help</div>
          <div className="modal-child">Send feedback</div>
          <div className="modal-child">Hints and shortcuts</div>
          <hr></hr>
          <div className="modal-child">Logout</div>
        </div>
      )}
    </div>
  );
}
