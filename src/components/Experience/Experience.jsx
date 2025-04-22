import classNames from "classnames";
import Child from "../Animation/Child";
// import { motion } from "framer-motion";

function Experience() {

  const experience = [
    {
      designation: "Full Stack Engineer",
      company: "CloudOptimo",
      date: "Aug 2024 - Present",
      title: "Full Time",
      description: [
        "Rewrote a React application in Next.js to optimize performance and scalability.",
        "Developed a highly reactive react app for managing work order flows with real-time status tracking, dynamic team assignments, and secure file upload, preview, and download functionality.",
        "Integrated Keylock authentication and implemented role-based access control for team-specific visibility.",
        "Developed automated scripts for scraping AWS pricing data to aid in cost analysis, and built a separate server status checker to monitor uptime and trigger alerts, improving infrastructure visibility and reliability."
        // "Delivered faster, scalable applications by transitioning React apps to Next.js, boosting performance and scalability.",
        // "Improved user experience by reducing page loading times to under 1 second.",
        // "Boosted website performance and SEO scores to 100% on Lighthouse, making the site easier to find through improved search rankings and faster page loads.",
        // "Collaborated with cross-functional teams to deliver robust applications aligned with business objectives.",
      ],
    },
    {
      designation: "Full Stack Engineer",
      company: "Edifition",
      date: "Aug 2023 - Feb 2024",
      title: "Intern",
      description: [
        "Collaborated with a team to develop a comprehensive webpage using Next.js, APIs, Tailwind CSS, React.js, and Framer Motion.",
        "Streamlined content updates by incorporating a CMS into the project.",
        "Set up a PostgreSQL database using Drizzle ORM.",
        "Optimized application performance, resulting in a 2x improvement.",
      ],
    },
  ];

  return (
    <section
      className=" relative min-h-fit bg-white/80 dark:bg-slate-800/80 flex flex-col w-full items-center my-20 pb-10"
      id="experience-section"
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
      <div className="absolute bottom-[-3.12rem] md:bottom-[-6.2343rem] left-0 w-full leading-none rotate-180">
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

      <div className="relative flex flex-col items-center md:w-4/5 w-11/12 m-auto">
        <div className="text-3xl md:text-4xl p-4 my-4 self-start">
          <h2 className=" pb-4 text-teal-800 dark:text-white">Experience</h2>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>
        <div className=" relative gap-20 flex flex-col w-[85%] my-4 md:w-2/3 md:my-6">
          {/* Side line */}
          <div className=" absolute border-l-2 h-full -left-2 top-0 border-l-teal-800 dark:border-yellow-400"></div>
          {/* End */}

          {/* Experience Info Card */}
          {/* <Child>
            <div className=" rounded-3xl relative flex flex-col gap-2 md:gap-4 text-white ml-4 md:ml-8 p-6 md:p-12 w-fit dark:bg-gray-900 bg-emerald-200">
              <div className=" p-4 md:p-6 dark:bg-gray-900 bg-emerald-200 absolute rotate-45 left-[-0.9rem] md:left-[-1.5rem] top-[10%] md:top-[15%]"></div>

              <h3 className=" italic text-xl md:text-2xl absolute left-[-3.9rem] md:left-[-5.2rem] top-[30%] -rotate-90 text-teal-700 dark:text-teal-400">
                Intern
              </h3>

              <div className=" flex gap-4 items-center justify-between">
                <h1 className=" text-xl md:text-2xl text-teal-800 font-bold dark:text-teal-200 dark:bg-gray-800 bg-emerald-100 p-1 px-2 rounded-3xl">
                  Edifition
                </h1>
                <h3 className=" text-sm md:text-base italic text-teal-800 dark:text-teal-200 ">
                  2023-Present
                </h3>
              </div>
              <h2 className=" text-2xl md:text-4xl text-teal-800 font-semibold dark:text-teal-200">
                Full Stack Developer
              </h2>
              <ul className="list-disc text-xs flex flex-col gap-1 md:text-base md:leading-6 text-teal-700 dark:text-teal-400">
                <li>
                  Collaborated with a team to develop a comprehensive webpage{" "}
                  <br />
                  using Next.js, APIs, Tailwind CSS, React.js, and Framer
                  Motion.
                </li>
                <li>
                  Streamlined content updates by incorporating a CMS into the
                  project.
                </li>
                <li>Set up a PostgreSQL database using Drizzle ORM.</li>
                <li>
                  Optimized application performance, resulting in a 2x
                  improvement.
                </li>
              </ul>
            </div>
          </Child> */}
          {experience.map((exp, index) => (
            <Child key={exp.date}>
              <div className=" rounded-3xl relative flex flex-col gap-2 md:gap-4 text-white ml-4 md:ml-8 p-6 md:p-12 w-fit dark:bg-gray-900 bg-emerald-200">
                <div className=" p-4 md:p-6 dark:bg-gray-900 bg-emerald-200 absolute rotate-45 left-[-0.9rem] md:left-[-1.5rem] top-[10%] md:top-[15%]"></div>

                <h3
                  className={classNames(
                    " italic text-xl md:text-2xl absolute  top-[30%] -rotate-90 text-teal-700 dark:text-teal-400",
                    index === 1
                      ? "left-[-3.9rem] md:left-[-5.2rem]"
                      : "left-[-4.9rem] md:left-[-6.2rem]"
                  )}
                >
                  {exp.title}
                </h3>

                <div className=" flex gap-4 flex-col md:flex-row md:items-center justify-between">
                  <h3 className=" w-fit text-xl md:text-2xl text-teal-800 font-bold dark:text-teal-200 dark:bg-gray-800 bg-emerald-100 p-1 px-2 rounded-xl ">
                    {exp.company}
                  </h3>
                  <div className=" text-sm md:text-base italic text-teal-800 dark:text-teal-200 ">
                    {exp.date}
                  </div>
                </div>
                <h2 className=" text-2xl md:text-4xl text-teal-800 font-semibold dark:text-teal-200">
                  {exp.designation}
                </h2>
                <ul className="list-disc text-xs flex flex-col gap-1 md:text-base md:leading-6 text-teal-700 dark:text-teal-400">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </Child>
          ))}
          {/* End */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
