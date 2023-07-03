import { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineUp } from "react-icons/ai";
import { motion } from "framer-motion";
import Child from "../Animation/Child";

export default function Profient({ array }) {
  const [collapsetoggle, setCollapsetoggle] = useState(null);

  const handleClick = (index) => {
    if (index === collapsetoggle) {
      setCollapsetoggle(() => null);
      return;
    }
    setCollapsetoggle(() => index);
    console.log(collapsetoggle)
  };

  // const proVarient = {
  //   hidden: {
  //     y: 100,
  //     opacity: 0,
  //   },
  //   visible: { y: 0, opacity: 1 },
  //   transition: { type: "spring", stiffness: 20 },
  // };

  return (
    <>
      {array.map(({ title, skills }, index) => {
        return (
          <div
            key={index}
            className=" flex flex-col w-4/5 my-4 md:w-2/3 md:my-6"
            // variants={proVarient}
            // initial="hidden"
            // whileInView="visible"
            // transition="transition"
            // viewport={{once: true}}
          >
            <Child>
              <div
                className=" flex items-center justify-between text-teal-800 cursor-pointer relative dark:text-teal-200"
                onClick={() => handleClick(index)}
              >
                <h1 className=" text-2xl md:text-3xl">{title}</h1>
                <motion.div 
                whileInView={ collapsetoggle !== index ? {y:[0,5,0,5,0]} : {y:[0]}}
                transition={{duration: 5, repeat:Infinity, ease: 'linear'}}
                >
                  {collapsetoggle === index ? (
                    <AiOutlineUp className=" text-2xl md:text-3xl text-teal-800 dark:text-teal-200 transition duration-200 ease-in-out " />
                  ) : (
                    <AiOutlineUp className=" text-2xl md:text-3xl text-teal-800 dark:text-teal-200 scale-y-[-1] transition duration-200 ease-in-out" />
                  )}
                </motion.div>
                <div className=" bottom-[-0.75rem] border w-full absolute dark:border-yellow-400"></div>
              </div>
              <Collapse isOpened={collapsetoggle === index}>
                <p className=" text-md md:text-xl py-6 text-teal-600 dark:text-teal-400">
                  {skills}
                </p>
              </Collapse>
            </Child>
          </div>
        );
      })}
    </>
  );
}
