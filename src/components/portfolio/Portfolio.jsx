import React, { useContext } from 'react'
import { ThemeContext } from "../../context";
import "../CSS/portfolio.css";
import Works from './Works'

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='portfolio section' id='work'>
      <h2 className="section_title" style={{ color: darkMode && "white" }}>
        Portfolio
      </h2>
      <span className="section_subtitle">Most recent Works</span>
    <Works />
    </section>
  )
}

export default Portfolio