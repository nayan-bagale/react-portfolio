import React from "react";
import Child from "../Animation/Child";

const Cards = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <Child key={blog.name}>
            <div class="max-w-lg mx-auto">
              <div class="bg-emerald-200 border shadow border-none dark:bg-gray-900 rounded-lg max-w-sm mb-5">
                <a href={blog.link} target="_blank" rel="noreferrer">
                  <img
                    class="rounded-t-lg"
                    src={blog.img_link}
                    alt={blog.name}
                  />
                </a>
                <div class="p-5">
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    <h5 class="text-teal-800 dark:text-teal-200 text-2xl tracking-tight mb-2">
                      {blog.name}
                    </h5>
                  </a>
                  <p class="font-normal text-teal-700 dark:text-teal-400 mb-3">
                    {blog.detail}
                  </p>
                  <a
                    class="text-white bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 hover:from-teal-500 hover:to-cyan-500 transition-all duration-200 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </Child>
        );
      })}
    </>
  );
};

export default Cards;
