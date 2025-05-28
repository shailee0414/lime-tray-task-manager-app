// --- src/screens/Home.js ---
import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-outer-container">
      <div className="home-header">
        <h1>Task Manager</h1>
        <ThemeToggle />
      </div>
      <div className="home-header home-header-second">
        <FilterButtons />
        <TaskForm />
      </div>

      <TaskList />
    </div>
  );
};

export default Home;
