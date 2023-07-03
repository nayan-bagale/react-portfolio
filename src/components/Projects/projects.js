import Child from "../Animation/Child";
import Cards from "./cards";

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
    img: require("../../images/hotel.jpeg"),
    demo: null,
    code: "https://github.com/nayan-bagale/Hotel-Management-System-MySQL",
    detail: "",
    tags: ["MySQL", "Express.js", "Node.js", "JQuery", "HTML5", "CSS3"],
  },
  {
    name: "FitGirl",
    img: require("../../images/fitgirl.jpeg"),
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
    img: require("../../images/movie-x.jpeg"),
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
      className=" relative bg-white/80 dark:bg-slate-800/80 min-h-screen flex flex-col w-full items-center my-20 pb-10"
      id="projects-section"
    >
      {/* Top SVG */}
      <div class=" absolute top-[-3.12rem] md:top-[-6.25rem] left-0 w-full leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-svg h-[50px] md:h-[100px]"
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className=" fill-white/80 dark:fill-slate-800/80"
          ></path>
        </svg>
      </div>

      {/* Bottom SVG */}
      <div class="absolute bottom-[-3.12rem] md:bottom-[-6rem] left-0 w-full leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="fill-white/80 dark:fill-slate-800/80"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="fill-white/80 dark:fill-slate-800/80"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="fill-white/80 dark:fill-slate-800/80"
          ></path>
        </svg>
      </div>
      <div className=" md:w-4/5 w-11/12 m-auto flex flex-col items-center">
        <div className=" text-3xl md:text-4xl p-4 mt-4 self-start">
          <h1 className=" pb-4 text-teal-800 dark:text-white">Projects</h1>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>

        <Child>
          <div className=" relative rounded my-0 md:w-2/3 md:my-6 p-4 mb-4 m-auto">
            <p className=" dark:text-gray-300 text-lg text-justify py-3 md:text-2xl md:py-5 leading-6 md:leading-8 text-gray-700">
              Learning by doing things is the best way to grasp concepts so
              whenever I learn something I try to build an app to understand its
              importance and how things have to be configured. Here are some of
              the personal projects I have worked on in the past
            </p>
            {/* <div className=" bg-slate-800 opacity-80 rounded-lg w-full h-[100%] absolute top-0 left-0 -z-10 shadow-lg"></div> */}
          </div>
        </Child>
        <div className="  w-[90%] md:w-full space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center lg:items-baseline items-center">
          <Cards project={projects_info} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
