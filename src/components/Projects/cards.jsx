// import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Child from "../Animation/Child";

const Cards = ({ project }) => {
  const buttonVarient = {
    hover: { scale: 1.2 },
    click: { scale: 0.8 },
  };

  return (
    <>
      {project.map((item, index) => {
        return (
          <Child key={index}>
            <div className=" flex flex-col items-start w-full max-w-xl bg-white border rounded-lg shadow-md md:shadow-lg dark:shadow-black dark:border-gray-800 dark:bg-gray-800">
              {/* <div>
                <img
                  className=" rounded-lg"
                  src={item.img}
                  alt="todo"
                />
              </div> */}
              <div className=" px-5 pb-5">
                <h1 className=" my-2 text-2xl md:text-3xl text-teal-800 font-bold dark:text-teal-200">
                  {item.name}
                </h1>
                <p className=" mb-4 text-sm md:text-base text-teal-700 dark:text-teal-400">
                  {item.detail}
                </p>
                <p className="px-4 pt-2 md:pt-4">
                  {item.tags.map((item, index) => {
                    return (
                      <span
                        className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm text-gray-600 mr-2 mb-2 dark:bg-gray-600 dark:text-gray-200"
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  })}
                </p>
                {/* <hr className=" w-full h-0.5 mx-auto my-4 bg-teal-400 border-0 rounded md:my-6 dark:bg-yellow-400 " /> */}
                <div className=" flex w-full justify-between mt-4">
                  {item.demo ? (
                    <motion.a
                      target="blank"
                      href={item.demo}
                      // className=" inline-flex items-center md:text-base text-sm font-medium border-2 border-teal-400 text-teal-800 dark:border-gray-600 dark:text-yellow-400 px-5 py-2 rounded-full"
                      className=" items-center md:text-xl text-base font-bold text-teal-800 dark:border-gray-600 dark:text-teal-200"
                      variants={buttonVarient}
                      whileTap="click"
                    >
                      Live Demo
                      {/* <FiExternalLink className=" ml-1" /> */}
                    </motion.a>
                  ) : (
                    ""
                  )}

                  <motion.a
                    target="blank"
                    href={item.code}
                    className=" justify-self-end md:text-xl text-base font-bold text-teal-600 dark:border-gray-600 dark:text-teal-600 dark:hover:text-white"
                    variants={buttonVarient}
                    whileTap="click"
                  >
                    &#60; Code &#47;&#62;
                  </motion.a>
                </div>
              </div>
            </div>
          </Child>
        );
      })}
    </>
  );
};

export default Cards;
