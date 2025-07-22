import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context";
import "../CSS/navbar.css";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Change Background Color of Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

//   Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleActiveLink = () => {
      const sections = ["home", "about", "resume", "work", "contact"];
      let found = false;

      for (let id of sections) {
        const section = document.getElementById(id);
        
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveNav(`#${id}`);
            found = true;
            break;
          }
        }
      }

      if (!found) {
        setActiveNav(""); // none active
      }
    };

    window.addEventListener("scroll", handleActiveLink);
    return () => window.removeEventListener("scroll", handleActiveLink);
  }, []);
  

  return (
    <header className="header" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.9)' : ""}}>
      <nav className="nav container">
        <a href="" className="nav_logo">
          Utkarsh
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"} style={{backgroundColor: darkMode ? "#222" : ""}}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a style={{color: darkMode && "white"}} href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a style={{color: darkMode && "white"}} href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a style={{color: darkMode && "white"}} href="#resume" onClick={() => setActiveNav("#resume")} className={activeNav === "#resume" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a style={{color: darkMode && "white"}} href="#work" onClick={() => setActiveNav("#work")} className={activeNav === "#work" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a style={{color: darkMode && "white"}} href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            style={{color: darkMode && "white"}}
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i style={{color: darkMode && "white"}} className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;