"use client";
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "react-elastic-carousel";
import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import Image from "next/image";
import PurchaseModal from "./modal/priceform";
import Link from "next/link";
// import {ConnectLines} from 'react-connect-lines'
const ELEMENTS = [
  { id: "id-1", connectWith: [{ id: "id-2",color:'orange' }]  },
  { id: "id-2", connectWith: [{ id: "id-3" ,color:'orange' }] },
  { id: "id-3", connectWith: [{ id: "id-4",color:'orange'  }] },
  { id: "id-4", connectWith: [{ color:'orange'  }] }
]
const ClientOnlyConnectLines = dynamic(
  () => import('react-connect-lines').then((mod) => mod.ConnectLines),
  { ssr: false }
);
// const ConnectLines = dynamic(
//   () => import('react-connect-lines').then((mod) => mod.default || mod),
//   { ssr: false }
// );
function ConnectLinesWrapper({ elements }) {
  return <ClientOnlyConnectLines elements={elements} />;
}
export default function Price() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: true },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  const services = [
    "Professional Income",
    "Service 2",
    "Service 3",
    // Add more services as needed
  ];
  const [items, setItems] = useState([]);
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  
      <div className="overflow-hidden bg-gradient-to-r from-[rgba(254,242,232,0.6)] to-[rgba(240,243,254,0.6)">
        <Navbar />

        <div class="flex flex-col lg:flex-row">
          {/* <!-- First div --> */}
          <div class="w-full lg:w-1/2 h-full">
            {/* <!-- Content --> */}
            <div class="h-1/2 flex flex-col  mt-12 sm:mt-20  md:mt-20 lg:mt-28  md:ml-  sm:mx-4  text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 md:px-8 lg:px-10 font-bold">
                Why choose us ?
              </h2>
              <p class="mt-5  px-5 sm:px-10 text-gray-500 lg:space-y-3 leading-relaxed">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            {/* <!-- Image --> */}

            <div class="h-1/2 flex justify-center items-center  mt-10 md:mt-14 lg:mt-40">
              {/* <Connect id="element-3" className="hidden sm:block"> */}
                <Image src="/USERP.svg" width={340} height={100} />
              {/* </Connect> */}
            </div>
          </div>

          {/* <!-- Second div --> */}

          <div class="w-full lg:w-1/2 h-full md:mt-10">
            {/* <!-- First image section --> */}

            <div className="h-1/2 hidden  lg:flex mb-10 lg:mb-0 justify-end lg:mr-28 mt-28 lg:mt-32">
              {/* <Connect
                id="element-1"
                className="hidden sm:block"
                connectWith={[
                  { id: "element-2", color: "green", stroke: "solid" },
                ]}
              > */}
                <Image src="/PRIIMG1.svg" width={260} height={100} />
              {/* </Connect> */}
            </div>

            {/* <!-- Second image section --> */}

            <div className="h-3/4 flex mt-20 mb-4 md:mb-0 sm:mb-0 px-5 sm:px-10 md:justify-center">
            <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-blue-500 md:max-w-md md:w-full">
              <ul className="ml-2 space-y-4">
                <li className="flex items-center tracking-normal mt-3 text-sm md:text-base lg:text-md text-gray-700">
                  <div className="w-3 h-3 border border-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                  We take the complexity out of financial processes
                </li>
                <li className="flex items-center text-sm md:text-base lg:text-md text-gray-700">
                  <div className="w-3 h-3 text-xl border border-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                  Our team of tax professionals ensures efficiency
                </li>
                <li className="flex items-center text-sm md:text-base lg:text-md text-gray-700">
                  <div className="w-3 h-3 border border-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                  Our user-friendly platform guides you step-by-step
                </li>
                <li className="flex items-center text-sm md:text-base lg:text-md text-gray-700">
                  <div className="w-3 h-3 border border-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                  We prioritize customer satisfaction, offering support
                </li>
                <li className="flex items-center text-sm md:text-base lg:text-md text-gray-700">
                  <div className="w-3 h-3 border border-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                  We offer a comprehensive suite of services
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        <h1 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 text-center">
          Services we offer
        </h1>
        <div className="flex flex-wrap justify-center gap-12 mt-16 mb-14">
          {/* FRONT PART */}

          <div className="relative bg-white rounded-xl w-56 h-44 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transform transition-transform hover:rotate-y-180 cursor-pointer">
            <Image
              src="/pen.svg"
              alt="Icon"
              className="mb-2"
              width={50}
              height={40}
            />
            <h3 className="text-md text-gray-500">BUSINESS RETURN</h3>
            <p className="text-sm  mt-2 text-gray-500">
              Vorem ipsum dolor sit amet consectetur ipsum dolor
            </p>
            <div className="absolute w-full rotate-y-180 rounded-xl border-2 border-blue-400 bg-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="flex items-center justify-evenly text-left ml-4">
                <ul className=" ">
                  <li className="flex items-center text-black mt-2   ">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                  <li className="flex items-center text-black mt-1">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="mt-2 rounded-xl">
                <Link href="services">
                  <div className="text-sm text-semibold text-black flex py-4 bg-blue-100 p-2 rounded border-b-2 border-blue-400">
                    Learn more <GoArrowUpRight className="ml-2 text-2xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Other card components */}
          <div className="relative bg-white rounded-xl w-56 h-44 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transform transition-transform hover:rotate-y-180 cursor-pointer">
            <Image
              src="book.svg"
              alt="Icon"
              className="mb-2"
              width={50}
              height={40}
            />
            <h3 className="text-md text-gray-500">ITR PLANNING</h3>
            <p className="text-sm mt-2 text-gray-500">
              Vorem ipsum dolor sit amet consectetur ipsum dolor
            </p>
            <div className="absolute w-full rotate-y-180 rounded-xl border-2 border-blue-400 bg-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="flex items-center justify-evenly text-left ml-4">
                <ul className=" ">
                  <li className="flex items-center text-black mt-2   ">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                  <li className="flex items-center text-black mt-1">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="mt-2 rounded-xl">
                <Link href="services">
                  <div className="text-sm text-semibold text-black flex py-4 bg-blue-100 p-2 rounded border-b-2 border-blue-400">
                    Learn more <GoArrowUpRight className="ml-2 text-2xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-xl w-56 h-44 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transform transition-transform hover:rotate-y-180 cursor-pointer">
            <Image
              src="/circle.svg"
              alt="Icon"
              className="mb-2"
              width={50}
              height={40}
            />
            <h3 className="text-md text-gray-500">TAX PLANNING</h3>
            <p className="text-sm mt-2 text-gray-500">
              Vorem ipsum dolor sit amet consectetur ipsum dolor
            </p>
            <div className="absolute w-full rotate-y-180 rounded-xl border-2 border-blue-400 bg-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="flex items-center justify-evenly text-left ml-4">
                <ul className=" ">
                  <li className="flex items-center text-black mt-2   ">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                  <li className="flex items-center text-black mt-1">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="mt-2 rounded-xl">
                <Link href="services">
                  <div className="text-sm text-semibold text-black flex py-4 bg-blue-100 p-2 rounded border-b-2 border-blue-400">
                    Learn more <GoArrowUpRight className="ml-2 text-2xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-xl w-56 h-44 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transform transition-transform hover:rotate-y-180 cursor-pointer">
            <Image
              src="rupee.svg"
              alt="Icon"
              className="mb-2"
              width={50}
              height={40}
            />
            <h3 className="text-md text-gray-500">SALARY RETURN</h3>
            <p className="text-sm mt-2 text-gray-500">
              Vorem ipsum dolor sit amet consectetur ipsum dolor
            </p>
            <div className="absolute w-full rotate-y-180 rounded-xl border-2 border-blue-400 bg-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="flex items-center justify-evenly text-left ml-4">
                <ul className=" ">
                  <li className="flex items-center text-black mt-2   ">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                  <li className="flex items-center text-black mt-1">
                    <svg
                      viewBox="0 0 8 8"
                      className="w-3 h-3 mr-2"
                      style={{ fill: "blue" }}
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Vorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
              <div className="mt-2 rounded-xl">
                <Link href="services">
                  <div className="text-sm text-semibold text-black flex py-4 bg-blue-100 p-2 rounded border-b-2 border-blue-400">
                    Learn more <GoArrowUpRight className="ml-2 text-2xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  mt-20 px-14 ">
          <h1 className="flex justify-center items-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 py-6 sm:py-8 md:py-10 text-center">
            User Story
          </h1>
          <div className="flex flex-col gap-20  md:flex-col lg:flex-row justify-between mt-14">
            <div className="w-full sm:w-1/4  mb-20 sm:mb-0  " id="id-1">
              <div className="mx-auto w-48">
                <Image
                  src="/screen.svg"
                  width={350}
                  height={550}
                  className="mx-auto"
                />
              </div>
              <h1 className="flex justify-center font-bold items-center px-5 my-4">
                Korem ipsum
              </h1>
              <p className="text-center px-5">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="w-full sm:w-1/4 mb-20 sm:mb-0  "  id="id-2">
              <div className="mx-auto w-48">
                <Image
                  src="bookpen.svg"
                  width={200}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <h1 className="flex justify-center font-bold  items-center px-5 my-4">
                Korem ipsum
              </h1>
              <p className="text-center px-5">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="w-full sm:w-1/4 mb-8 sm:mb-0" id="id-3"  >
              <div className="mx-auto w-48">
                <Image
                  src="Tick.svg"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h1 className="flex justify-center font-bold items-center px-5 my-4">
                Korem ipsum
              </h1>
              <p className="text-center px-5">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="w-full sm:w-1/4 mb-8 sm:mb-0 " id="id-4" >
              <div className="mx-auto w-48">
                <Image
                  src="screen1.svg"
                  width={200}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <h1 className="flex justify-center font-bold  items-center px-5 my-4">
                Korem ipsum
              </h1>
              <p className="text-center px-5 ">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Korem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <h1 className="flex justify-center items-center font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl px-4 py-6 sm:py-8 md:py-10 mt-6 sm:mt-8 md:mt-10 text-center">
          What User say about us
        </h1>
        <div className="relative w-full mx-auto   mt-2">
          <div className="carousel-inner overflow-hidden relative">
            <div
              className="carousel-items-wrapper flex duration-700 transition-transform ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="carousel-item flex-shrink-0 w-full"
                >
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
                      <span className="text-xs sm:text-sm">
                        {item.userName}
                      </span>
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

          <div className="mt-32   w-full pb-72">
            <div className="flex justify-center text-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
                Pricing Plans
              </h1>
            </div>

            <div class="crousel-wrap">
              <Carousel
                itemsToScroll={1}
                breakPoints={breakPoints}
                className="mb-32 lg:px-24 "
                itemPadding={[20, 20, 20, 20]}
                itemsToShow={1}
              >
                <div className=" sm:w-1/4 md:w-1/2 lg:w-full w-[256px]  p-4 bg-white border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300">
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4 my-7 -translate-x-3">
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button
                    className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl" />
                  </button>
                  <PurchaseModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    services={services}
                  />
                </div>
                {/* className=" sm:w-1/4 lg:w-full w-[256px]  p-4 bg-white border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300" */}

                <div className="lg:w-full md:w-1/2 w-[256px] p-6  -translate-y-2  bg-white border-gray-200 rounded-3xl shadow-lg sm:p-10 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-400 h-[500px]">
                  <span className="bg-blue-100 text-black px-4 py-3 rounded">
                    Popular
                  </span>
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4  my-7 -translate-x-3">
                    <li className="flex ">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white">
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl" />
                  </button>
                </div>
                <div className=" sm:w-1/4 md:w-1/2 lg:w-full w-[256px]  p-4 bg-white border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300">
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4 my-7 -translate-x-3">
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white">
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl" />
                  </button>
                </div>

                <div className=" sm:w-1/4 md:w-1/2 lg:w-full w-[256px]  p-4 bg-white  border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300">
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4 my-7 -translate-x-3">
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white">
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl " />
                  </button>
                </div>
                <div className=" sm:w-1/4 md:w-1/2 lg:w-full w-[256px]  p-6 bg-white -translate-y-3  border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300 h-[500px]">
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4 my-7 -translate-x-3">
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white">
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl" />
                  </button>
                </div>
                <div className=" sm:w-1/4 md:w-1/2 lg:w-full w-[256px]  p-4 bg-white border-gray-200 rounded-3xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-2 hover:border-orange-300">
                  <h5 className="mb-1 mt-5 text-xl font-medium">
                    Professional Income
                  </h5>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    lorem ispum dior btet
                  </p>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold mr-3 text-orange-400">
                      &#8377;
                    </span>
                    <span className="text-xl font-extrabold tracking-tight text-orange-400">
                      200
                    </span>
                    <span className="ms-1 text-md font-normal text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="space-y-4 my-7 -translate-x-3">
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 px-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                    <li className="flex  decoration-gray-500">
                      <Image
                        src="midcircle.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 whitespace-nowrap truncate sm:truncate md:truncate">
                        Borem ipsum dolor sit amet,amet
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white flex items-center text-orange-400 text-lg py-2 px-4  rounded-md hover:bg-orange-400 focus:outline-none border border-orange-400 focus:ring-2 focus:ring-orange-300 hover:text-white">
                    Buy now!
                    <MdKeyboardDoubleArrowRight className="ml-2 text-3xl" />
                  </button>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <Footer />
        <ConnectLinesWrapper elements={ELEMENTS} />
      </div>
    
  );
}
