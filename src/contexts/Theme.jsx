"use client";

import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext('default');

export const useTheme = () => {
  return useContext(ThemeContext);
};

const themes = ['default', 'dark', 'blue'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [currentThemeIndex, setThemeIndex] = useState(0);
  const switchTheme = () => {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    setThemeIndex(newThemeIndex);
    setTheme(themes[newThemeIndex]);
    console.log(currentThemeIndex);
  }

  return <ThemeContext.Provider value={{theme, switchTheme}}>{children}</ThemeContext.Provider>
}
