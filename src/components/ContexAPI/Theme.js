import { useEffect, useState } from "react";

const Dark = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark') ;
    }else{
      setTheme('light');
    }
  }, []);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
};

export default Dark;
