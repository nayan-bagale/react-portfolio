import React from "react";
import { motion } from "framer-motion";

export default function loading() {
  return (
    <motion.div
      className=" z-20 fixed flex items-center justify-center bg-white dark:bg-gray-900 min-h-screen w-full"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transitionEnd: { display: "none" },
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 3,
      }}
    >
      <motion.div
        className=" relative h-16 dark:text-white text-4xl text-teal-600 overflow-hidden"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -75, opacity: 0 }}
        transition={{ type: "tween", duration: 1, delay: 1 }}
      >
        Welcome
        <motion.div
          className=" bottom-[1rem] border w-full absolute border-teal-800 dark:border-yellow-400"
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
