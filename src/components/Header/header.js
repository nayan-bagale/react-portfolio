import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa";
import { Collapse } from "react-collapse";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import { useTheme } from "../ContexAPI/Theme";

import { useRef, useState, useEffect } from "react";

function useOutsideAlerter(ref, navtoggle, setNavToggle) {
  useEffect(() => {
    if (!navtoggle) return;
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // eslint-disable-next-line
        setNavToggle(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [navtoggle, ref]);
}

function Header() {
  const [navtoggle, setNavToggle] = useState(false);

  const { toggleTheme } = useTheme();

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

  const ref = useRef(null);

  useOutsideAlerter(ref, navtoggle, setNavToggle);

  return (
    <header className=" flex z-10 top-0 right-0 items-center justify-end fixed transition duration-300 ease-in-out dark:text-white">
      <nav className=" flex justify-end">
        <motion.div
          className=" flex flex-col items-center backdrop-blur p-2 py-3 md:py-4 md:p-4 m-4 shadow-sm md:shadow dark:shadow-black shadow-slate-100 rounded-full"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1.5, delay: 3 }}
          ref={ref}
        >
          <button onClick={() => setNavToggle((prev) => !prev)}>
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
              <hr className=" w-full my-2 dark:border-white border-black" />
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
