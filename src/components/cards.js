
const projects_info = [
  {
    name: "ToDo List",
    image: require("../images/todo.jpeg"),
    demo: "https://todo-nayanbagale.onrender.com/",
    code: "https://github.com/nayan-bagale/ToDo",
  },
  {
    name: "Hotel Management System",
    image: require("../images/hotel.jpeg"),
    demo: null,
    code: "https://github.com/nayan-bagale/Hotel-Management-System-MySQL",
  },
  {
    name: "FitGirl",
    image: require("../images/fitgirl.jpeg"),
    demo: "https://nayan-bagale.github.io/Fitgirl-Scraper/",
    code: "https://github.com/nayan-bagale/Fitgirl-Scraper",
  },
  {
    name: "Movie-X",
    image: require("../images/movie-x.jpeg"),
    demo: "https://moviex-nayan-bagale.netlify.app/",
    code: "https://github.com/nayan-bagale/movie-x",
  },
  {
    name: "Musical Instrument",
    image: require("../images/music.jpeg"),
    demo: "https://nayan-bagale.github.io/Instruments-static-website/",
    code: "https://github.com/nayan-bagale/Instruments-static-website",
  },
];

const cardComponets = projects_info.map((item, index) => {
  return (
    <div
      key={index}
      className="h-fit max-w-sm md:max-w-lg m-4 bg-white border border-gray-200 shadow rounded-xl overflow-hidden"
    >
      <div className=" max-h-48 md:max-h-64 overflow-hidden rounded-xl">
        <img className=" object-fill" src={item.image} alt="movie" />
      </div>
      <div className="flex">
        {item.demo ? (
          <a
            target="blank"
            href={item.demo}
            className=" w-full inline-flex items-center px-3 py-2 text-md font-medium justify-center text-gray-800 md:px-4 md:text-2xl"
          >
            Demo
          </a>
        ) : (
          ""
        )}

        <a
          target="blank"
          href={item.code}
          className=" w-full inline-flex items-center px-3 py-2 text-md font-medium justify-center text-gray-800  md:px-4 md:text-2xl"
        >
          Code
        </a>
      </div>
    </div>
  );
});

const Cards = () => {
    return (
        <>
        {cardComponets}
        </>
      
    );
}

export default Cards;