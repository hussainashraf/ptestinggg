"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BiRightTopArrowCircle } from "react-icons/bi";
import axios from "axios";
import moment from "moment";

import { CircularProgress } from "@mui/material";

const images = [
  "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjB3b3JrJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Blogs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://154.49.243.15:7500/api/blogs");
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setShowDescription1(true);
  };

  const handleMouseLeave = () => {
    setShowDescription1(false);
  };

  const handleMouseEnter2 = () => {
    setShowDescription2(true);
  };

  const handleMouseLeave2 = () => {
    setShowDescription2(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const displayedBlogs = blogs.slice(0, currentPage * blogsPerPage);

  const loadMoreBlogs = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full bg-gradient-to-r from-[rgba(254,242,232,0.6)] to-[rgba(240,243,254,0.6)">
      <div className="">
        <Navbar />
        <div>
          <img
            src={images[currentImageIndex]}
            alt=""
            className="h-64 w-full object-cover z-20"
          />
        </div>
        <div className="flex items-center justify-evenly flex-wrap px-5 sm:px-20">
          {/* Card 1 */}
          {displayedBlogs.slice(0, 2).map((blog, index) => (
            <div
              key={blog._id}
              className="bg-white z-30 -translate-y-32 rounded-lg shadow-lg w-full md:w-1/3 md:max-w-md mb-8 md:mb-0"
              style={{ borderTop: "3px solid #508AFF", borderRadius: "4px" }}
              onMouseEnter={index === 0 ? handleMouseEnter : handleMouseEnter2}
              onMouseLeave={index === 0 ? handleMouseLeave : handleMouseLeave2}
            >
              <div className="p-6">
                <div className="flex mb-4">
                  <p className="text-sm text-gray-600">
                    {moment(blog.time).format("LL")}
                  </p>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                    index === 0 && showDescription1
                      ? "max-h-48"
                      : index === 1 && showDescription2
                      ? "max-h-48"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 mb-4 line-clamp-4 truncate">
                    {blog.content}
                  </p>
                </div>
                <a
                  href={`/blogs/${blog._id}`}
                  className="text-orange-500 inline-flex items-center"
                >
                  View Blog <BiRightTopArrowCircle className="ml-1 w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-5xl ml-10 mb-32 sm:ml-10 lg:pl-20 item-start inline-block font-bold md:inline-block">
          All Blogs
        </h1>

        <div className="relative mb-[500px] sm:mb-44 lg:mb-96">
          <div className="flex justify-center items-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {displayedBlogs.map((blog, index) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm transition duration-300 border border-gray-300 hover:border-orange-500"
                >
                  <div className="flex pt-8 pb-8 justify-center items-center">
                    <img
                      src={blog.imageUrl || "https://via.placeholder.com/150"}
                      alt="Blog"
                      className="h-60 w-80"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex mb-4">
                      <p className="text-sm text-gray-600">
                        {moment(blog.time).format("LL")}
                      </p>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-4 truncate">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                      {blog.content}
                    </p>
                    <a
                      href={`/blogs/${blog._id}`}
                      className="text-orange-500 inline-flex text-lg items-center"
                    >
                      View Blog
                      <BiRightTopArrowCircle className="ml-1 w-8 h-8" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {currentPage * blogsPerPage < blogs.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMoreBlogs}
                className="bg-orange-400 text-white py-2 px-4 rounded"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
