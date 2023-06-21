import Cards from './cards'

const Projects = () => {
    return (
      <section
        className=" min-h-screen flex flex-col items-center justify-center md:w-4/5 w-11/12 m-auto"
        id="projects-section"
      >
        <div className="text-4xl p-4 my-4 self-start">
          <h1 className=" pb-1 text-teal-600">Projects</h1>
          <div className=" border-b-2 w-full border-teal-700"></div>
        </div>
        <div className=" flex flex-wrap items-center justify-center">
          <Cards />
        </div>
      </section>
    );
}

export default Projects;