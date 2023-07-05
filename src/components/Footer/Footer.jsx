import { useTheme } from "../ContexAPI/Theme";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className=" relative p-10">
      <h3 className=" text-sm md:text-base dark:text-teal-200 flex justify-center font-medium m-auto md:w-4/5 w-11/12">
        {/* Copyright 2023 by Nayan Bagale ALL Rights Reserved. */}
        Made with {theme === "light" ? "🧡" : "🤍"} by Nayan Bagale
      </h3>
      {/* Top SVG */}
      <div className=" absolute left-0 w-full leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-svg h-[50px] md:h-[100px]"
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className=" fill-white/80 dark:fill-slate-800/80"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
