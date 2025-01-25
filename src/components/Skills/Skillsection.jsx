// import { motion } from "framer-motion";
import Profient from "./Profient";
import Skill from "./Skill";
import Parent from "../Animation/Parent";

export default function Skills() {
  // const sectionVarient = {
  //   hidden: {
  //     y: 100,
  //     opacity: 0,
  //   },
  //   visible: { y: 0, opacity: 1 },
  //   transition: { type:'spring', stiffness: 100, when:"beforeChildren" },
  //   viewport: { amount: 0.1 },

  // };

  const skillsArray = [
    {
      title: "NextJs + ReactJs",
      progress: "95%",
    },
    {
      title: "TypeScript",
      progress: "90%",
    },
    {
      title: "Nodejs",
      progress: "85%",
    },
  ];

  const proficientArray = [
    {
      title: "Front-End",
      skills: "ReactJs, NextJs, Redux, TailwindCSS, TypeScript, HTML5, CSS3, JavaScript, ES6",
    },
    {
      title: "Back-End",
      skills:
        "Nodejs, Expressjs, SocketIO, PostgreSQL, MySQL, Git, C++, Python ",
    },
    {
      title: "Tools /Platforms",
      skills:
        "Docker, AWS, Git, GitHub, GitLab, Postman, Vercel, Firebase",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center min-h-screen justify-center md:w-4/5 w-11/12 m-auto"
      id="skills-section"
    >
      <div className="text-3xl md:text-4xl p-4 my-4 self-start">
        <Parent>
          <h2 className=" pb-4 text-teal-800 dark:text-white">
            I’m proficient at
          </h2>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </Parent>
      </div>
      <Profient array={proficientArray} />
      <div className=" text-3xl md:text-4xl p-4 my-4 mt-6 self-start">
        <Parent>
          <h2 className=" pb-4 text-teal-800 dark:text-white">Skills</h2>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </Parent>
      </div>
      <Skill array={skillsArray} />
    </section>
  );
}
