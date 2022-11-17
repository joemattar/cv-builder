import React from "react";
import "./Header.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div>CV BUILDER APP</div>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
