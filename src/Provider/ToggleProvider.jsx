import React, { useState, createContext } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
    // console.log('sdfdd',isDark);
  };

  return (
    <ToggleContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ToggleContext.Provider>
  );
};
