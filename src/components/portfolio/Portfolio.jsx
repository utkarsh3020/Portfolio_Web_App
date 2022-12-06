import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import "../CSS/portfolio.css";
import Works from "./Works";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [items, setItems] = useState(Works);
  const filterItem = (categoryItem) => {
    const updatedItems = Works.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="portfolio section" id="work" style={{color: darkMode && "white"}}>
      <h2 className="section_title" style={{color: darkMode && "white"}}>Portfolio</h2>
      <span className="section_subtitle">Recent Works</span>

      <div className="work_filters">
        <span
          className={items === Works ? "work_item-active" : "work_item"}
          onClick={() => setItems(Works)}
          style={{backgroundColor: darkMode ? "white" : "", color: darkMode && "#222"}}
        >
          All
        </span>
        <span style={{color: darkMode && "white"}} className="work_item" onClick={() => filterItem("Web App")}>
          Web App
        </span>
        <span style={{color: darkMode && "white"}} className="work_item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span style={{color: darkMode && "white"}} className="work_item" onClick={() => filterItem("Blogs")}>
          Blogs
        </span>
        <span style={{color: darkMode && "white"}} className="work_item" onClick={() => filterItem("Game")}>
          Game
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, url } = elem;
          return (
            <div className="work_card" key={id} style={{backgroundColor: darkMode ? "#222" : ""}}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="work_button"
              >
                <i className="uil uil-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
