import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Quote = ({ quote }) => {
  return (
    <AnimatePresence key={quote.author}>
      <motion.div
        initial={{
          y: 75,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
        className=" flex flex-col text-2xl md:text-3xl lg:text-4xl p-4 mt-4 self-start"
      >
        <p className=" italic text-teal-800 dark:text-white">
          <span className=" text-4xl md:text-5xl text-teal-800 dark:text-yellow-400 ">
            &ldquo;
          </span>{" "}
          {quote.quote}{" "}
          <span className=" text-4xl md:text-5xl text-teal-800 dark:text-yellow-400 ">
            &rdquo;
          </span>
        </p>
        <div className=" flex gap-2 self-end">
          <p className=" italic text-teal-800 dark:text-white">&ndash; </p>
          <p className=" text-xl md:text-2xl lg:text-3xl text-teal-700 italic dark:text-yellow-400">
            {quote.author}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Quote;
