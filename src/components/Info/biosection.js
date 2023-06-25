import Image from "../../images/profile-pic.jpg";

export default function Biosection() {
  return (
    <section
      className=" min-h-screen pt-16 flex flex-col items-center md:flex-row-reverse lg:w-4/5 lg:m-auto md:pt-0 "
      id="about-section"
    >
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 overflow-hidden md:w-80 md:h-80">
        <img src={Image} alt="profile-pic" />
      </div>

      <div className=" m-4 p-4 flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 md:p-8 md:m-8 ">
        <h1 className=" dark:text-white text-4xl md:text-5xl py-2 text-teal-600 font-medium">
          Nayan Bagale
        </h1>
        <h3 className=" dark:text-gray-200 text-xl md:text-3xl py-2 text-gray-800">
          I'm a Full Stack Web Developer
        </h3>
        <p className=" dark:text-white text-base md:text-xl py-5 leading-8 text-gray-700 lg:w-3/4 ">
          Developing web applications that are scalable, fast, reliable, easy to
          use and easy to maintain.
        </p>
        <a
          href="/#"
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-5 py-2 rounded-md"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
