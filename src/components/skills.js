export default function Skills(){
    const skils = [
      {
        skill: "Node.js",
        level: "90%",
      },
      {
        skill: "React.js",
        level: "80%",
      },
      {
        skill: "MongoDB",
        level: "60%",
      },
      {
        skill: "MySQL",
        level: "60%",
      },
      {
        skill: "JavaScript",
        level: "90%",
      },
      {
        skill: "Python",
        level: "80%",
      },
      {
        skill: "Tailwind CSS",
        level: "70%",
      },
      {
        skill: "Version Control (e.g. Git)",
        level: "60%",
      },
      {
        skill: "API",
        level: "95%",
      }
    ];
    return (
      <section
        className=" flex flex-col items-center min-h-screen justify-center md:w-4/5 w-11/12 m-auto"
        id="skills-section"
      >
        <div className="text-4xl p-4 my-4 self-start">
          <h1 className=" pb-1 text-teal-700">My Skills</h1>
          <div className=" border-b-2 w-full border-teal-700"></div>
        </div>
        {skils.map((e) => {
          return (
            <div className=" flex flex-col md:w-4/5 w-11/12" key={e.skill}>
              <div class="mb-1 text-base font-medium text-gray-800">
                {e.skill}
              </div>
              <div class=" bg-slate-300 rounded-full h-2.5 mb-4">
                <div
                  class="bg-blue-500 h-2.5 rounded-full "
                  style={{ width: e.level }}
                ></div>
              </div>
            </div>
          );
        })}
      </section>
    );
}