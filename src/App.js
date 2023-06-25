import Header from './components/Header/header'
import Bio from './components/Info/biosection'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects';

import Scroll from './components/Scroll/scroll';

function App() {
  // const Hr = () => {return(<hr class=" w-1/2 md:w-1/3 h-1 mx-auto my-4 bg-teal-600 border-0 rounded md:my-10 "/>)}
  return (
    <div className=" dark:bg-gray-900">
      <Header />
      {/* <Scroll/> */}
      <Bio />
      <Skills />
      <Projects />
    </div>
  );
}

// const dark = "bg-gradient-to-tl from-gray-700 via-gray-900 to-black";

export default App;
