import React from "react";
import Home from "./screens/Home";
import "./App.scss";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Home />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
