import { createContext, useState } from "react";

export const themeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggles the darkMode state
  };

  return (
    <themeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </themeContext.Provider>
  );
};
