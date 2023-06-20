export default function skills(){
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
      <section className=" flex flex-col items-center min-h-screen justify-center w-2/3 m-auto">
        <h1 className=" text-3xl">My Skills</h1>
        {skils.map((e) => {
            return (
              <div className=" flex flex-col w-full" key={e.skill}>
                <div class="mb-1 text-base font-medium">{e.skill}</div>
                <div class=" bg-slate-300 rounded-full h-2.5 mb-4">
                  <div
                    class="bg-blue-500 h-2.5 rounded-full "
                    style={{width: e.level}}
                  ></div>
                </div>
              </div>
            );
        })}
      </section>
    );
}