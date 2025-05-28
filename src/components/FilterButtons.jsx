import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/themeContext";
import "./Buttons.scss"

const FilterButtons = () => {
  const {theme} = useContext(ThemeContext)
  const { setFilter } = useContext(TaskContext);
  return (
    <div className="filters">
      <button className={`${theme}-task-button task-buttons`} onClick={() => setFilter("all")}>All</button>
      <button className={`${theme}-task-button task-buttons`} onClick={() => setFilter("completed")}>Completed</button>
      <button className={`${theme}-task-button task-buttons`} onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default FilterButtons;
