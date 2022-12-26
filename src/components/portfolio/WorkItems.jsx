import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const WorkItems = ({ item }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="work_card"
      key={item.id}
      style={{ backgroundColor: darkMode ? "#222" : "" }}
    >
      <div className="work_thumbnail">
        <img src={item.image} alt="" className="work_img" />
        <div className="work_mask"></div>
      </div>

      <span className="work_category">{item.category}</span>
      <h3 className="work_title">{item.title}</h3>
      <a href={item.url} target="_blank" rel="noreferrer" className="work_button">
        <i className="uil uil-link work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
