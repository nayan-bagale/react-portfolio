import Image from "../../images/profile-pic3.jpg";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

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

  // const buttonVarient = {
  //   whileHover: { scale: 1.1 },
  //   whileTap: { scale: 0.9 },
  // };

  return (
    <motion.section
      className=" min-h-screen z-40 flex flex-col items-center justify-center md:flex-row-reverse lg:w-4/5 lg:m-auto md:pt-0 "
      id="about-section"
      variants={bioVarient}
      initial="hidden"
      animate="visible"
      transition={{ type: "tween", duration: 1, delay: 3 }}
    >
      <div className=" mx-auto md:my-auto border-4 dark:border-gray-600 border-emerald-400 p-2 rounded-full w-52 h-52 mt-10 overflow-hidden md:w-72 md:h-72">
        <img src={Image} alt="profile-pic" className=" rounded-full" />
      </div>

      <div className=" m-4 p-4 flex flex-col items-start text-left md:w-1/2 md:p-8 md:m-8 ">
        <div className=" dark:text-white text-teal-900 text-xl md:text-2xl text-right inline-flex ">
          Hi,{'        '}
          <motion.div
            animate={{ rotate: [0, -20, 0, -20, 0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3,
              delay: 1,
            }}
          >
             👋
          </motion.div>
        </div>
        <h1 className=" dark:text-white text-3xl md:text-5xl py-2 text-teal-700 font-semibold">
          I'm Nayan Bagale
        </h1>
        <h1 className=" dark:text-yellow-400 text-xl md:text-3xl text-gray-800">
          F
          <TypeAnimation
            sequence={[`ull Stack Engineer`, 1000, ""]}
            repeat={Infinity}
          />
        </h1>
        <p className=" dark:text-gray-300 text-base py-3 md:text-xl md:py-5 leading-8 text-gray-600 lg:w-3/4 ">
          {/* Developing web applications that are scalable, fast, reliable, easy to
          use and easy to maintain. */}
          Building scalable, fast, and reliable web applications that are easy
          to use and maintain with modern web technologies.
        </p>
        <motion.a
          href={process.env.REACT_APP_CV_LINK}
          target="blank_"
          rel="noreferrer"
          className=" text-white bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 hover:from-teal-500 hover:to-cyan-500 transition-all duration-200 font-medium px-4 py-2 rounded-full flex items-center text-2xl "
          // variants={buttonVarient}
          // whileHover="whileHover"
          // whileTap="whileTap"
        >
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <MdKeyboardDoubleArrowDown className="text-3xl" />
          </motion.div>
          CV
        </motion.a>
        <div className=" flex justify-evenly py-5 lg:w-[80%] w-full">
          <motion.a
            href="https://github.com/nayan-bagale"
            target="blank"
            rel="noreferrer"
            // variants={buttonVarient}
            // whileHover="whileHover"
            // whileTap="whileTap"
          >
            <AiOutlineGithub className=" text-4xl text-gray-600 cursor-pointer  md:hover:text-slate-500 md:dark:hover:text-yellow-400 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/nayan-bagale/"
            target="blank"
            rel="noreferrer"
            // variants={buttonVarient}
            // whileHover="whileHover"
            // whileTap="whileTap"
          >
            <SiLeetcode className=" text-4xl text-gray-600 cursor-pointer  md:hover:text-slate-500 md:dark:hover:text-yellow-400 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nayan-bagale"
            target="blank"
            rel="noreferrer"
            // variants={buttonVarient}
            // whileHover="whileHover"
            // whileTap="whileTap"
          >
            <FaLinkedinIn className=" text-4xl text-gray-600 cursor-pointer  md:hover:text-slate-500 md:dark:hover:text-yellow-400 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://twitter.com/nayan_bagale"
            target="blank"
            rel="noreferrer"
            // variants={buttonVarient}
            // whileHover="whileHover"
            // whileTap="whileTap"
          >
            <AiOutlineTwitter className=" text-4xl text-gray-600 cursor-pointer  md:hover:text-slate-500 md:dark:hover:text-yellow-400 dark:text-white" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
