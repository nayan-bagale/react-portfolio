import Header from './components/header'
import Bio from './components/biosection'
import Skills from './components/skills'

function App() {
  return (
    <>
      <Header/>
      <Bio/>
      <Skills/>
    </>
  );
}

const dark = "bg-gradient-to-tl from-gray-700 via-gray-900 to-black";

export default App;
