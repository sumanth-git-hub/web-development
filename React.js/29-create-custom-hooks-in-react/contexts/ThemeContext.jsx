import { createContext, useState } from "react";

export const ThemeContext = createContext()
console.log(ThemeContext.Provider)

export function ThemeProvider({children}) {
      const [isDarkMode, setIsDarkMode] = useState(
      JSON.parse(localStorage.getItem("DarkMode"))
    );

    return <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>{children}</ThemeContext.Provider>
}