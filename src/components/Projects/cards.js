const Cards = ({ project }) => {
  return (
    <>
      {project.map((item, index) => {
        return (
          <div
            key={index}
            className=" flex flex-col w-full max-w-xl px-8 py-8 bg-white border rounded-lg shadow-md md:shadow-lg"
          >
            <h1 className=" mb-2 text-2xl md:text-3xl text-teal-800 font-bold">
              {item.name}
            </h1>
            <p className=" mb-4 text-sm md:text-base text-teal-700">
              {item.detail}
            </p>
            <p className="px-4 pt-2 md:pt-4">
              {item.tags.map((item, index) => {
                return (
                  <span
                    className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-600 mr-2 mb-2"
                    key={index}
                  >
                    {`#${item}`}
                  </span>
                );
              })}
            </p>
            <hr className=" w-full h-0.5 mx-auto my-4 bg-teal-400 border-0 rounded md:my-6 " />
            <div className=" flex justify-evenly">
              {item.demo ? (
                <a
                  target="blank"
                  href={item.demo}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-5 py-2 rounded-full"
                >
                  Demo
                </a>
              ) : (
                ""
              )}

              <a
                target="blank"
                href={item.code}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-5 py-2 rounded-full"
              >
                Code
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
