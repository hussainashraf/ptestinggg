"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { CiLinkedin } from "react-icons/ci";
import axios from 'axios'
export default function About() {
const [email, setEmail] = useState('');
const [isValid, setIsValid] = useState(true);
const [emailError, setEmailError] = useState('');

const handleChange = (e) => {
  setEmail(e.target.value);
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    setEmailError('Please enter a valid email address');
    return;
  }
  try {
    await axios.post("http://154.49.243.15:7500/api/efiling", { to: email });
    console.log('Email sent successfully');
    toast.success("Mail Sent For E-Filing");
    setEmail('');  // Reset email input
  } catch (error) {
    console.error(error);
    toast.error("Failed to subscribe");
  }
};
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[rgba(254,242,232,0.6)] to-[rgba(240,243,254,0.6)">
      <Navbar />
      <div
        className="flex flex-col md:flex-row gap-10 border-none "
        style={{
          backgroundImage: "url('recbg.svg')",
          backgroundSize: "contain",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:w-1/2 mx-auto px-4 md:px-10 mt-10 sm:mt-14 lg:mt-20">
          <h1 className="text-2xl  lg:ml-16 sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 md:px-8 lg:px-16  md:text-left">
            About Us
          </h1>
          <div>
            <p className="mb-4 mt-5 p-2 text-base md:text-lg text-gray-700 text-justify lg:ml-16">
              Pathak Associates is a comprehensive online platform that offers a
              wide range of services related to financial compliance. With a
              primary focus on facilitating Income Tax Return filing solutions,
              we specialize in services such as
              <span className="font-semibold ml-2">
                GST registration, GST filing, tax audits, company registration,
                and digital signature provisions.
              </span>
            </p>
            <p className="mb-3 mt-3 p-2 text-base md:text-lg text-justify lg:ml-16">
              By combining our expertise in these areas, Pathak Associates
              simplifies complex financial processes for individuals and
              businesses. Their user-friendly website ensures a seamless
              experience for clients, guiding them through each step of the
              process.
            </p>
            <p className="mt-5 mb-3 p-2 text-base md:text-lg text-justify lg:ml-16">
              Our dedication to accuracy, efficiency, and customer satisfaction
              makes Pathak Associates a trusted resource for all tax and
              compliance-related needs.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 lg:ml-16">
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Enter email here"
          value={email}
          onChange={handleChange}
          className={`w-full md:w-64 mt-4 p-2 rounded-sm focus:outline-none ${
            isValid ? 'focus:border-blue-500' : 'border-red-500'
          }`}
        />
        {!isValid && (
          <span className="text-red-500 text-sm mt-1">Please enter a valid email.</span>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 text-white flex items-center justify-center rounded-md bg-orange-500 transform hover:scale-105 duration-500 ease-in-out hover:bg-orange-300 focus:ring-4 focus:ring-orange-300 hover:text-white focus:bg-orange-400"
      >
        Start E-Filing Now
        <img src="/arrow.svg" alt="" className="ml-2" />
      </button>
   <ToastContainer/>
    </form>
        </div>
        <div className="hidden w-full md:w-1/2 lg:flex justify-center items-center">
          <Image src="AboutUs.svg" alt="" width={400} height={300} />
        </div>
      </div>
      <article className="mt-8 md:mt-36 lg:mt-36 lg:ml-20 md:ml-16 relative inline-block">
        <h3 className="text-2xl md:text-4xl mt-10 lg:mt-20 font-bold text-center md:text-left">
          Beyond Tax Filing: A Range of Services
          <br />
          to Support Your Financial Journey
        </h3>
      </article>
      <div className="flex justify-center mx-4 mt-10 lg:-translate-y-10 items-center lg:mb-10">
        <Image src="abtzig.svg" alt="img" width={1200} height={400} />
      </div>
      <h2 className="text-3xl md:text-5xl ml-4 md:ml-10 font-semibold mt-12 md:mt-24">
        Our Vision
      </h2>
      <div className="flex flex-col pt-10 md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4 md:p-8 z-10 relative">
          <Image
            src="/abtmain.svg"
            alt="Our Vision"
            width={1200}
            height={300}
            className="w-full h-full z-10"
          />
        </div>

        <div className="w-full md:w-1/2 px-4 lg:px-8">
          <div className="bg-white shadow-md px-6 md:px-10 py-6 md:py-10 rounded-lg">
            <p className="mb-4 text-sm md:text-lg text-justify text-gray-600">
              At Pathak Associates, our vision is to be the leading provider of
              comprehensive financial compliance solutions. We strive to empower
              individuals and businesses by simplifying complex processes
              related to <strong>income tax return filing</strong>,
              <strong>GST registration and filing</strong>,
              <strong>tax audits</strong>, <strong>company registration</strong>
              , and <strong>digital signatures</strong>.
            </p>
            <p className="mb-4 text-sm md:text-lg text-justify">
              We envision a future where everyone can navigate financial
              compliance with ease, saving time and resources. By combining
              cutting-edge technology with our expertise, we aim to deliver
              accurate, efficient, and user-friendly services that exceed our
              client&apos;s expectations.
            </p>
            <p className="text-sm md:text-lg text-justify">
              Our vision drives us to continuously innovate and adapt to the
              evolving needs of our customers, ensuring their financial success
              and peace of mind.
            </p>
          </div>
        </div>
      </div>
      <h2 className="font-bold mt-32 text-3xl md:text-5xl flex justify-center items-center">
        Pathak Associate&apos;s
      </h2>
      <div className="flex flex-col md:flex-row mb-60 lg:mb-96 items-center justify-center mt-10   pt-10">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 mb-8 md:mb-0"
        >
          <div
            className="w-80 h-80 bg-white rounded-lg shadow-lg"
            style={{
              borderTop: "2px solid #508AFF",
              borderRadius: "4px",
            }}
          >
            <div className="mt-10 rounded-xl">
              <img
                src="/placeholder-image.jpg"
                alt=""
                className="w-48 h-48 bg-gray-200 rounded-full mx-auto"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold flex items-center justify-center">
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <CiLinkedin className="mr-2 text-2xl hover:text-blue-600 transition-colors duration-300" />
                  </Link>
                  Sanjay Pathak
                </h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/company/brihat-infotech/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 mb-8 md:mb-0"
        >
          <div
            className="w-80 h-80 bg-white rounded-lg shadow-lg"
            style={{
              borderTop: "2px solid #508AFF",
              borderRadius: "4px",
            }}
          >
            <div className="mt-10 rounded-xl">
              <img
                src="/placeholder-image.jpg"
                alt=""
                className="w-48 h-48 bg-gray-200 rounded-full mx-auto"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold flex items-center justify-center">
                  <Link
                    href="https://www.linkedin.com/company/brihat-infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <CiLinkedin className="mr-2 text-2xl hover:text-blue-600 transition-colors duration-300" />
                  </Link>
                  Brihat Infotech
                </h2>
                <p className="text-gray-500">Tech Partner</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
