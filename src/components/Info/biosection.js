import Image from "../../images/profile-pic.jpg";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

export default function Biosection() {
  const bioVarient = {
    hidden: {
      y: -75,
      opacity: 0,
    },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className=" min-h-screen z-40 flex flex-col items-center justify-center md:flex-row-reverse lg:w-4/5 lg:m-auto md:pt-0 "
      id="about-section"
      variants={bioVarient}
      initial="hidden"
      animate="visible"
      transition={{ type: "tween", duration: 1.5, delay: 3 }}
    >
      <div className=" mx-auto border-4 dark:border-gray-600 border-emerald-400 p-2 rounded-full w-52 h-52 mt-10 overflow-hidden md:w-72 md:h-72">
        <img src={Image} alt="profile-pic" className=" rounded-full" />
      </div>

      <div className=" m-4 p-4 flex flex-col items-start text-left md:w-1/2 md:p-8 md:m-8 ">
        <h4 className=" dark:text-white text-2xl text-right inline-flex ">
          Hi,
          <motion.div
            animate={{ rotate: [-10, 0, -10] }}
            transition={{ repeat: 1, duration: 0.5, delay: 10 }}
          >
            👋
          </motion.div>
        </h4>
        <h1 className=" dark:text-white text-4xl md:text-5xl py-2 text-teal-600 font-medium">
          Nayan Bagale
        </h1>
        <h3 className=" dark:text-yellow-400 text-lg md:text-3xl py-2 text-gray-800">
          I'm a
          <TypeAnimation
            sequence={[` Full Stack Web Developer.`, 1000, ""]}
            repeat={Infinity}
          />
        </h3>
        <p className=" dark:text-gray-300 text-base py-3 md:text-xl md:py-5 leading-8 text-gray-700 lg:w-3/4 ">
          Developing web applications that are scalable, fast, reliable, easy to
          use and easy to maintain.
        </p>
        <a
          href="/#"
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-5 py-2 rounded-md"
        >
          Resume
        </a>
        <div className=" flex justify-evenly py-5 lg:w-[80%] w-full">
          <AiOutlineGithub className=" text-4xl text-gray-600 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 dark:text-white" />
          <FaLinkedinIn className=" text-4xl text-gray-600 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 dark:text-white" />
          <AiOutlineTwitter className=" text-4xl text-gray-600 cursor-pointer hover:text-slate-500 dark:hover:text-yellow-400 dark:text-white" />
        </div>
      </div>
    </motion.section>
  );
}
