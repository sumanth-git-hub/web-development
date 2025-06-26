import { createContext, useState } from "react";

export const ThemeContext = createContext();
// console.log(ThemeContext);

export function ThemeProvider({ children }) {
  // console.log(children);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("DarkMode"))
  );
  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}
