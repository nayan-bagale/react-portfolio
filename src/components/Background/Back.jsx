import { motion } from "framer-motion"
import { useTheme } from "../ContexAPI/Theme";

function Back() {
    const { theme } = useTheme();

    let background = theme === 'light' ? 'background-light' : "background-dark";
  return (
    <>
      <div className={` ${background} -z-50 h-screen w-full fixed top-0`}></div>

      <motion.div //Reactangle
        className=" -z-40 flex rounded-[3rem] right-24 top-24 fixed h-80 w-[30rem] bg-emerald-400 dark:bg-gradient-to-b dark:to-gray-500 dark:from-gray-700 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50 }}
      ></motion.div>

      <motion.div //Square
        className=" -z-30 flex rounded-2xl max-sm:hidden md:left-80 lg:left-[35rem] top-40 fixed h-64 w-64 bg-emerald-400 dark:bg-gradient-to-b dark:to-gray-500 dark:from-gray-700 opacity-50"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 120 }}
      ></motion.div>

      <motion.div //Big Circle
        className=" -z-30 flex rounded-full max-sm:bottom-[10%] max-sm:left-20 left-10 bottom-[30%] fixed h-80 w-80 bg-emerald-400 dark:bg-gray-700 opacity-50"
        animate={{ x: [0, 50, 50, 0, 0], y: [0, 0, -50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 50 }}
      ></motion.div>

      <motion.div //Small Circle
        className=" -z-30 flex rounded-full max-sm:hidden right-[40%] bottom-10 fixed h-44 w-44 bg-emerald-400 dark:bg-gray-800 opacity-30"
        animate={{ x: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 50 }}
      ></motion.div>
    </>
  );
}

export default Back