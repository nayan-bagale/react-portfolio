import { useRef, useEffect } from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';

import Dark from './dark';

 function Header() {

  // const headerRef = useRef(null);
  // useEffect(() => {
  //   let prevScrollPos = window.scrollY;
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const headerElement = headerRef.current;
  //     if (!headerElement) {
  //       return;
  //     }
  //     if (prevScrollPos > currentScrollPos) {
  //       headerElement.style.transform = "translateY(0)";
  //     } else {
  //       headerElement.style.transform = "translateY(-200px)";
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className=" flex z-10 top-0 items-center justify-center fixed w-full transition duration-300 ease-in-out dark:text-white">
      <nav className=" flex justify-center back w-fit ">
        <ul className=" flex items-stretch backdrop-blur py-4 mt-4 shadow-sm md:shadow dark:shadow-black shadow-white rounded-full">
          <a
            href="#about"
            onClick={handleClick("about")}
            className=" px-1.5 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 md:px-4 md:text-xl"
          >
            Me
          </a>
          <a
            href="#skills"
            onClick={handleClick("skills")}
            className=" px-1.5 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 md:px-4 md:text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={handleClick("projects")}
            className=" px-1.5 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 md:px-4 md:text-xl"
          >
            Projects
          </a>
        </ul>
        <div
          className=" absolute right-0 top-0 md:m-8 text-2xl hover:bg-slate-400 p-2 rounded-full text-gray-600 md:text-4xl dark:text-white"
          onClick={Dark()}
        >
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Header;