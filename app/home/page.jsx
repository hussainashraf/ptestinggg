"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import dynamic from 'next/dynamic';// requires a loader
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";
// import { ConnectProvider, Connect } from "react-connect-lines";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
// const ConnectProvider = dynamic(
//   () => import('react-connect-lines').then((mod) => mod.ConnectProvider),
//   { ssr: false }
// );
// const Connect = dynamic(
//   () => import('react-connect-lines').then((mod) => mod.Connect),
//   { ssr: false }
// );
export default function Home() {

  const [backgroundImage, setBackgroundImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://154.49.243.15:7500/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://154.49.243.15:7500/api/testimonials"
        );
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Testimonials:", error);
      }
    };

    fetchData();
  }, []);
  const goToPrev = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  const images = [
    "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjB3b3JrJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds, adjust as needed

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setNextImage(images[currentIndex]);
  }, [currentIndex, images]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage(nextImage);
    }, 2000); // Adjust the duration to match your CSS transition time

    return () => clearTimeout(timer);
  }, [nextImage]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get("http://154.49.243.15:7500/api/ratings");
      setRatings(response.data);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };
  const initialBlogs = blogs.slice(0, 1);
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[rgba(254,242,232,0.6)] to-[rgba(240,243,254,0.6)">
      <div className="flex justify-center overflow-hidden">
        <div className="w-full lg:flex">
          {/* Text Content */}
          <div className="w-full md:ml-10 px-4 mt-14 lg:mt-24 lg:w-1/2">
            <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Empower Your Wealth,
            </h5>
            <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight dark:text-gray-400 mb-4">
              Simplify Your
              <span className="text-blue-700 dark:text-blue-400"> Taxes</span>
            </h5>
            <div>
              <p className="lg:mt-10 text-gray-600 text-justify sm:max-w-full text-grey-600 overflow-hidden overflow-ellipsis w-full">
                Pathak Associates is your one-stop solution for all your
                financial compliance needs. We specialize in services like
                Income Tax Return filing and GST registration, providing
                efficient solutions to individuals and businesses.
              </p>
            </div>
            <div className="flex flex-col lg:mt-5 sm:flex-row items-left sm:item-left lg:items-center">
              <a
                href="/contact"
                className="inline-flex text-md mt-5 sm:mt-0 lg:items-center px-4 py-3 mr-3 font-medium lg:text-center text-white rounded-md hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
                style={{ backgroundColor: "#F68219" }}
              >
                Start E-Filling Now
              </a>
              <a
                href="tel:+917783042999"
                className="inline-flex text-md mt-5 sm:mt-0 lg:items-center px-4 lg:px-8 py-3 mr-3 font-medium lg:text-center text-white rounded-md focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
                style={{ border: "1px solid #F68219", color: "#F68219" }}
              >
                Call Now
                <svg
                  className="rtl:rotate-180 w-5 h-5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F68219"
                  viewBox="0 0 32 32"
                >
                  <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z" />
                </svg>
              </a>
            </div>

            {/* Review */}
            {/* <div className="flex mt-4">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://thumbs.dreamstime.com/b/confident-black-man-looking-camera-indoors-head-shot-young-handsome-portrait-african-american-single-bachelor-male-standing-128706411.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://thumbs.dreamstime.com/b/confident-black-man-looking-camera-indoors-head-shot-young-handsome-portrait-african-american-single-bachelor-male-standing-128706411.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="https://thumbs.dreamstime.com/b/confident-black-man-looking-camera-indoors-head-shot-young-handsome-portrait-african-american-single-bachelor-male-standing-128706411.jpg"
                alt=""
              />
              <p className="flex justify-evenly mt-1 ml-3 flex-nowrap items-center">
                Google Reviews
                <FaStar
                  style={{
                    color: "#F68219",
                    marginLeft: "0.5rem",
                    marginTop: "0.1rem",
                    fontSize: "1.3rem",
                    marginRight: "0.4rem",
                  }}
                />
                {ratings.averageRating} ({ratings.totalCount} reviews)
              </p>
            </div> */}
          </div>

          {/* Image */}
          <div // Background Image
            className="hidden lg:block  relative w-full lg:w-1/2 bg-cover bg-center z-10"
            style={{
              backgroundImage: 'url("/img3.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Card Image Container */}
            <div className="mt-16 mr-20 ml-5 w-full px-14 z-20 relative">
              {/* Dotted Image */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  className="max-w-full h-auto"
                  src="MainHead.svg"
                  width={400}
                  height={200}
                  alt="Your Image"
                />
              </div>

              {/* Card Image */}
              <div className="relative mx-4">
                <Image
                  className="lg:w-[950px] h-full"
                  src="hero1.svg"
                  width={600}
                  height={100}
                  alt="Your Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="flex justify-center overflow-hidden items-start   text-2xl md:text-4xl mt-14 lg:mt-10 font-bold text-nowrap px-20">
        Discover What we offer
      </h1>

      <div class="crousel-wrapper mt-10 ">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
          itemsToScroll={1}
          itemsToShow={1}
          className="lg:mt-14 overflow-hidden"
        >
          <div
            className="max-w-sm mx-4 mb-8 mt-10 bg-white rounded-lg shadow-lg relative "
            style={{
              border: "10px solid #DBE6FC",
              flex: "1 1 300px",
            }}
          >
            <div
              className="px-4 pt-10"
              style={{
                height: "170px",
                // backgroundColor:"red",
                "@media screen and (max-width: 360px)": { height: "700px" },
                "@media screen and (min-width: 1024px)": { height: "250px" },
              }}
            >
              <div className="flex justify-center items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue">
                    <div
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src="/Frame1.svg"
                        className="w-20 h-20 rounded-full border-0"
                        style={{
                          borderWidth: "10px",
                          borderColor: "#DBE6FC",
                          padding: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mt-4 ">
                Tax Service for your Business
              </h3>
              <p className="text-gray-600 text-sm sm:text-md my-3">
                The customized tax service, which includes planning about
                filling for businesses of all sizes, adds value to optimize tax
                strategies.
              </p>
            </div>

            <div className="px-0 mt-4">
              <Link
                href="/services"
                className=" text-white  py-4 px-4  mt-20 sm:mt-0 transition-colors duration-300  flex justify-between items-center"
                style={{
                  backgroundColor: "#5C7EFB",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Learn more
                <HiArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div
            className="max-w-xs mx-4 mb-8 mt-10 bg-white rounded-lg shadow-lg relative "
            style={{
              border: "10px solid #DBE6FC",
              flex: "1 1 300px",
              maxWidth: "300px",
            }}
          >
            <div className="px-4 pt-10 " style={{ height: "170px" }}>
              <div className="flex justify-center items-center">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue">
                    <div
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src="/Frame1.svg"
                        className="w-20 h-20 rounded-full border-0"
                        style={{
                          borderWidth: "10px",
                          borderColor: "#DBE6FC",
                          padding: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mt-4 ">
                Providing Guidance
              </h3>
              <p className="text-gray-600 text-sm  my-5 sm:my-5 lg:my-3">
                Our experts provide personify devices and guidance to the
                customer regarding the different areas of the tax to make.
              </p>
            </div>
            <div className="px-0 mt-4">
              <Link
                href="/services"
                className=" text-white  py-4 px-4 mt-20 sm:mt-0   transition-colors duration-300  flex justify-between items-center"
                style={{
                  backgroundColor: "#5C7EFB",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Learn more
                <HiArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div
            className="max-w-xs mx-4 mb-8 mt-10 bg-white rounded-lg shadow-lg relative "
            style={{
              border: "10px solid #DBE6FC",
              flex: "1 1 300px",
              maxWidth: "300px",
            }}
          >
            <div className="px-4 pt-10 " style={{ height: "170px" }}>
              <div className="flex justify-center items-center">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue">
                    <div
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src="/User.svg"
                        className="w-20 h-20 rounded-full border-0"
                        style={{
                          borderWidth: "10px",
                          borderColor: "#DBE6FC",
                          padding: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mt-4 ">
                Individual Services
              </h3>
              <p className="text-gray-600 text-sm  my-5 sm:my-5 lg:my-3 ">
                Expert that will manage and create a plan for your tax filling
                and liabilities which will amend all the tax-related queries
              </p>
            </div>
            <div className="px-0 mt-4">
              <Link
                href="/services"
                className=" text-white  py-4 px-4 mt-20 sm:mt-0   transition-colors duration-300  flex justify-between items-center"
                style={{
                  backgroundColor: "#5C7EFB",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Learn more
                <HiArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div
            className="max-w-xs mx-4 mb-8 mt-10 bg-white rounded-lg shadow-lg relative "
            style={{
              border: "10px solid #DBE6FC",
              flex: "1 1 300px",
              maxWidth: "300px",
            }}
          >
            <div className="px-4 pt-10 " style={{ height: "170px" }}>
              <div className="flex justify-center items-center">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue">
                    <div
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src="/Frame1.svg"
                        className="w-20 h-20 rounded-full border-0"
                        style={{
                          borderWidth: "10px",
                          borderColor: "#DBE6FC",
                          padding: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mt-2 ">
                Tax Planning
              </h3>
              <p className="text-gray-600 text-sm  my-5 sm:my-5 lg:my-3">
                Working closely with the client to plan the tax services that
                are effective and easy which will also increase the saving
              </p>
            </div>
            <div className="px-0 mt-4">
              <Link
                href="/services"
                className=" text-white  py-4 px-4 mt-20 sm:mt-0   transition-colors duration-300  flex justify-between items-center"
                style={{
                  backgroundColor: "#5C7EFB",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Learn more
                <HiArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div
            className="max-w-xs mx-4 mb-8 mt-10 bg-white rounded-lg shadow-lg relative "
            style={{
              border: "10px solid #DBE6FC",
              flex: "1 1 300px",
              maxWidth: "300px",
            }}
          >
            <div className="px-4 pt-10 " style={{ height: "170px" }}>
              <div className="flex justify-center items-center">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-blue">
                    <div
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src="/Frame1.svg"
                        className="w-20 h-20 rounded-full border-0"
                        style={{
                          borderWidth: "10px",
                          borderColor: "#DBE6FC",
                          padding: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-semibold text-gray-800 mt-4 ">
                Providing Guidance
              </h3>
              <p className="text-gray-600 text-sm  my-5 sm:my-5 lg:my-3">
                Our experts provide personify devices and guidance to the
                customer regarding the different areas of the tax to make.
              </p>
            </div>
            <div className="px-0 mt-4">
              <Link
                href="/services"
                className=" text-white  py-4 px-4 mt-20 sm:mt-0  transition-colors duration-300  flex justify-between items-center"
                style={{
                  backgroundColor: "#5C7EFB",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Learn more
                <HiArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      {/* <ConnectProvider> */}
        <div className="bg-gradient-to-r from-[rgba(254,242,232,0.5)] to-[rgba(240,243,254,0.5)" >
          <div className=" lg:w-1/3 mt-10   lg:mb-40 mx-10 sm lg:translate-y-20 lg:ml-32">
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Streamlined Tax Solutions: <br /> How We Work With You
            </h5>
            <p className="mt-5 ">
              Secure Submission, Expert Guidance, Tailored Service
            </p>
          </div>

          <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-20 mx-4 sm:mx-10 lg:mx-20 mt-32 mb-40 lg:mt-20">
            {/* Box 1 */}
            {/* <Connect
              id="element-1"
              connectWith={[
                { id: "element-2", color: "red", stroke: "solid" },
              ]}
            > */}
              <div
                className="bg-white border border-transparent rounded-lg p-6 shadow-xl h-[220px] w-[340px] transition duration-300 transform hover:scale-110"
                style={{
                  borderBottom: "3px solid #508AFF",
                  backgroundColor: "#F2F5FF",
                }}
              >
                <div className="flex items-start mb-4">
                  <div>
                    <span className="bg-blue-500 rounded-lg text-3xl text-white mt-5 font-bold py-3 px-5 -translate-x-2">
                      1
                    </span>
                    <h2 className="text-lg font-semibold mt-7 text-nowrap -translate-x-2">
                      Get Started with Registration
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-justify mb-1 -translate-x-2">
                  Simplify your tax journey. Register and access specialized
                  consultations tailored to your unique business needs.
                </p>
              </div>
            {/* </Connect> */}
            {/* Box 2 */}
            {/* <Connect
              id="element-2"
              connectWith={[
                { id: "element-3", color: "red", stroke: "solid" },
              ]}
            > */}
              <div
                className="bg-white border border-transparent rounded-lg p-6 shadow-xl h-[220px] w-[340px] transition duration-300 transform hover:scale-110"
                style={{
                  borderBottom: "3px solid #508AFF",
                  backgroundColor: "#F2F5FF",
                }}
              >
                <div className="flex items-start mb-4">
                  <div>
                    <span className="bg-blue-500 rounded-lg text-3xl text-white mt-5 font-bold py-3 px-5 -translate-x-2">
                      2
                    </span>
                    <h2 className="text-lg font-semibold mt-7 text-nowrap -translate-x-2">
                      Fill Details & Upload Documents
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-justify mb-1 -translate-x-2">
                  Securely submit your documents to our website for confidential
                  handling and solutions tailored to your specific needs.
                </p>
              </div>
            {/* </Connect> */}

            {/* Box 3 */}
            {/* <Connect></Connect> */}
            {/* <Connect id="element-3"> */}
              <div
                className="bg-white border border-transparent rounded-lg p-6 shadow-xl h-[220px] w-[340px] transition duration-300 transform hover:scale-110"
                style={{
                  borderBottom: "3px solid #508AFF",
                  backgroundColor: "#F2F5FF",
                }}
              >
                <div className="flex items-start mb-4">
                  <div>
                    <span className="bg-blue-500 rounded-lg text-3xl text-white mt-5 font-bold py-3 px-5 -translate-x-2">
                      3
                    </span>
                    <h2 className="text-lg font-semibold mt-7 text-nowrap -translate-x-2">
                      Sit Back & We Will Get Back To You
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-justify mb-1 -translate-x-2">
                  Our dedicated team of professionals will connect with you for
                  an in-depth discussion to address your needs.
                </p>
              </div>
            {/* </Connect> */}
          </div>
        </div>
      {/* </ConnectProvider> */}
      <div className="lg:mb-80">
        <div>
          <h1 className=" text-3xl mt-10 flex flex-row justify-center items-center mx-10 md:text-4xl lg:text-5xl font-bold  ">
            Explore Our Blogs for Insights
          </h1>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url("/imgR1.png")`,
            backgroundSize: "contain",
            backgroundrepeat: "no-repeat",
          }}
        >
          <div
            className="bg-white lg:mt-6 lg:mx-10 h-[450px]  relative shadow-lg "
            style={{
              padding: "35px", // Adjust padding as needed
            }}
          >
            {/* Background Image */}
            <img
              src={backgroundImage}
              className="w-full h-full object-cover rounded-lg  transition duration-700 z-10"
              alt="Background"
            />

            {/* Card Content */}
            <div
              className="bg-white absolute  top-0 right-5  rounded-lg z-10"
              style={{
                padding: "20px", // Adjust padding as needed
              }}
            >
              <Link href="/blogs">
                <div className="top-3">
                  <button
                    className="py-3 px-6 text-white rounded-md"
                    style={{ backgroundColor: "#FF7D04" }}
                  >
                    View More
                  </button>
                </div>
              </Link>
            </div>
            <div className="  justify-center items-center p-8 ">
              {initialBlogs.length >= 1 && (
                <div className="  -translate-y-80 md:-translate-y-96 lg:-translate-y-96 gap-14 flex flex-row justify-center items-center p-8 z-20 ">
                  {/* Card 1 */}
                  <div className="bg-white rounded-lg shadow-lg  w-auto md:w-1/2 lg:max-w-sm lg:w-1/3 xl:max-w-md xl:w-1/4">
                    {/* Content of card 1 */}
                    <div className="p-5 md:p-6 lg:p-6 w-auto ">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                        {initialBlogs[0].title}
                      </h2>
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-600">5 min read</p>
                        <p className="text-sm text-gray-600">
                          {moment(initialBlogs[0].time).format("Do MMM")}
                        </p>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-2">
                        {initialBlogs[0].content}
                      </p>
                      <a
                        href={`/blogs/${initialBlogs[0]._id}`}
                        className="text-orange-500 inline-flex items-center"
                      >
                        Read more
                        <BiRightTopArrowCircle className="ml-1 w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  {/* Card 1 */}
                  <div className="hidden sm:block bg-white rounded-lg shadow-lg  w-auto md:w-1/2 lg:max-w-sm lg:w-1/3 xl:max-w-md xl:w-1/4">
                    {/* Content of card 1 */}
                    <div className="p-5 md:p-6 lg:p-6 w-auto ">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                        {initialBlogs[0].title}
                      </h2>
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-600">5 min read</p>
                        <p className="text-sm text-gray-600">
                          {moment(initialBlogs[0].time).format("Do MMM")}
                        </p>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-2">
                        {initialBlogs[0].content}
                      </p>
                      <a
                        href={`/blogs/${initialBlogs[0]._id}`}
                        className="text-orange-500 inline-flex items-center"
                      >
                        Read more
                        <BiRightTopArrowCircle className="ml-1 w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* </div> */}

        {/* Another Card Content */}
        <div className="">
          <div className=" lg:w-1/3 mt-10 mb-10 mx-10 sm lg:translate-y-20 lg:ml-24">
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Streamlined Tax Solutions: <br /> How We Work With You
            </h5>
            <p className="mt-5 ">
              Secure Submission, Expert Guidance, Tailored Service
            </p>
          </div>

          <div className="mb-80 lg:mb-96 mt-32 mx-4">
          <div className="carousel-inner overflow-hidden relative">
          <div
            className="carousel-items-wrapper flex duration-700 transition-transform ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={item.id} className="carousel-item flex-shrink-0 w-full">
                <div className="flex mt-10 mb-10 justify-center items-center">
                  <div className="bg-white mx-4 sm:mx-8 md:mx-14 flex flex-col  sm:w-4/5 md:w-3/4 lg:w-1/2 justify-center items-center item p-4 sm:p-6 md:p-7 border hover:border-blue-500 rounded-2xl shadow-md">
                    <p className="text-gray-700 mb-6 sm:mb-8 mt-2 text-center text-sm sm:text-base">
                      {item.comment}
                    </p>
                    <div className="flex w-16 sm:w-20 h-8 sm:h-10 flex-col items-center -translate-y-5 sm:-translate-y-7 mt-2 sm:mt-4">
                      <img
                        src="Ellipse1705.svg"
                        alt="Avatar"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mr-2"
                      />
                    </div>
                    <span className="text-xs sm:text-sm">{item.userName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrev}
            className="prev absolute left-8 sm:left-4 md:left-8 lg:left-10 top-48 lg:top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center lg:mx-44"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="next absolute right-8  sm:right-4 md:right-8 lg:right-10 top-48 lg:top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center lg:mx-44"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
