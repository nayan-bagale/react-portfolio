import Header from './components/header'
import Bio from './components/biosection'
import Skills from './components/skills'
import Projects from './components/projects';


function App() {
  const Hr = () => {return(<hr class=" w-1/2 md:w-1/3 h-1 mx-auto my-4 bg-teal-600 border-0 rounded md:my-10 "/>)}
  return (
    <>
      <Header />
      <Bio />
      <Skills />
      <Projects />
    </>
  );
}

// const dark = "bg-gradient-to-tl from-gray-700 via-gray-900 to-black";

export default App;
