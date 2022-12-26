import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { ThemeContext } from "../../context";


const Works = () => {
  // For Dark Mode 

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent})
    setActive(index)
  }
  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {handleClick(e, index)}} className={`${active === index ? "work_item-active" : ''} work_item`} key={index} style={{ color: darkMode && "white" }}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work_container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
