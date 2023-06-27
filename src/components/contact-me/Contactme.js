import React from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function Contactme() {

    const handlesubmit = (e) => {
        e.preventDefault();
        alert("success")
    }

  return (
    <section
      id="contact-section"
      className=" min-h-screen md:w-4/5 w-11/12 m-auto flex flex-col items-center justify-center dark:text-white"
    >
      <div className=" text-3xl md:text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800 dark:text-white">Contact</h1>
        <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
      </div>

      <form onSubmit={handlesubmit} className=" w-4/5 my-4 md:w-2/3 md:my-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="name"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            name="message"
            placeholder=" "
            rows={5}
            className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          ></textarea>
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className=" inline-flex items-center text-2xl bg-slate-600 text-white p-2 rounded-full"
        >
          <BsArrowRight />
        </button>
      </form>
    </section>
  );
}
