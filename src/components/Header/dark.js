import { useEffect, useState } from "react"

const Dark = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[theme]);

    return () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

}

export default Dark;