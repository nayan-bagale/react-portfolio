import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa";
import { Collapse } from "react-collapse";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import {useTheme} from "../ContexAPI/Theme";

import { useState } from "react";

function Header() {
  const [navtoggle, setNavToggle] = useState(false);

  const {toggleTheme} = useTheme();

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
      <nav className=" flex justify-end w-full ">
        <motion.div
          className=" flex flex-col items-center backdrop-blur p-2 md:p-4 m-4 shadow-sm md:shadow dark:shadow-black shadow-white rounded-full"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 3 }}
        >
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
                className=" py-2 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-base md:py-4 md:text-xl"
              >
                Me
              </a>
              <a
                href="#skills"
                onClick={handleClick("skills")}
                className=" py-2 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-base md:py-4 md:text-xl"
              >
                &#60; &#47;&#62;
              </a>
              <a
                href="#projects"
                onClick={handleClick("projects")}
                className=" py-2 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:py-4 md:text-2xl"
              >
                <CgWebsite />
              </a>
              <a
                href="#contact"
                onClick={handleClick("contact")}
                className=" py-2 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:py-4 md:text-2xl"
              >
                <FaRegPaperPlane />
              </a>
              <div
                className=" py-2 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:py-4 md:text-2xl"
                onClick={toggleTheme}
              >
                <BsFillMoonStarsFill className=" cursor-pointer" />
              </div>
            </ul>
          </Collapse>
        </motion.div>
        {/* <motion.div
          className=" right-4 absolute m-4 text-2xl items-center bg-slate-400 p-2 md:p-4 rounded-full text-gray-600 md:text-4xl dark:text-white"
          onClick={Theme()}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 3 }}
        >
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </motion.div> */}
      </nav>
    </header>
  );
}

export default Header;
