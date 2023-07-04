import { useTheme } from "../ContexAPI/Theme";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className=" flex m-auto justify-center md:w-4/5 w-11/12 p-10">
      <h3 className=" text-sm md:text-base dark:text-teal-200 font-medium">
        {/* Copyright 2023 by Nayan Bagale ALL Rights Reserved. */}
        Made with { theme === 'light' ? '🧡' : '🤍'} by Nayan Bagale
      </h3>
    </footer>
  );
}
