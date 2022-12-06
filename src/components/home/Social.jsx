import React, { useContext } from 'react'
import { ThemeContext } from '../../context';

const Social = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="home_social">
        <a href="https://www.linkedin.com/in/utkarshgupta30/" className='home_social-icon' target="_blank" rel="noreferrer">
            <i style={{backgroundColor: darkMode ? "#222" : "", color: darkMode && "white"}} className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/utkarsh3020" className='home_social-icon' target="_blank" rel="noreferrer">
            <i style={{backgroundColor: darkMode ? "#222" : "", color: darkMode && "white"}} className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.instagram.com/utkarshguptta/" className='home_social-icon' target="_blank" rel="noreferrer">
            <i style={{backgroundColor: darkMode ? "#222" : "", color: darkMode && "white"}} className="uil uil-instagram"></i>
        </a>
    </div>
  )
}

export default Social