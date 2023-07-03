import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("Theme"));
    if (localTheme) {
      setTheme(localTheme);
    } 
      // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //   setTheme("dark");
      //   localStorage.setItem("Theme", JSON.stringify("dark"));
      //   console.log(localTheme);
      // } else {
      //   setTheme("light");
      //   localStorage.setItem("Theme", JSON.stringify("dark"));
      // }
    
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", JSON.stringify(theme));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", JSON.stringify(theme));
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
