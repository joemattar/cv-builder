import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>THE ODIN PROJECT - JOEMATTAR</div>
        <a href="https://github.com/joemattar" target="_blank" rel="noreferrer">
          <img
            src="https://joemattar.github.io/battleship/31ae5af2eb8f5a195706.png"
            alt="Github Logo"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
