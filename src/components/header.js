import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function header() {
  return (
    <header className=" z-10 top-0 fixed w-full backdrop-blur">
      <nav className="py-8  flex justify-between">
        <div className=" text-3xl flex justify-center gap-16 px-3 text-gray-600 md:text-5xl md:px-8">
          <AiFillGithub />
        </div>
        <ul className=" flex items-stretch">
          <li className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            About
          </li>
          <li className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Skills
          </li>
          <li className=" px-1.5 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Projects
          </li>
          <li className=" px-2 cursor-pointer hover:text-slate-500 md:px-4 md:text-xl">
            Blogs
          </li>
        </ul>
        <div className=" text-2xl flex justify-center gap-16 px-3 text-gray-600 md:text-4xl md:px-8">
          <BsFillMoonStarsFill className=" cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
