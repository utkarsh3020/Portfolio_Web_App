import React, { useContext } from 'react'
import { ThemeContext } from '../../context';

const Info = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about_info grid">
        <div className="about_box" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i style={{ color: darkMode && "white" }} class='about_icon bx bx-award'></i>
            <h3 style={{ color: darkMode && "white" }} className="about_title">Designation</h3>
            <span className="about_subtitle">Developer</span>
        </div>

        <div className="about_box" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
             <i style={{ color: darkMode && "white" }} class='about_icon bx bx-briefcase'></i>
            <h3 style={{ color: darkMode && "white" }} className="about_title">Completed</h3>
            <span className="about_subtitle">5+ Projects</span>
        </div>

        <div className="about_box" style={{backgroundColor: darkMode ? "#222" : "", boxShadow: darkMode ? '0 3px 10px rgb(0 0 0 / 0.4)' : ""}}>
            <i style={{ color: darkMode && "white" }} class='about_icon bx bx-medal' ></i>
            <h3 style={{ color: darkMode && "white" }} className="about_title">Achievements</h3>
            <span className="about_subtitle">10+ Certificates</span>
        </div>
        
    </div>
  )
}

export default Info