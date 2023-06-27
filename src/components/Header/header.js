import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import {HiMenuAlt4} from 'react-icons/hi';
import{FaRegPaperPlane} from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import { CgWebsite } from "react-icons/cg";
import {AiOutlineClose} from 'react-icons/ai';

import Dark from './dark';
import { useState } from 'react';

 function Header() {
  const [navtoggle, setNavToggle] = useState(false);

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
      <nav className=" flex justify-between w-full ">
        <div className=" flex flex-col items-center backdrop-blur p-2 md:p-4 m-4 shadow-sm md:shadow dark:shadow-black shadow-white rounded-full">
          <button onClick={() => setNavToggle(!navtoggle)}>
            {navtoggle ? (
              <AiOutlineClose className=" text-2xl md:text-4xl" />
            ) : (
              <HiMenuAlt4 className=" text-2xl md:text-4xl" />
            )}
          </button>
          <Collapse isOpened={navtoggle}>
            <ul className="flex flex-col items-center">
              <a
                href="#about"
                onClick={handleClick("about")}
                className=" py-1.5 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-sm md:py-4 md:text-xl"
              >
                Me
              </a>
              <a
                href="#skills"
                onClick={handleClick("skills")}
                className=" py-1.5 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-sm md:py-4 md:text-xl"
              >
                &#60; &#47;&#62;
              </a>
              <a
                href="#projects"
                onClick={handleClick("projects")}
                className=" py-1.5 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-sm md:py-4 md:text-xl"
              >
                <CgWebsite />
              </a>
              <a
                href="#contact"
                onClick={handleClick("contact")}
                className=" py-1.5 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-sm md:py-4 md:text-xl"
              >
                <FaRegPaperPlane />
              </a>
            </ul>
          </Collapse>
        </div>
        <div
          className=" m-4 text-2xl items-center hover:bg-slate-400 p-2 md:p-4 rounded-full text-gray-600 md:text-4xl dark:text-white"
          onClick={Dark()}
        >
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Header;