"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { GoShareAndroid } from "react-icons/go";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import moment from "moment";

const Page = (props) => {
  const id = props.params.Id;
  const [blog, setBlog] = useState(null);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://154.49.243.15:7500/api/blogs/${id}`);
      setBlog(response.data); // Set the blog data to state
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <>
      <Navbar />
      <div className="container lg:mx-auto py-8 mb-64 lg:mt-10 overflow-hidden">
        {blog && (
          <>
            <header className="text-center mb-8 overflow-hidden">
              <h1 className="text-3xl font-bold lg:text-left lg:px-10">
                {blog.title}
              </h1>
              <div className="flex justify-between px-10 mt-10">
                <p className="text-gray-600 ">
                  {moment(blog.time).format("LL")}
                </p>
                <p className="text-2xl" onClick={toggleShareOptions}>
                  <GoShareAndroid />
                  {showShareOptions && (
                  <div className="share-options mt-4 gap-2">
                    <FacebookShareButton
                      url={`http://yourwebsite.com/pages/blogs/${id}`}
                      quote={blog.title}
                      size={32} round={false}
                      className="mx-2 text-lg"
                      
                    >
                    <FaFacebook />
                    </FacebookShareButton>
                    <TwitterShareButton
                     
                      url={`http://yourwebsite.com/pages/blogs/${id}`}
                      title={blog.title}
                      size={32} round={false}
                      className="mx-2"
                    >
                      <FaXTwitter />
                    </TwitterShareButton  >
                    {/* Add more share buttons for other social media platforms as needed */}
                  </div>
                )}
                </p>
            
              </div>
            </header>
            <div className=" mx-5 sm:mx-10 lg:mx-32 mt-20  overflow-hidden ">
              <img
                src={blog.imageUrl}
                alt="Featured Image"
                className=" flex justify-center items-center mb-8 rounded-lg"
              />
            </div>

            <div className="mb-8 px-10 overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 ">What is GST?</h2>
              <p className="mb-4">{blog.content}</p>
            </div>
          </>
        )}
      </div>
      {/* <Footer className="overflow-hidden" /> */}
    </>
  );
};

export default Page;
