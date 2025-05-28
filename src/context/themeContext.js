import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useLocalStorage("theme", "light");
  const [theme, setTheme] = useState(themeValue);

  const toggleTheme = (theme) => {
    setThemeValue(theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
