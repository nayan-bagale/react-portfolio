import Cards from './cards'

const projects_info = [
  {
    name: "ToDo List",
    img: require("../../images/todo.jpeg"),
    demo: "https://todo-nayanbagale.onrender.com/",
    code: "https://github.com/nayan-bagale/ToDo",
    detail:
      "A simple ToDo responsive website that lets users add their tasks, mark them as completed, and can delete tasks, It also has user token-based authentication to sync their ToDo's.",
    tags: ["JQuery", "HTML5", "CSS3", "Node.js", "MongoDB"],
  },
  {
    name: "Hotel Management System",
    img: require('../../images/hotel.jpeg'),
    demo: null,
    code: "https://github.com/nayan-bagale/Hotel-Management-System-MySQL",
    detail: "",
    tags: ["MySQL", "Express.js", "Node.js", "JQuery", "HTML5", "CSS3"],
  },
  {
    name: "FitGirl",
    img: require('../../images/fitgirl.jpeg'),
    demo: "https://nayan-bagale.github.io/Fitgirl-Scraper/",
    code: "https://github.com/nayan-bagale/Fitgirl-Scraper",
    detail: "",
    tags: [
      "Cheerio",
      "CORS",
      "Node.js",
      "Express.js",
      "JQuery",
      "HTML5",
      "TailwindCSS",
    ],
  },
  {
    name: "Movie-X",
    img: require('../../images/movie-x.jpeg'),
    demo: "https://moviex-nayan-bagale.netlify.app/",
    code: "https://github.com/nayan-bagale/movie-x",
    detail:
      "Movie-X is a website that let users search, for what movie they want to see and the information about the movie like story, actors, director, and genre. Also, user can see the rating.",
    tags: ["React.js", "Tailwind CSS"],
  },
];

const Projects = () => {

    return (
      <section
        className=" min-h-screen flex flex-col md:w-4/5 w-11/12 m-auto items-center my-20"
        id="projects-section"
      >
        <div className=" text-3xl md:text-4xl p-4 my-4 self-start">
          <h1 className=" pb-4 text-teal-800 dark:text-white">Projects</h1>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>
        <div className=" w-[90%] md:w-full space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center lg:items-baseline items-center">
          <Cards project={projects_info} />
        </div>
      </section>
    );
}

export default Projects;