import Header from './components/Header/header'
import Bio from './components/Info/biosection'
import Skills from './components/Skills/Skillsection'
import Projects from './components/Projects/projects';

import { motion } from 'framer-motion';
import Contactme from './components/contact-me/Contactme';
import Footer from './components/Footer/Footer';

function App() {
  // const Hr = () => {return(<hr class=" w-1/2 md:w-1/3 h-1 mx-auto my-4 bg-teal-600 border-0 rounded md:my-10 "/>)}

  return (
    <motion.div
      className=" dark:bg-gray-900"
    >
      <Header />
      <Bio />
      <Skills />
      <Projects />
      <Contactme />
      <Footer />

    </motion.div>
  );
}

// const dark = "bg-gradient-to-tl from-gray-700 via-gray-900 to-black";

export default App;
