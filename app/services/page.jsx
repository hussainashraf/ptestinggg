"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import axios from "axios";
export default function Services() {
  const mainContentSection = useRef(null); //using useRef for scrollingview
  const mainContentSection1 = useRef(null);
  const mainContentSection2 = useRef(null);
  const mainContentSection3 = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [emails, setEmails] = useState({ form1: "", form2: "" });
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async (e, formId) => {
    e.preventDefault();
    const email = emails[formId];
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    try {
      await axios.post("http://154.49.243.15:7500/api/sendemail", {
        to: email,
      });
      console.log(`Email sent successfully from ${formId}`);
      toast.success("Subscribed");
      setEmails((prev) => ({ ...prev, [formId]: "" }));
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe");
    }
  };
  const handleEmailChange = (e, formName) => {
    const newEmail = e.target.value;
    setEmails((prevEmails) => ({
      ...prevEmails,
      [formName]: newEmail,
    }));
    setEmailError("");
  };

  const initialBlogs = blogs.slice(0, 2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://154.49.243.15:7500/api/blogs");
        setBlogs(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  const initialblogs = blogs.slice(0, 2);
  const scrollToMainContent = () => {
    mainContentSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMainContent1 = () => {
    mainContentSection1.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMainContent2 = () => {
    mainContentSection2.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMainContent3 = () => {
    mainContentSection3.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
<div className="overflow-hidden bg-gradient-to-r from-[rgba(254,242,232,0.5)] to-[rgba(240,243,254,0.5)]">
<Navbar />

      <div className=" flex-col md:flex-row md:flex gap-16 lg:mr-10 mt-5 md:min-h-[500px]">
        {/* <!-- Text content --> */}
        <div className="md:w-1/2 lg:w-1/2 lg:ml-16 px-5 sm:px-10 py-5 sm:py-10 lg:mt-20">
          <div className="text-left">
            <h5 className="mb-2  text-4xl  md:text-5xl sm:text-xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white flex    lg:whitespace-nowrap  ">
              Reliable Support for All Your
            </h5>
            <h5 className="mb-4 text-4xl md:text-5xl sm:text-xl lg:text-4xl font-bold tracking-tight text-blue-700 dark:text-gray-400">
              Tax & Compliance Needs
            </h5>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e, "form1")}
            className="flex flex-col lg:flex-row gap-4"
          >
            <div className="flex flex-col w-full md:w-64">
              <input
                type="email"
                placeholder="Enter email here"
                className={`w-full mt-4 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 ${
                  emailError ? "border-red-500" : ""
                }`}
                required
                value={emails.form1}
                onChange={(e) => handleEmailChange(e, "form1")}
              />
              {emailError && (
                <span className="text-red-500 text-sm mt-1">{emailError}</span>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 md:mt-4 px-6 py-3 text-white flex items-center justify-center rounded-sm bg-orange-600 transform hover:scale-105 duration-500 ease-in-out hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 hover:text-white focus:bg-orange-500"
              style={{ backgroundColor: "#F68219" }}
            >
              Start E-Filing Now
              <img src="/arrow.svg" alt="" className="ml-2" />
            </button>
          </form>
        </div>

        {/* <!-- Image container --> */}

        <div
          className="flex flex-col sm:flex-row mt-2 flex-wrap overflow-hidden"
          style={{
            backgroundImage: 'url("/bgser1.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full sm:w-1/2 p-4">
            <Image src="/simg2.svg" alt="Your image" width={320} height={0} />
          </div>
          <div className="w-full sm:w-1/2 p-4 overflow-x-hidden lg:-translate-y-44 lg:ml-64">
            <Image src="/simg1.svg" alt="Your image" width={420} height={0} />
          </div>
        </div>
      </div>

      {/* Horizontal Card Content */}
      <div className="mb-32 relative">
  <div className="relative z-10 p-10">
    <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
    <div className="flex flex-wrap justify-center gap-10">
      <div
        className="bg-white w-64 mt-5 rounded-lg h-14 p-3 md:p-4 mb-8 shadow-md flex items-center border hover:border-blue-600 border-transparent hover:bg-blue-100"
        onClick={scrollToMainContent}
        role="button"
        tabIndex={0}
      >
        <Image
          src="book.svg"
          alt="Icon"
          className="mr-4 "
          width={40}
          height={40}
        />
        <h3 className="md:text-md text-black">ITR FILLING</h3>
      </div>

      <div
        className="bg-white w-64 mt-5 rounded-lg h-14 p-3 md:p-4 mb-8 shadow-md flex items-center border hover:border-blue-600 border-transparent hover:bg-blue-100"
        onClick={scrollToMainContent1}
        role="button"
        tabIndex={0}
      >
        <Image
          src="/rupee.svg"
          alt="Icon"
          className="mr-4"
          width={40}
          height={40}
        />
        <h3 className="md:text-md text-black">SALARY RETURN</h3>
      </div>

      <div
        className="bg-white w-64 mt-5 rounded-lg h-14 p-3 md:p-4 mb-8 shadow-md flex items-center border hover:border-blue-600 border-transparent hover:bg-blue-100"
        onClick={scrollToMainContent2}
        role="button"
        tabIndex={0}
      >
        <Image
          src="/br.svg"
          alt="Icon"
          className="mr-4"
          width={40}
          height={40}
        />
        <h3 className="md:text-md text-black">BUSINESS RETURN</h3>
      </div>

      <div
        className="bg-white w-64 mt-5 rounded-lg h-14 p-3 md:p-4 mb-8 shadow-md flex items-center border hover:border-blue-600 border-transparent hover:bg-blue-100"
        onClick={scrollToMainContent3}
        role="button"
        tabIndex={0}
      >
        <Image
          src="/circle.svg"
          alt="Icon"
          className="mr-4"
          width={40}
          height={40}
        />
        <h3 className="md:text-md text-black">TAX PLANNING</h3>
      </div>
    </div>
  </div>
</div>


      <div
        ref={mainContentSection}
        id="main-content-section"
        className="container mx-auto py-8   mt-10 "
      >
        <div className="flex px-4 flex-col gap-20 md:flex-row items-center justify-center">
          <div className="mx-4 md:w-[60%]   pr-8 mb-8 md:mb-0">
            <Image
              src="/ITRM.svg"
              alt="Image"
              className="w-full rounded-lg shadow-lg"
              width={400}
              height={500}
            />
          </div>

          <div class="w-full md:w-1/2  lg:px-8 relative">
            <div
              class="absolute  sm:h-full md:h-full md:-left-7 lg:h-64 border-l-4  top-0 lg:left-2"
              style={{ borderColor: "#FFD8B3" }}
            ></div>
            <h2 class="text-3xl font-semibold mb-4 ">ITR Filling</h2>
            <p class="text-gray-700 text-justify leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={mainContentSection1}
        id="main-content-section"
        className="container  mx-auto my-auto"
      >
        <div className="flex flex-col gap-20 md:flex-row items-center justify-center lg:mt-20 md:mt-60">
          {/* Text */}
          <div className="w-full md:w-1/2  lg:translate-x-10 px-5 relative">
            <h2 className="text-3xl font-semibold mb-6">Salary Return</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
              <div className="absolute lg:h-64 md:h-full w-0 sm:w-1 md:w-1 lg:w-1 bg-[#C1CEFD] md:-translate-y-96 md:translate-x-96 lg:-translate-x-0 lg:translate-y-10 lg:top-0 lg:right-1"></div>
            </p>
            {/* Vertical line */}
          </div>
          {/* Image */}
          <div className=" mx-4 md:w-[60%]   pr-8 mb-8 md:mb-0">
            <Image
              src="/123.svg"
              alt="Image"
              className="w-full ml-4 lg:ml-16 rounded-lg shadow-lg"
              width={800}
              height={40}
            />
          </div>
        </div>
      </div>

      <div
        ref={mainContentSection2}
        id="main-content-section"
        className="container mx-auto mt-14  "
      >
        <div className="flex flex-col gap-20 md:flex-row items-center justify-center">
          <div className=" mx-4 px-4 md:w-[60%]    pr-8 mb-8 md:mb-0">
            <Image
              src="/ServicesTwo.svg"
              alt="Image"
              className="w-full rounded-lg shadow-lg"
              width={400}
              height={500}
            />
          </div>

          <div class="w-full md:w-1/2 px-4 lg:px-8 relative">
            <div
              class="absolute  sm:h-full md:h-full md:-left-2 lg:h-64 border-l-4  top-0 lg:left-2"
              style={{ borderColor: "#FFD8B3" }}
            ></div>
            <h2 class="text-3xl font-semibold mb-4">Business Return</h2>
            <p class="text-gray-700 text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
      </div>

      {/* <div className=" md:justify-center md:items-center lg:w-1/3 mt-10 mx-10 sm lg:translate-y-16">
        <h1 class="text-3xl font-semibold mb-4 ">Lorem ipsum dolor sit</h1>
        <p class="text-gray-600 mb-4">
          Porem ipsum dolor sit amet, consectetur adipiscing elit.Porem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div> */}

      {/* <div class="flex lg:-translate-y-20 md:justify-center md:items-center flex-col lg:flex-row mx-10 sm:mx-10 md:mx-0 lg:mx-0 lg:justify-end gap-8 lg:pr-28"> */}
      {/* <!-- First Section --> */}

      {/* <div class="mb-8 flex lg:justify-center lg:items-center flex-col lg:w-1/3">
          {/* <Image src="/phone.png" width={300} height={100} className="mb-10 ml-32 "/> */}
      {/* <div class="bg-white border hover:border-blue-600 border-transparent rounded-2xl  p-6 lg:w-3/4 shadow-xl h-[250px] w-[300px]">
            <h2 class="text-lg font-bold mb-2 flex justify-center items-center ">
              Professional Income
            </h2>
            <span className="mb-4 flex justify-center items-center">
              <span className="text-blue-600 mr-2">&#8377;</span>
              <span className="text-blue-600 mr-1">200</span>
              <span>/month</span>
            </span>
            <p class="text-sm text-gray-600 mb-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <button class="bg-white hover:text-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 flex justify-center items-center font-bold py-2 px-4 rounded-md mx-auto shadow-lg">
              Buy Now <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </div> */}
      {/* </div>  */}
      {/* <!-- Second Section --> */}
      {/* <div class="flex flex-col lg:w-1/3 space-y-8">
          <div class="bg-white border hover:border-blue-600 border-transparent rounded-2xl shadow-lg p-6 mb-4 h-[250px] w-[300px]">
            <h2 class="text-lg font-bold mb-2 flex justify-center items-center">
              Professional Income
            </h2>
            <span className="mb-4 flex justify-center items-center">
              <span className="text-blue-600 mr-2">&#8377;</span>
              <span className="text-blue-600 mr-1">200</span>
              <span>/month</span>
            </span>
            <p class="text-sm text-gray-600 mb-4 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <button class="bg-white hover:text-white hover:bg-blue-500 text-blue-500 border-2 border-blue-500 flex justify-center items-center font-bold py-2 px-4 rounded-md mx-auto shadow-lg">
              Buy Now <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </div>
          <div class="bg-white   border hover:border-blue-600 border-transparent rounded-2xl shadow-lg p-6 mb-4 h-[250px] w-[300px]">
            <h2 class="text-lg font-bold mb-2 flex justify-center items-center">
              Professional Income
            </h2>
            <span className="mb-4 flex justify-center items-center">
              <span className="text-blue-600 mr-2">&#8377;</span>
              <span className="text-blue-600 mr-1">200</span>
              <span>/month</span>
            </span>
            <p class="text-sm text-gray-600 mb-4 mt-3 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <button class="bg-white hover:text-white hover:bg-blue-500 text-blue-500 border-2 border-blue-500 flex justify-center items-center font-bold py-2 px-4 rounded-md mx-auto shadow-lg">
              Buy Now <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </div>
        </div> */}
      {/* </div> */}

      <div
        ref={mainContentSection3}
        id="main-content-section"
        className="container mx-auto sm:mt-20 lg:mt-20  md:mb-80 sm:mb-32 lg:mb-24"
      >
        <div className="flex mt-10 mb-20  flex-col gap-20 md:flex-row items-center justify-center ">
          {/* Text */}
          <div className="w-full md:w-1/2 lg:translate-x-10 px-5 relative">
            <h2 className="text-3xl font-semibold mb-4">Tax Planning</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
            {/* Vertical line */}
            <div className="absolute lg:h-64 md:h-full w-0 sm:w-1 md:w-1 lg:w-1 bg-[#C1CEFD] md:-translate-y-96 md:translate-x-96 lg:-translate-x-0 lg:translate-y-10 lg:top-0 lg:right-1"></div>
          </div>
          {/* Image */}
          <div className="mx-4 md:w-[60%]   pr-8 mb-8 md:mb-0">
            <Image
              src="/TAX.svg"
              alt="Image"
              className="w-full lg:ml-16 rounded-lg shadow-lg"
              width={800}
              height={40}
            />
          </div>
        </div>
      </div>
      <div class="lg:w-full mb-44 lg:mb-96 md:mb-80 px-4 mx-auto lg:mt-32   flex flex-col justify-center items-center relative lg:-translate-x-32 ">
        <div class="lg:w-[1000px] md:w-[90%] h-[335px] relative ">
          <img
            src="https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjB3b3JrJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image"
            class="lg:w-full lg:h-full object-cover rounded-tr-3xl rounded-bl-3xl"
          />
          {initialBlogs.length > 0 && (
            <div class="hidden lg:block absolute bottom-0 left-0 lg:-translate-x-52 right-0 -translate-y-10 max-w-lg mx-auto bg-white shadow-lg rounded-tr-3xl rounded-bl-3xl md:p-6 sm:max-w-md md:max-w-lg h-54">
              <h5 class="text-base md:text-lg font-semibold mb-2">
                {initialBlogs[0].title}
              </h5>
              <p class="text-gray-700 mb-3">
                {/* {initialBlogs[0].content} */}
              </p>
              <p class="text-gray-700 text-md line-clamp-2">
                {initialBlogs[0].content}
              </p>
              <a
                href={`/blogs/${initialBlogs[0]._id}`}
                class="inline-flex items-center hover:text-primary-500 text-orange-400 bg-white font-medium rounded-lg text-md py-2"
              >
                Readmore
                <span class="ml-2 text-orange-400 text-3xl">
                  <IoIosArrowDropright />
                </span>
              </a>
            </div>
          )}

          <div class="absolute bottom-0 lg:translate-x-[52rem] mt-96  md:translate-x-[40%]  translate-x-5 -translate-y-32  md:translate-y-10 lg:-translate-y-20 max-w-sm mx-auto bg-white  shadow-lg rounded-lg lg:rounded-3xl   md:p-6 w-[90%] md:max-w-lg md:h-54">
            <h5 class="text-base md:text-lg font-semibold mb-2 px-2 mt-1">
              Want to learn more? Visit Blogs
            </h5>
            <p class="text-gray-700 text-md px-2">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, a
            </p>
            <a
              href="#"
              class="inline-flex ml-2  mb-1 px-4 mt-4 items-center text-white bg-orange-400  hover:bg-primary-500 font-sm rounded-md text-md py-2"
            >
              Explore Blog
              <span class="ml-2 text-white text-3xl">
                <BiSolidRightTopArrowCircle />
              </span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
