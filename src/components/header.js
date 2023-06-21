import { useRef, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from 'react-icons/bs';

 function Header() {

  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const mobilNav = () => {
    return
  }

  return (
    <header className=" z-10 top-0 fixed w-full backdrop-blur translate-y-0 transition duration-300 ease-in-out" ref={headerRef}>
      <nav className="py-8  flex justify-between items-center">
        <div className=" text-3xl flex justify-center gap-16 px-3 text-gray-600 md:text-5xl md:px-8">
          <AiFillGithub />
        </div>
        <ul className=" flex items-stretch">
          <a href="#about" onClick={handleClick('about')} className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            About
          </a>
          <a href="#skills" onClick={handleClick('skills')} className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Skills
          </a>
          <a href="#projects" onClick={handleClick('projects')} className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Projects
          </a>
          <a href="#blogs" onClick={handleClick('blogs')} className=" px-2 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Blogs
          </a>
        </ul>
        <div className=" text-2xl flex justify-center gap-16 px-3 text-gray-600 md:text-4xl md:px-8">
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Header;