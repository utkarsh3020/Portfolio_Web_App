import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../CSS/footer.css";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer className="footer" style={{backgroundColor: darkMode ? "#222" : "", color: darkMode && "white", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.6)' : ""}}>
      <div className="footer_container container">
        <h1 style={{color: darkMode && "white"}} className="footer_title">Utkarsh</h1>

        <ul className="footer_list">
          <li>
            <a style={{color: darkMode && "white"}} href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a style={{color: darkMode && "white"}} href="#resume" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a style={{color: darkMode && "white"}} href="#work" className="footer_link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/utkarshguptta/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
            style={{backgroundColor: darkMode ? "white" : "", color: darkMode && "#222"}}
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/utkarsh3020"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
            style={{backgroundColor: darkMode ? "white" : "", color: darkMode && "#222"}}
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span style={{color: darkMode && "white"}} className="footer_copyright">
            &#169; 2020 All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
