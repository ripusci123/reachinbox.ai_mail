// src/components/ThemeProvider.js
import React, { useState, useContext, createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme'; // Import theme configurations

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
