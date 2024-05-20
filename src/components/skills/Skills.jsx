import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../CSS/skills.css";
import HTMLIcon from '../../assets/html-1.svg';
import CSSIcon from '../../assets/css-3.svg';
import JSIcon from '../../assets/javascript-1.svg';
import TailwindIcon from '../../assets/tailwind-css-2.svg';
import NodeIcon from '../../assets/nodejs-1.svg';
import ReactIcon from '../../assets/react-2.svg';
import ReduxIcon from '../../assets/redux.svg';
import MongoIcon from '../../assets/mongodb-icon-1-1.svg';
import GitIcon from '../../assets/git-icon.svg';
import FirebaseIcon from '../../assets/firebase-1.svg';
import MySQLIcon from '../../assets/mysql-3.svg';

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="skills section" id="resume">
      <h2 className="section_title" style={{ color: darkMode && "white" }}>
        Skills
      </h2>
      <span className="section_subtitle">My technical skills</span>
      <div class="skills__container">
          {/* <!--==================== SKILLS 1 ====================--> */}
          <div class="skills__content">
            <h3 class="skills__title" style={{color: darkMode && "white"}}>
              <i class="ri-braces-line"></i> Frontend Developer
            </h3>
            <div class="skills__info">
              <div class="skills__data">
                <div class="skills__blob">
                  <img src={HTMLIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>HTML</h3>
                <span class="skills__subtitle">Advanced</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={CSSIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>CSS</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={JSIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>JavaScript</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={TailwindIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Tailwind</h3>
                <span class="skills__subtitle">Beginner</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={ReactIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>React</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={ReduxIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Redux</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={GitIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Git</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

            </div>
          </div>

          {/* <!--==================== SKILLS 2 ====================--> */}
          <div class="skills__content">
            <h3 class="skills__title" style={{color: darkMode && "white"}}>
              <i class="ri-braces-line"></i> Backend Developer
            </h3>
            <div class="skills__info">
              <div class="skills__data">
                <div class="skills__blob">
                  <img src={NodeIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Node JS</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={MongoIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Mongo DB</h3>
                <span class="skills__subtitle">Beginner</span>
              </div>
              
              <div class="skills__data">
                <div class="skills__blob">
                  <img src={FirebaseIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>Firebase</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>

              <div class="skills__data">
                <div class="skills__blob">
                  <img src={MySQLIcon} alt="skills image" />
                </div>

                <h3 class="skills__name" style={{color: darkMode && "white"}}>MySQL</h3>
                <span class="skills__subtitle">Intermediate</span>
              </div>
              
            </div>
          </div>
          
        </div>

      {/* <div className="skills_grid">
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
      </div> */}
    </section>
  );
};

export default Skills;
