import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineStop } from "react-icons/ai";
import Child from "../Animation/Child";
import { useTheme } from "../ContexAPI/Theme";

import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";
  

export default function Contactme() {
  const { theme } = useTheme();
  
  const form = useRef();
  
  const sendEmail = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Sending...');
    emailjs
      .sendForm(
        "service_gmchrbj",
        "template_ch99kya",
        form.current,
        "PBQ0fRnDn6iDGd0cY"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Succeed", {
            id: toastId,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Internal Error Occure", {
            id: toastId,
          });
        }
      );
     formik.resetForm();
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string()
        .min(10, "Atleast 10 characters")
        .required("Required"),
    }),
  });

  return (
    <section
      id="contact-section"
      className=" relative min-h-screen lg:w-3/5 md:w-4/5 w-11/12 m-auto flex flex-col items-center justify-center dark:text-white"
    >
      <div className=" text-3xl md:text-4xl p-4 my-4 self-start">
        <h1 className=" pb-4 text-teal-800 dark:text-white">Contact</h1>
        <div className=" border w-[18%] border-teal-700 dark:border-yellow-400"></div>
      </div>

      <div className=" w-4/5 my-0 md:w-2/3 md:my-6 dark:text-gray-300 text-base text-justify py-3 md:text-2xl md:py-5 leading-8 text-gray-700">
        i would {theme === "light" ? "🧡" : "🤍"} to hear about your projects
        and how i could help. want to collaborate on a project, or just want to
        say hi, don't hesitate to reach out 🤩.
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className=" w-11/12 my-4 md:w-3/5 p-4 md:my-6 rounded-lg "
      >
        <Child>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-slate-600 focus:dark:border-yellow-600 peer"
              type="text"
              name="name"
              placeholder=" "
              {...formik.getFieldProps("name")}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 dark:peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div className=" absolute text-xs mt-1 right-0 text-red-500">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
        </Child>
        <Child>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              {...formik.getFieldProps("email")}
              className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-slate-600 focus:dark:border-yellow-600 peer"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 dark:peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className=" absolute text-xs mt-1 right-0 text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </Child>
        <Child>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              placeholder=" "
              rows={5}
              {...formik.getFieldProps("message")}
              className="block py-2.5 px-0 w-full text-base md:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-slate-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-slate-600 focus:dark:border-yellow-600 peer"
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-base md:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 dark:peer-focus:text-yellow-600 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
            {formik.touched.message && formik.errors.message ? (
              <div className=" absolute text-xs mt-1 right-0 text-red-500">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
        </Child>
        <Child>
          <button
            type="submit"
            disabled={!formik.isValid}
            className=" inline-flex items-center disabled:cursor-not-allowed text-2xl bg-slate-600 text-white p-2 rounded-full"
          >
            {formik.isValid ? <BsArrowRight /> : <AiOutlineStop />}
          </button>
        </Child>
        <Toaster
          toastOptions={{
            loading: {
              style: {
                background: theme === "light" ? "white" : "rgb(31 41 55)",
                color: theme === "light" ? "black" : "white",
              },
            },
            success: {
              style: {
                background: theme === "light" ? "white" : "rgb(31 41 55)",
                color: theme === "light" ? "black" : "white",
              },
            },
            error: {
              style: {
                background: theme === "light" ? "white" : "rgb(31 41 55)",
                color: theme === "light" ? "black" : "white",
              },
            },
          }}
        />
      </form>
    </section>
  );
}
