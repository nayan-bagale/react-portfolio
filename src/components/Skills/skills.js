import { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineUp } from "react-icons/ai";

const Profient = () => {
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

    return proficientArray.map(({ title, skills }, index) => {
      return (
        <div key={index} className=" flex flex-col w-4/5 my-4 md:w-2/3 md:my-6">
          <div
            className=" flex items-center justify-between text-teal-800 cursor-pointer relative"
            onClick={() => handleClick(index)}
          >
            <h1 className=" text-2xl md:text-3xl">{title}</h1>
            {collapsetoggle === index ? (
              <AiOutlineUp className=" text-2xl md:text-3xl text-teal-700 transition duration-200 ease-in-out " />
            ) : (
              <AiOutlineUp className=" text-2xl md:text-3xl text-teal-700 scale-y-[-1] transition duration-200 ease-in-out" />
            )}
            <div className=" bottom-[-0.75rem] border w-full absolute"></div>
          </div>
          <Collapse isOpened={collapsetoggle === index}>
            <p className=" text-md md:text-xl py-6 text-teal-600 ">{skills}</p>
          </Collapse>
        </div>
      );
    });

}

const Skill = () => {  
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

  return skillsArray.map(({ title, progress }, index) => {
    return (
      <div className="flex flex-col w-4/5 my-1 md:w-2/3 md:my-2" key={index}>
        <div className=" text-2xl md:text-3xl my-2 md:my-4 text-teal-800">
          {title}
        </div>
        <div className=" bg-slate-300 rounded-full h-0.5 mb-2 md:mb-4">
          <div
            className=" bg-teal-800 h-0.5 rounded-full relative"
            style={{ width: progress }}
          >
            <div className=" text-sm md:text-base absolute rounded p-1 px-2 text-white top-[-2.20rem] right-[-1rem] md:right-[-1.2rem]  md:top-[-2.5rem] bg-slate-800">
              {progress}
            </div>
            <div className=" absolute  p-1 bg-slate-800  right-0 top-[-0.75rem] rotate-45"></div>
          </div>
        </div>
      </div>
    );
  });

}

export default function Skills() {
  return (
    <section
      className=" flex flex-col items-center min-h-screen justify-center md:w-4/5 w-11/12 m-auto"
      id="skills-section"
    >
      <div className="text-3xl md:text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800">I’m proficient at</h1>
        <div className=" border w-[18%] border-teal-700"></div>
      </div>
      <Profient />
      <div className=" text-3xl md:text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800">Skills</h1>
        <div className=" border w-[18%] border-teal-700"></div>
      </div>
      <Skill/>
    </section>
  );
}
