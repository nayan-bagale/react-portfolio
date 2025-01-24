import Child from "../Animation/Child";
import Cards from "./cards";

const projects_info = [
  {
    name: "ModernUi",
    // img: require("../../images/todo.jpeg"),
    demo: "https://modernui.nayanbagale.me/",
    detail:
      " ModernUI is a UI component library built with Next.js, Tailwind CSS, Framer Motion, and TypeScript. It offers modern, animated components that look great and are easy to use. Developers can quickly copy and paste the code to add these components to their projects, saving time and effort while creating sleek, professional designs.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Nex-Ed",
    // img: require("../../images/todo.jpeg"),
    demo: "https://nex-ed-web.vercel.app/",
    code: "https://github.com/nayan-bagale/nex-cloud",
    detail:
      "NexEd is an advanced virtual classroom platform 👨🏻‍🏫 that enhances online education with real-time communication, automated attendance tracking, and comprehensive analytics 📈. Leveraging Next.js, PostgreSQL, and WebRTC, it supports live video classes and seamless resource 📚 sharing for an interactive learning experience.",
    tags: [
      "Nextjs",
      "PostgreSQL",
      "WebRTC",
      "SocketIO",
      "Tailwind CSS",
      "TypeScript",
      "EdgeStore",
      "MonoRepo",
    ],
  },
  {
    name: "Quizy",
    // img: require("../../images/todo.jpeg"),
    demo: "https://react-quiz-app-nayan-orcin.vercel.app/",
    code: "https://github.com/nayan-bagale/Quizy-React-App",
    detail:
      "Create, share, and track your quizzes effortlessly, quiz creators receive instant notifications with their name and scores, all powered by Firebase's 🔑 OAuth with Google, 📊 Firestore, and 📬 Cloud Messaging.📚🎉",
    tags: [
      "Firebase",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "CORS",
    ],
  },
  {
    name: "ToDo List",
    // img: require("../../images/todo.jpeg"),
    demo: "https://todo-nayanbagale.onrender.com/",
    code: "https://github.com/nayan-bagale/ToDo",
    detail:
      "A simple ToDo responsive webapp 📝 that lets users add ➕ their tasks, mark them as completed ✔️, and can delete 🗑️ tasks, It also has user token-based authentication to sync their ToDo's.",
    tags: ["JQuery", "HTML5", "CSS3", "Node.js", "MongoDB"],
  },

  {
    name: "Movie-X",
    // img: require("../../images/movie-x.jpeg"),
    demo: "https://moviex-nayan-bagale.netlify.app/",
    code: "https://github.com/nayan-bagale/movie-x",
    detail:
      "Movie-X 🎞️ is a website that let users search🔎 , for what movie they want to see and the information about the movie like story, actors, director, and genre. Also, user can see the rating⭐.",
    tags: ["React.js", "Tailwind CSS"],
  },
  // {
  //   name: "FitGirl",
  //   // img: require("../../images/fitgirl.jpeg"),
  //   demo: "https://nayan-bagale.github.io/Fitgirl-Scraper/",
  //   code: "https://github.com/nayan-bagale/Fitgirl-Scraper",
  //   detail: `FitGirl is a clone of fitgirl-repacks.site where new recently cracked games 🎮 are available, Users can search 🔎 game's title and filter it by genre, each game card has a link to the fitgirl download page.`,
  //   tags: [
  //     "Cheerio",
  //     "CORS",
  //     "Node.js",
  //     "Express.js",
  //     "JQuery",
  //     "HTML5",
  //     "TailwindCSS",
  //   ],
  // },
  {
    name: "HMS",
    // img: require("../../images/hotel.jpeg"),
    demo: null,
    code: "https://github.com/nayan-bagale/Hotel-Management-System-MySQL",
    detail:
      "Hotel Management System 🏨 web app lets hotel staff to manage overall hotels system. Staff can book 🛎️ or reserve the room 🛏️, also it shows which room is available their checkIn checkOut time.",
    tags: ["MySQL", "Express.js", "Node.js", "JQuery", "HTML5", "CSS3"],
  },
];

const Projects = () => {
  return (
    <section
      className=" relative bg-white/80 dark:bg-slate-800/80 min-h-screen flex flex-col w-full items-center my-20 pb-10"
      id="projects-section"
    >
      {/* Top SVG */}
      <div className=" absolute top-[-3.12rem] md:top-[-6.25rem] left-0 w-full leading-none rotate-180">
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
      <div className="absolute bottom-[-3.12rem] md:bottom-[-6.25rem] left-0 w-full leading-none rotate-180">
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white/80 dark:fill-slate-800/80"
          ></path>
        </svg>
      </div>

      <div className=" md:w-4/5 w-11/12 m-auto flex flex-col items-center">
        <div className=" text-3xl md:text-4xl p-4 mt-4 self-start">
          <h2 className=" pb-4 text-teal-800 dark:text-white">Projects</h2>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>

        <Child>
          <div className=" relative rounded my-0 md:w-2/3 md:my-6 p-4 mb-4 m-auto">
            <p className=" dark:text-gray-300 text-base py-3 md:text-2xl md:py-5 leading-6 md:leading-8 text-gray-700">
              Learning by building 🧑🏻‍💻 is my favorite way to truly understand
              concepts. Whenever I explore something new, I dive into creating
              🏗️ an app to grasp its significance and learn how to configure it
              effectively. Here are some of the personal projects I’ve worked on
              in the past 👻, each one reflecting a step forward in my journey
              as a developer.
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
