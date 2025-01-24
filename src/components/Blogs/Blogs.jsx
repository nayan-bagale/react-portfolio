import React from "react";
import Cards from "./Cards";

const Blogs = () => {
  const blogs = [
    {
      name: "Factory Functions in JavaScript.",
      detail:
        "One of the reasons why JavaScript developers like factory functions are that they can create objects without classes or the 'new' keyword, which makes it simpler and faster.",
      link: "https://nayan-bagale.hashnode.dev/factory-functions-in-javascript",
      img_link:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1695329706615/311a819d-9989-4694-bc6b-9b7fcbba4caf.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    },
  ];
  return (
    <section
      className=" relative bg-white/80 dark:bg-slate-800/80  flex flex-col w-full items-center my-20 pb-10"
      id="blogs-section"
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
          <h2 className=" pb-4 text-teal-800 dark:text-white">Blogs</h2>
          <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
        </div>
        <div className=" mt-10 w-[90%] md:w-full space-y-8 flex flex-wrap gap-4 justify-center items-center">
          <Cards blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
