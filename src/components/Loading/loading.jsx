import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function loading() {
  return (
    <AnimatePresence>
      {
        <motion.div
          className=" z-20 fixed grid place-items-center bg-white dark:bg-gray-900 min-h-screen w-full"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: { display: "none" },
          }}
          transition={{
            type: "tween",
            duration: 2.5,
            delay: 3,
          }}
        >
          <motion.div
            className=" relative dark:text-white text-4xl text-teal-600"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -75, opacity: 0 }}
            transition={{ type: "tween", duration: 1, delay: 1 }}
          >
            Nayan
            <motion.div
              className=" bottom-[-0.75rem] border w-full absolute border-teal-800 dark:border-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "tween", duration: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}
