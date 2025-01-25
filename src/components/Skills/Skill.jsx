import { motion } from "framer-motion";
import Child from "../Animation/Child";

export default function Skill({ array }) {
  return array.map(({ title, progress }, index) => {
    const skillsVarient = {
      hidden: {
        y: 100,
        opacity: 0,
      },
      visible: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 20 },
      viewport: { once: true },
    };

    const progressBarVarient = {
      ...skillsVarient,
      hidden: {
        width: 0,
      },
      visible: {
        width: progress,
      },
    };

    return (
      <div
        className="flex flex-col w-4/5 my-1 md:w-2/3 md:my-2"
        key={index}
        // variants={skillsVarient}
        // initial="hidden"
        // whileInView="visible"
        // transition="transition"
      >
        <Child>
        <h3 className=" text-xl md:text-3xl my-2 md:my-4 text-teal-800 dark:text-teal-200">
          {title}
        </h3>
        <div className=" bg-slate-300 rounded-full h-0.5 mb-2 md:mb-4">
          <motion.div
            className=" bg-teal-800 h-0.5 rounded-full relative dark:bg-yellow-400"
            style={{ width: progress }}
            variants={progressBarVarient}
            initial="hidden"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 20 }}
            viewport={{ once: true }}
          >
            <div className=" text-sm md:text-base absolute rounded p-1 px-2 text-white top-[-2.20rem] right-[-1.3rem]  md:top-[-2.5rem] bg-slate-800">
              {progress}
            </div>
            <div className=" absolute  p-1 bg-slate-800  right-[-0.2rem] top-[-0.75rem] rotate-45"></div>
          </motion.div>
        </div>
        </Child>
      </div>
    );
  });
}
