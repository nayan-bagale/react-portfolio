import Child from "../Animation/Child";

function Experience() {
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
          <h1 className=" pb-4 text-teal-800 dark:text-white">Experience</h1>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>
        <div className=" relative flex flex-col w-4/5 my-4 md:w-2/3 md:my-6">
          {/* Side line */}
          <div className=" absolute border-l h-full -left-2 top-0 border-l-teal-800 dark:border-l-white"></div>
          {/* End */}

          {/* Experience Info Card */}
          <Child>
            <div className=" rounded-3xl relative flex flex-col gap-2 md:gap-4 text-white ml-4 md:ml-8 p-6 md:p-12 w-fit dark:bg-gray-900 bg-emerald-200">
              <div className=" p-4 md:p-6 dark:bg-gray-900 bg-emerald-200 absolute rotate-45 left-[-0.9rem] md:left-[-1.5rem] top-[10%] md:top-[15%]"></div>

              <h3 className=" italic text-xl md:text-2xl absolute left-[-3.9rem] md:left-[-5.2rem] top-[30%] -rotate-90 text-teal-700 dark:text-teal-400">
                Intern
              </h3>

              <div className=" flex gap-4 items-center justify-between">
                <h1 className=" text-xl md:text-2xl text-teal-800 font-bold dark:text-teal-200">
                  Edifition
                </h1>
                <h3 className=" text-sm md:text-base italic text-teal-800 dark:text-teal-200">
                  2023-Present
                </h3>
              </div>
              <h2 className=" text-2xl md:text-4xl text-teal-800 font-semibold dark:text-teal-200">
                Full Stack Developer
              </h2>
              <p className=" text-sm md:text-lg leading-6 text-teal-700 dark:text-teal-400">
                {/* Delivering algorithmic solutions all the way from the concept
                level to production. Work usually starts with writing an
                algorithm that solves the customer's problem in some high-level
                language, framework, or library ( Node.js, GraphQL, tRPC ) and
                ends with efficient code thay runs in Microservices architecture
                base scalable production servers or carefully integrated with
                embedded systems. */}
              </p>
            </div>
          </Child>
          {/* End */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
