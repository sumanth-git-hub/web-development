import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import React from "react";

// export default function useTheme() {
//   const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);

//   return [isDarkMode, setIsDarkMode];
// }

export const useTheme = () => useContext(ThemeContext)