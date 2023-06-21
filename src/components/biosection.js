import Image from "../images/profile-pic.jpg";

export default function Biosection() {
  return (
    <section className=" min-h-screen mt-16 flex flex-col items-center md:flex-row-reverse md:mt-0 md:m-4 " id="about-section">
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 overflow-hidden md:w-80 md:h-80">
        <img src={Image} alt="profile-pic" />
      </div>
      <div className=" m-4 p-4 flex flex-col items-center justify-between md:w-1/2 md:p-8 md:m-8">
        <h1 className=" text-4xl py-2 text-teal-600 font-medium">
          Nayan Bagale
        </h1>
        <h3 className=" text-2xl py-2">Developer and designer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:mx-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <a
          href="/#"
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-5 py-2 rounded-md ml-8"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
