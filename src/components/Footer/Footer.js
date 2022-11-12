import React from "react";
import "./Footer.css";
import github_logo_image from "./github_logo_white.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>THE ODIN PROJECT - JOEMATTAR</div>
        <a href="https://github.com/joemattar" target="_blank" rel="noreferrer">
          <img src={github_logo_image} alt="Github Logo" />
        </a>
      </footer>
    );
  }
}

export default Footer;
