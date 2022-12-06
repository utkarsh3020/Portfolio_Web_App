import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../CSS/scrollup.css";

const ScrollUp = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup" style={{backgroundColor: darkMode ? "#fff" : "", opacity: darkMode ? "1" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
      <i style={{color: darkMode && "#222"}} className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;
