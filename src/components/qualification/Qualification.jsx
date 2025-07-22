import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import "../CSS/qualification.css";

const Qualification = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section
      className="education section"
      style={{ color: darkMode && "white" }}
    >
      <h2 className="section_title" style={{ color: darkMode && "white" }}>
        Qualification
      </h2>
      <span className="section_subtitle">My Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
            style={{ color: darkMode && "white" }}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
            style={{ color: darkMode && "white" }}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Bachelor's in Technology
                </h3>
                <span className="qualification_subtitle">
                  Anand International College of Engineering
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  2019 - 2023
                </div>
              </div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>

              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Senior Seconadary School
                </h3>
                <span className="qualification_subtitle">
                  Shri Maheshwari Senior Secondary School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Secondary School
                </h3>
                <span className="qualification_subtitle">
                  Royal International School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  2016 - 2017
                </div>
              </div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Project Engineer
                </h3>
                <span className="qualification_subtitle">Rawattech Consulting and Solutions Private Limited</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  Jan 2023 - Present
                </div>
              </div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>

              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Full Stack Web Developer
                </h3>
                <span className="qualification_subtitle">
                  Wisflux Private Limited
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  July 2022 - Aug 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3
                  className="qualification_title"
                  style={{ color: darkMode && "white" }}
                >
                  Web Developer
                </h3>
                <span className="qualification_subtitle">CVDigimax</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt qualification_calendar-icon"></i>
                  Mar 2022 - May 2022
                </div>
              </div>

              <div>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_rounder"
                ></span>
                <span
                  style={{ backgroundColor: darkMode && "white" }}
                  className="qualification_line"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
