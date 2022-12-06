import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import "../CSS/toggle.css"

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
  return (
    <div className='theme_toggler'>
        <i className="uil uil-sun light_theme-icon"></i>
        <i className="uil uil-moon dark_theme-icon"></i>
        <div className="t_button" onClick={handleClick} style={{left: theme.state.darkMode ? 5 : 30}}></div>
    </div>
  )
}

export default Toggle