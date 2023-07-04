import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") ? localStorage.getItem("Theme") : 'light');

  useEffect(() => {
    console.log(theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
