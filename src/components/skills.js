import { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Skills() {
  const [collapsetoggle, setCollapsetoggle] = useState(null);
  const handleClick = (index) => {
    if (index === collapsetoggle) {
      setCollapsetoggle(() => null);
      return;
    }
    setCollapsetoggle(() => index);
  };

  const proficientArray = [
    {
      title: "Front-End",
      skills: "ES6, React.js, Tailwind CSS, JavaScript, HTML5, CSS3",
    },
    {
      title: "Back-End",
      skills:
        "Node.js, Express.js, Python, MongoDB, MySQL, API, Version Control (e.g. Git) ",
    },
  ];

  const proficient = proficientArray.map(({ title, skills }, index) => {
    return (
      <div key={index} className=" flex flex-col w-2/3 my-6">
        <div
          className=" flex items-center justify-between text-teal-800 cursor-pointer relative"
          onClick={() => handleClick(index)}
        >
          <h1 className=" text-3xl">{title}</h1>
          {collapsetoggle === index ? (
            <AiOutlineArrowUp className=" text-3xl text-teal-700 transition duration-200 ease-in-out " />
          ) : (
            <AiOutlineArrowUp className=" text-3xl text-teal-700 rotate-180 transition duration-200 ease-in-out" />
          )}
          <div className=" bottom-[-0.75rem] border w-full absolute"></div>
        </div>
        <Collapse isOpened={collapsetoggle === index}>
          <p className=" text-xl py-6 text-teal-600 ">{skills}</p>
        </Collapse>
      </div>
    );
  });

  const skillsArray = [
    {
      title: "Node.js",
      progress: "95%",
    },
    {
      title: "React.js",
      progress: "60%",
    },
    {
      title: "Express.js",
      progress: "80%",
    },
  ];

  const Skill = skillsArray.map(({title, progress}, index) => {
    return (
      <div className="flex flex-col w-2/3 my-2">
        <div class=" text-3xl my-4 text-teal-800">{title}</div>
        <div class=" bg-slate-300 rounded-full h-0.5 mb-4">
          <div
            class=" bg-teal-800 h-0.5 rounded-full relative"
            style={{ width: progress }}
          >
            <div className=" absolute rounded p-1 px-2 text-white  right-[-1.2rem] top-[-2.5rem] bg-slate-800">
              {progress}
            </div>
            <div className=" absolute  p-1 bg-slate-800  right-0 top-[-0.75rem] rotate-45"></div>
          </div>
        </div>
      </div>
    );
  })

  return (
    <section
      className=" flex flex-col items-center min-h-screen justify-center md:w-4/5 w-11/12 m-auto"
      id="skills-section"
    >
      <div className="text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800">I’m proficient at</h1>
        <div className=" border-b-4 w-[18%] border-teal-700"></div>
      </div>
      {proficient}
      <div className="text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800">Skills</h1>
        <div className=" border-b-4 w-[18%] border-teal-700"></div>
      </div>
      {Skill}
    </section>
  );
}
