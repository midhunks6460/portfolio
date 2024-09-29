import  { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PropTypes for validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is a required prop
};

export default ThemeProvider;
