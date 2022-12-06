import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../CSS/skills.css";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="skills section" id="resume" style={{color: darkMode && "white"}}>
      <h2 className="section_title" style={{color: darkMode && "white"}}>Skills</h2>
      <span className="section_subtitle">My technical skills</span>

      <div className="grid skills_container container">
        <div className="skills_grid">
          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-html5"></i>
            <span className="skill_span">HTML</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-css3"></i>
            <span className="skill_span">CSS</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i class='skill_icon bx bxl-bootstrap' ></i>
            <span className="skill_span">Bootstap</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-sass"></i>
            <span className="skill_span">Sass</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-javascript"></i>
            <span className="skill_span">JavaScript</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-react"></i>
            <span className="skill_span">React JS</span>
          </div>

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-nodejs"></i>
            <span className="skill_span">Node JS</span>
          </div>

          {/* <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-python"></i>
            <span className="skill_span">Python</span>
          </div> */}

          <div className="skills_content" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i className="skill_icon bx bxl-c-plus-plus"></i>
            <span className="skill_span">C++</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
