import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Child from "../Animation/Child";

const Cards = ({ project }) => {

  const buttonVarient = {
    hover: { scale: 1.2 },
    click: { scale: 0.8},
  };

  return (
    <>
      {project.map((item, index) => {
        return (
          <Child>
            <div
              key={index}
              className=" flex flex-col items-start w-full max-w-xl px-8 py-8 bg-white border rounded-lg shadow-md md:shadow-lg dark:shadow-black dark:border-gray-800 dark:bg-gray-800"
            >
              <h1 className=" mb-2 text-2xl md:text-3xl text-teal-800 font-bold dark:text-teal-200">
                {item.name}
              </h1>
              <p className=" mb-4 text-sm md:text-base text-teal-700 dark:text-teal-400">
                {item.detail}
              </p>
              <p className="px-4 pt-2 md:pt-4">
                {item.tags.map((item, index) => {
                  return (
                    <span
                      className=" inline-block bg-gray-200  rounded-full px-3 py-1 text-xs md:text-sm text-gray-600 mr-2 mb-2 dark:bg-gray-600 dark:text-gray-200"
                      key={index}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
              <hr className=" w-full h-0.5 mx-auto my-4 bg-teal-400 border-0 rounded md:my-6 dark:bg-yellow-400 " />
              <div className=" flex justify-evenly w-full">
                {item.demo ? (
                  <motion.a
                    target="blank"
                    href={item.demo}
                    className=" inline-flex items-center md:text-base text-sm font-medium border-2 border-teal-400 text-teal-800 dark:border-gray-600 dark:text-yellow-400 px-5 py-2 rounded-full"
                    variants={buttonVarient}
                    whileTap="click"
                  >
                    Demo
                    <FiExternalLink className=" ml-1" />
                  </motion.a>
                ) : (
                  ""
                )}

                <motion.a
                  target="blank"
                  href={item.code}
                  className=" md:text-base text-sm font-medium border-2 border-teal-400 text-teal-800 dark:border-gray-600 dark:text-yellow-400 px-5 py-2 rounded-full"
                  variants={buttonVarient}
                  whileTap="click"
                >
                  &#60; Code &#47;&#62;
                </motion.a>
              </div>
            </div>
          </Child>
        );
      })}
    </>
  );
};

export default Cards;
