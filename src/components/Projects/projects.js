import Cards from './cards'
import { motion } from 'framer-motion';

const projects_info = [
  {
    name: "ToDo List",
    demo: "https://todo-nayanbagale.onrender.com/",
    code: "https://github.com/nayan-bagale/ToDo",
    detail:
      "A simple ToDo responsive website that lets users add their tasks, mark them as completed, and can delete tasks, It also has user token-based authentication to sync their ToDo's.",
    tags: ["JQuery", "HTML5", "CSS3", "Node.js", "MongoDB"],
  },
  {
    name: "Hotel Management System",
    demo: null,
    code: "https://github.com/nayan-bagale/Hotel-Management-System-MySQL",
    detail: "",
    tags: ["MySQL", "Express.js", "Node.js", "JQuery", "HTML5", "CSS3"],
  },
  {
    name: "FitGirl",
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
    demo: "https://moviex-nayan-bagale.netlify.app/",
    code: "https://github.com/nayan-bagale/movie-x",
    detail:
      "Movie-X is a website that let users search, for what movie they want to see and the information about the movie like story, actors, director, and genre. Also, user can see the rating.",
    tags: ["React.js", "Tailwind CSS"],
  },
];

const Projects = () => {

  const projectVarient = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, when: "beforeChildren" },
    viewport: { amount: 0.1 },
  };

    return (
      <motion.section
        className=" min-h-screen flex flex-col md:w-4/5 w-11/12 m-auto items-center"
        id="projects-section"
        variants={projectVarient}
        initial='hidden'
        whileInView='visible'
        transition='transition'
        viewport='viewport'
      >
        <div className=" text-3xl md:text-4xl p-4 my-4 self-start">
          <h1 className=" pb-4 text-teal-800 dark:text-white">Projects</h1>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>
        <div className=" w-[90%] md:w-full space-y-8 grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-baseline md:items-center">
          <Cards project={projects_info} />
        </div>
      </motion.section>
    );
}

export default Projects;