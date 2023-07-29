import React from "react";
import "./Home.css";
import HamburgerMenu from "./HamburgerMenu";
import RightHeader from "./RightHeader";
import Editor from "./Editor";

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <div className="header-left">
          <div className="ham">
            <HamburgerMenu></HamburgerMenu>
          </div>
          <div className="header-search">
            <input type="search" placeholder="Search" accesskey="s"></input>
          </div>
        </div>
        <div className="header-right">
          <RightHeader></RightHeader>
        </div>
      </div>
      <hr></hr>
      <div className="body">
        <Editor></Editor>
      </div>
    </div>
  );
}
