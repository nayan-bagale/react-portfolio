// import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Child from "../Animation/Child";
import { LuArrowUpRight } from "react-icons/lu";
const Cards = ({ project }) => {
  // const buttonVarient = {
  //   hover: { scale: 1.2 },
  //   click: { scale: 0.8 },
  // };

  return (
    <>
      {project.map((item, index) => {
        return (
          <Child key={index}>
            <a
              target={item.demo ? "blank" : "_self"}
              href={item.demo || `#${item.name}`}
              id={item.name}
              className=" relative  overflow-hidden rounded-3xl flex flex-col items-start w-full max-w-xl bg-emerald-200 border shadow-lg border-none dark:bg-gray-900"
            >
              {/* <div>
                <img
                  className=" rounded-lg"
                  src={item.img}
                  alt="todo"
                />
              </div> */}
              {item.code && (
                <a
                  target="blank"
                  href={item.code}
                  // variants={buttonVarient}
                  // whileTap="click"
                  className=" absolute top-[0.7rem] -right-[2.4rem] p-1 px-14 rotate-45 dark:from-yellow-400 dark:to-yellow-600 from-teal-600 to-teal-500 bg-gradient-to-b font-bold text-white dark:text-teal-800"
                >
                  &#60; &#47;&#62;
                </a>
              )}
              <div className=" px-5 py-5">
                <h3 className=" my-2 text-2xl inline-flex gap-1 md:text-3xl text-teal-800 font-bold dark:text-teal-200">
                  {item.name}
                  <motion.span
                    animate={{ x: [0, 4, 0, 4, 0], y: [0, -4, 0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className=" text-xl md:text-2xl dark:text-yellow-400 text-teal-800"
                  >
                    <LuArrowUpRight />
                  </motion.span>
                </h3>
                <p className=" mb-4 text-xs md:text-base text-teal-700 dark:text-teal-400">
                  {item.detail}
                </p>
                <div className="md:px-4 pt-2 md:pt-4">
                  {item.tags.map((item, index) => {
                    return (
                      <span
                        className=" inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs md:text-sm text-gray-600 mr-2 mb-2 dark:bg-gray-800 dark:text-gray-200"
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                {/* <hr className=" w-full h-0.5 mx-auto my-4 bg-teal-400 border-0 rounded md:my-6 dark:bg-yellow-400 " /> */}
                {/* <div className=" flex w-full justify-between mt-4">
                  {item.demo && (
                    <motion.a
                      target="blank"
                      href={item.demo}
                      // className=" inline-flex items-center md:text-base text-sm font-medium border-2 border-teal-400 text-teal-800 dark:border-gray-600 dark:text-yellow-400 px-5 py-2 rounded-full"
                      className=" items-center md:text-xl text-base font-bold text-teal-800 dark:border-gray-600 dark:text-teal-200"
                      variants={buttonVarient}
                      whileTap="click"
                    >
                      Live Demo
                    </motion.a>
                  )}

                  {item.code && (
                    <motion.a
                      target="blank"
                      href={item.code}
                      className=" justify-self-end md:text-xl text-base font-bold text-teal-600 dark:border-gray-600 dark:text-teal-600 dark:hover:text-white"
                      variants={buttonVarient}
                      whileTap="click"
                    >
                      &#60; Code &#47;&#62;
                    </motion.a>
                  )}
                </div> */}
              </div>
            </a>
          </Child>
        );
      })}
    </>
  );
};

export default Cards;
