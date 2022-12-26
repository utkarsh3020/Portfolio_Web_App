import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../CSS/skills.css";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="skills section" id="resume">
      <h2 className="section_title" style={{ color: darkMode && "white" }}>
        Skills
      </h2>
      <span className="section_subtitle">My technical skills</span>
      <div className="skills_grid">
        <div className="skills_container">
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#FF5733", "--num": "90" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                <i className="skill_icon bx bxl-html5"></i>
                </h2>
              <span className="skill_span">90%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#2965f1", "--num": "85" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-css3"></i>
                </h2>
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#602C50", "--num": "70" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-bootstrap"></i>
                </h2>
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#c69", "--num": "50" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-sass"></i>
                </h2>
                <span>50%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#f0db4f", "--num": "65" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-javascript"></i>
                </h2>
                <span>65%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#61DBFB", "--num": "50" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-react"></i>
                </h2>
                <span>50%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : "", color: darkMode && "white"}}>
            <div
              className="percent"
              style={{ "--clr": "#3c873a", "--num": "40" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-nodejs"></i>
                </h2>
                <span>40%</span>
              </div>
            </div>
          </div>
          <div className="skills_card" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <div
              className="percent"
              style={{ "--clr": "#4B8BBE", "--num": "45" }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2 style={{color: darkMode && "white"}}>
                <i className="skill_icon bx bxl-c-plus-plus"></i>
                </h2>
                <span>45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
