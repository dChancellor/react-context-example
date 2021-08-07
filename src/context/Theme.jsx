import { createContext, useState, useEffect } from "react";
import { themes } from "../lib/themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);
  const [name, setName] = useState("dark");

  const changeTheme = () => {
    name === "dark" ? setName("light") : setName("dark");;
  };

  useEffect(() => {
    setTheme(themes[name]);
  }, [name]);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
