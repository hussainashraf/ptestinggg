"use client"
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import axios from "axios"; // Import Axios
import { ToastContainer, toast } from 'react-toastify';
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: ""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://154.49.243.15:7500/api/contacts", formData);
      // Check if the request was successful
      if (response.status === 201) {
        // Handle success, maybe show a success message
        console.log("Form submitted successfully");
        toast.success('We Will Get Back to You Soon',{
          position: "top-right"
        })
      }
      // Clear form fields whether the request was successful or not
   
    } catch (error) {
      // Handle errors, maybe show an error message
      console.error(error);
      toast.error(error.response.data.error, { // Access the error message from the response
        position: "top-right"
      });
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      zipcode: ""
    });
  };
  

  return (
    <div className="bg-gradient-to-r from-[rgba(254,242,232,0.5)] to-[rgba(240,243,254,0.5)]">
      <Navbar />
      <img
        src="/contact.png"
        alt=""
        className="h-96 w-full object-cover md:w-1/2 z-10"
      />
      <div className="relative flex flex-col md:flex-row -mt-64 overflow-x-hidden">
        <div className="z-20  md:mx-0 md:ml-20 text-left text-white md:w-1/2 lg:w-1/3 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Contact Us
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-5 md:flex-row sm:mx-auto overflow-x-hidden">
        <div className="w-full md:w-1/2 px-7 sm:px-24 md:px-20 lg:px-20 overflow-x-hidden mt-1 md:mt-10 md:max-h-full">
          <iframe
            className="w-full h-[500px] rounded-xl mt-44 max-h-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229183.17101267905!2d85.3112034!3d23.3790161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11e1d8884b3%3A0x8ee93fe47cb05422!2sPATHAK%20ASSOCIATES!5e0!3m2!1sen!2suk!4v1631299062624!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Div for "Contact Us" content */}
        <div className="w-full px-5 lg: inline-block md:w-1/2 z-23 mt-10 md:top-auto md:left-auto md:ml-0 md:mt-10">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="text-md text-black">Feel free to</div>
                  <h2 className="block mt-1 text-3xl leading-tight font-medium text-orange-500">
                    Contact Us
                  </h2>
                </div>
             
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                        fill="#B2B2B2"
                      />
                      <path
                        d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
                        fill="#B2B2B2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Phone number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <ToastContainer />
                {/* Enter your name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5ZM12.5565 5.988C11.3355 5.988 10.3785 6.3345 9.669 7.0275C8.943 7.7205 8.5965 8.6775 8.5965 9.8985H10.4775C10.4775 9.2055 10.6095 8.661 10.89 8.2815C11.2035 7.8195 11.715 7.605 12.441 7.605C13.002 7.605 13.4475 7.7535 13.761 8.067C14.058 8.3805 14.223 8.8095 14.223 9.354C14.223 9.7665 14.0745 10.1625 13.7775 10.5255L13.5795 10.7565C12.507 11.7135 11.8635 12.4065 11.649 12.852C11.418 13.2975 11.319 13.842 11.319 14.469V14.7H13.2165V14.469C13.2165 14.073 13.299 13.7265 13.464 13.3965C13.6125 13.0995 13.827 12.819 14.124 12.5715C14.916 11.8785 15.3945 11.433 15.543 11.268C15.939 10.74 16.1535 10.0635 16.1535 9.2385C16.1535 8.232 15.8235 7.44 15.1635 6.8625C14.5035 6.2685 13.629 5.988 12.5565 5.988ZM12.2595 15.5085C11.9231 15.4994 11.5967 15.624 11.352 15.855C11.2312 15.9688 11.1362 16.1073 11.0736 16.261C11.0109 16.4147 10.9821 16.5801 10.989 16.746C10.989 17.109 11.1045 17.406 11.352 17.637C11.5949 17.8728 11.921 18.0032 12.2595 18C12.6225 18 12.9195 17.8845 13.167 17.6535C13.2904 17.5373 13.388 17.3965 13.4533 17.2401C13.5187 17.0838 13.5505 16.9154 13.5465 16.746C13.5497 16.5806 13.5191 16.4163 13.4567 16.2631C13.3943 16.11 13.3013 15.9711 13.1835 15.855C12.9324 15.6236 12.6009 15.4993 12.2595 15.5085Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-1/2 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
                >
                  Request a call
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* style={{ background: "radial-gradient(#EDF0FD, #FFF4EA)" }} */}
      <div className="w-full border-none mt-10 mb-72 sm:mt-20 lg:mt-0 mx-auto h-full overflow-hidden p-4 flex flex-col md:flex-row items-center ">
        <div className="md:w-1/2 flex flex-col md:ml-48 lg:ml-64 border-none">
          <div className="px-12 sm:px-20 lg:px-0 whitespace-nowrap">
            <div className="flex items-center mb-3">
              <div className="rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Image src="/PC.svg" width={90} height={90} alt="mail icon" />
              </div>
              <a
                href="tel:+917783042999"
                className="text-md sm:text-md md:text-lg lg:text-lg font-semibold"
                style={{ color: "#3B4E91" }}
              >
                +91 7783042999
              </a>
            </div>
            <div className="flex items-center mb-3">
              <div className=" rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Image src="/Mail.svg" width={90} height={90} alt="mail icon" />
              </div>
              <a
                href="mailto:pathakassociates.ranchi@gmail.com"
                className="text-md sm:text-md md:text-lg lg:text-lg border-none font-semibold"
                style={{ color: "#3B4E91" }}
              >
                pathakassociates.ranchi@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <div className=" rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Image src="/L1M.svg" width={190} height={190} alt="Location icon" />
              </div>
              <a
                href="https://www.google.com/maps?q=302, Modi Heights Ratu Road Ranchi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md sm:text-md md:text-lg lg:text-lg font-semibold"
                style={{ color: "#3B4E91" }}
              >
                302, Modi Heights Ratu Road Ranchi
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 -translate-y-20 lg:mt-32 mt-44 sm-mt-20 md:h-auto md:overflow-hidden lg:mb-24">
          <Image
            src="ContactUs.svg" // Replace with your image source
            alt="Illustration"
            width={400}
            height={300}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
