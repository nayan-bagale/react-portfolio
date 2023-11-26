import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrBlockQuote } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

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
    let block = "center";
    if (anchor === "projects") {
      block = "start";
    }
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: block,
      });
    }
  };

  const ref = useRef(null);

  useOutsideAlerter(ref, navtoggle, setNavToggle);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className=" flex z-10 w-full items-center justify-center fixed transition duration-300 ease-in-out dark:text-white">
      <AnimatePresence>
        {show && (
          <nav className="flex ">
            <motion.div
              className=" flex items-center backdrop-blur p-2 py-2 md:py-2 md:p-4 m-4 shadow-sm md:shadow dark:shadow-black shadow-slate-100 rounded-full"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ type: "tween", duration: 0.5 }}
              ref={ref}
            >
              <ul className="flex gap-2 items-center">
                <a
                  href="#about"
                  onClick={handleClick("about")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-base  md:text-xl"
                >
                  Me
                </a>
                <a
                  href="#experience"
                  onClick={handleClick("experience")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-xl md:text-2xl"
                >
                  ex
                </a>

                <a
                  href="#skills"
                  onClick={handleClick("skills")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-base md:text-xl"
                >
                  &#60;&#47;&#62;
                </a>
                <a
                  href="#projects"
                  onClick={handleClick("projects")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:text-2xl"
                >
                  <IoIosApps />
                </a>
                <a
                  href="#quotes"
                  onClick={handleClick("quotes")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:text-2xl"
                >
                  <GrBlockQuote />
                </a>
                <a
                  href="#blogs"
                  onClick={handleClick("blogs")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:text-2xl"
                >
                  <CgWebsite />
                </a>
                <a
                  href="#contact"
                  onClick={handleClick("contact")}
                  className=" py-0 px-1 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:text-2xl"
                >
                  <FaRegPaperPlane />
                </a>
              </ul>
            </motion.div>
          </nav>
        )}
      </AnimatePresence>

      <div className="flex absolute backdrop-blur pl-1 w-12 md:w-16 bottom-0 -right-4 items-center justify-start shadow-sm md:shadow dark:shadow-black shadow-slate-100 rounded-full">
        <div
          className=" flex items-center justify-center cursor-pointer p-2 hover:text-slate-500 dark:hover:text-yellow-400 text-lg md:text-2xl"
          onClick={toggleTheme}
        >
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
