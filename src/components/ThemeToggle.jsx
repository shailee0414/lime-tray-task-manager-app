import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";

const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  useEffect(() => {
    console.log("WWW", theme)
    document.body.className = theme;
  }, [theme]);

  document.body.classList.toggle("dark-theme", isDarkMode);

  return (
    <button className={`${theme}-task-button task-buttons`}  onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
export default ThemeToggle;
