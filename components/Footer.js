"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Footer() {
  const [isAccordionOpen1, setIsAccordionOpen1] = React.useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = React.useState(false);
  const [isAccordionOpen3, setIsAccordionOpen3] = React.useState(false);
  const [isAccordionOpen4, setIsAccordionOpen4] = React.useState(false);
  const [isAccordionOpen5, setIsAccordionOpen5] = React.useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://154.49.243.15:7500/api/sendemail", {
        to: email,
      });
      // Handle success, maybe show a success message
      console.log("Email sent successfully");
      toast.success("Subscribed");
    } catch (error) {
      // Handle errors, maybe show an error message
      console.error(error);
    }
    // Clear email input after submission
    setEmail("");
  };

  return (
    <>
      <div className=" z-10 bg-blue-100  ">
        <div className=" z-23  flex  justify-center items-center h-10">
          <div className=" -translate-y-32 z-30">
            <div className="flex  justify-center items-center mt-8 px-4 lg:px-6">
              <div className="sm:mx-auto lg:mx-20 sm:text-center">
                <div className="    ">
                  <div className="flex w-[800px]flex-col mt-32 sm:mt-20 sm:flex-row md:flex-row lg:flex-row  items-center shadow-lg rounded-lg bg-white ">
                    {/* <!-- Image Div --> */}
                    <div className="hidden sm:block">
                      <Image
                        src="/MainFooter.svg"
                        alt="Image"
                        width={460}
                        height={100}
                      />
                    </div>

                    {/* <!-- Content Div --> */}
                    <div className=" p-5 lg:p-10 lg:mx-14 py-6 text-left">
                      <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 leading-relaxed font-extrabold">
                        Stay Updated With <br /> Financial Compliance
                      </h2>
                      <p className="mt-4 mb-6 max-w-md text-sm sm:text-base text-gray-700 font-light lg:whitespace-nowrap ">
                        Subscribe to our newsletter for compliance updates and
                        tips
                      </p>
                      <form onSubmit={handleSubmit} className="mb-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
                          <input
                            className="block w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            type="email"
                            placeholder="Enter email here"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="py-3 px-6 lg:ml-2 mt-2 sm:mt-0 text-sm font-medium text-white rounded-md bg-orange-500 border border-orange-600 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300"
                          >
                            Get Updates
                          </button>
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  whitespace-nowrap overflow-hidden">
          <h1 className="text-2xl sm:text-xl mt-40 sm:mt-40    md:text-4xl lg:text-5xl font-bold py-6">
            Frequently Asked Question
          </h1>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-3/5 xl:w-2/3 justify-center items-center">
          <div className="flex flex-col w-[80vw] mb-2 ">
            <Accordion
              className="rounded-2xl"
              expanded={isAccordionOpen1}
              onChange={() => setIsAccordionOpen1(!isAccordionOpen1)}
              sx={{
                marginTop: "40px",
                // borderRadius: "8px",
                backgroundColor: "#FFFF",
                padding: "8px",
                borderLeft: "4px solid #508AFF",
                marginBottom: "8px",
                boxShadow: isAccordionOpen1
                  ? "0px 4px 8px rgba(80, 138, 255, 0.2)"
                  : "none", // Blue shadow when accordion is open
                // transition: "box-shadow 0.3s ease-in-out"
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  className="text-xs sm:text-base md:text-lg lg:text-xl md:font-bold lg:font-bold text-gray-800"
                >
                  What services does Pathak Associates offer?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-700">
                  Pathak Associates provides professional tax consulting
                  services, including tax planning, tax preparation, tax audit
                  representation, and other related services. We offer
                  personalized solutions for individuals and businesses to meet
                  their unique tax needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion components with similar structure */}
          </div>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-3/5 xl:w-2/3 justify-center items-center">
          <div className="flex flex-col w-[80vw] mb-2">
            <Accordion
              expanded={isAccordionOpen2}
              onChange={() => setIsAccordionOpen2(!isAccordionOpen2)}
              sx={{
                marginTop: "40px",
                // borderRadius: "8px",
                backgroundColor: "#FFFF",
                padding: "8px",
                borderLeft: "4px solid #508AFF",
                marginBottom: "8px",
                boxShadow: isAccordionOpen2
                  ? "0px 4px 8px rgba(80, 138, 255, 0.2)"
                  : "none", // Blue shadow when accordion is open
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800"
                >
                  
                  Is Pathak Associates qualified to provide tax advice?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                className="py3"
                sx={{ borderRadius: "0 0 8px 8px" }}
              >
                <Typography className="text-gray-700">
                  Pathak Associates provides professional tax consulting
                  services, including tax planning, tax preparation, tax audit
                  representation, and other related services. We offer
                  personalized solutions for individuals and businesses to meet
                  their unique tax needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion components with similar structure */}
          </div>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-3/5 xl:w-2/3 justify-center items-center">
          <div className="flex flex-col w-[80vw] mb-2">
            <Accordion
              expanded={isAccordionOpen3}
              onChange={() => setIsAccordionOpen3(!isAccordionOpen3)}
              sx={{
                marginTop: "40px",
                // borderRadius: "8px",
                backgroundColor: "#FFFF",
                padding: "8px",
                borderLeft: "4px solid #508AFF",
                marginBottom: "8px",
                boxShadow: isAccordionOpen3
                  ? "0px 4px 8px rgba(80, 138, 255, 0.2)"
                  : "none", // Blue shadow when accordion is open
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6"  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800">
                  How can I schedule a consultation with Pathak Associates?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderRadius: "0 0 8px 8px" }}>
                <Typography className="text-gray-700">
                  Pathak Associates provides professional tax consulting
                  services, including tax planning, tax preparation, tax audit
                  representation, and other related services. We offer
                  personalized solutions for individuals and businesses to meet
                  their unique tax needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion components with similar structure */}
          </div>
        </div>{" "}
        <div className="flex w-full md:w-1/2 lg:w-3/5 xl:w-2/3 justify-center items-center">
          <div className="flex flex-col w-[80vw] mb-2">
            <Accordion
              expanded={isAccordionOpen4}
              className="rounded-xl"
              onChange={() => setIsAccordionOpen4(!isAccordionOpen4)}
              sx={{
                marginTop: "40px",
                // borderRadius: 20,
                // border-radius: "25px";
                backgroundColor: "#FFFF",
                padding: "8px",
                borderLeft: "4px solid #508AFF",
                marginBottom: "8px",
                boxShadow: isAccordionOpen4
                  ? "0px 4px 8px rgba(80, 138, 255, 0.2)"
                  : "none", // Blue shadow when accordion is open
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800"
                >
                  What information should I bring to the consultation?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderRadius: "0 0 8px 8px" }}>
                <Typography className="text-gray-700">
                  Pathak Associates provides professional tax consulting
                  services, including tax planning, tax preparation, tax audit
                  representation, and other related services. We offer
                  personalized solutions for individuals and businesses to meet
                  their unique tax needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion components with similar structure */}
          </div>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-3/5 xl:w-2/3 justify-center items-center">
          <div className="flex flex-col w-[80vw] mb-2">
            <Accordion
              expanded={isAccordionOpen5}
              onChange={() => setIsAccordionOpen5(!isAccordionOpen5)}
              sx={{
                marginTop: "40px",
                borderRadius: "8px",
                backgroundColor: "#FFFF",
                padding: "8px",
                borderLeft: "4px solid #508AFF",
                marginBottom: "10px",
                boxShadow: isAccordionOpen5
                  ? "0px 4px 8px rgba(80, 138, 255, 0.2)"
                  : "none", // Blue shadow when accordion is open
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800"
                >
                  How does Pathak Associates ensure the confidentiality of
                  client’s information?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderRadius: "0 0 8px 8px" }}>
                <Typography className="text-gray-700">
                  Pathak Associates provides professional tax consulting
                  services, including tax planning, tax preparation, tax audit
                  representation, and other related services. We offer
                  personalized solutions for individuals and businesses to meet
                  their unique tax needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion components with similar structure */}
          </div>
        </div>
        {/* Add more Accordion components with similar structure */}
        <div className="w-full  mt-20  whitespace-nowrap flex flex-col md:flex-row justify-center ">
          <div className="w-1/2  md:w-3/2 p-8">
            <div className="flex items-center mb-2 -translate-y-6 ml-1">
              <a href="/">
                <img
                  src="/PI.svg"
                  className="h-8 flex justify-start items-start"
                  alt="Logo"
                />
              </a>

              <p className="text-lg font-bold ml-1">PATHAK ASSOCIATES</p>
            </div>

            <p className="text-md mb-2 -translate-y-6 ml-3">
              Tax Advisory Firm
            </p>
            <div className="flex font-bold -translate-y-6 mb-2 ml-3">
              <a href="https://www.linkedin.com/" className="mr-4 text-3xl">
                <CiLinkedin />
              </a>
              <a href="https://www.facebook.com/" className="mr-4 text-3xl">
                <CiFacebook />
              </a>
              <a href="https://www.instagram.com/" className="mr-4 text-3xl">
                <CiInstagram />
              </a>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-3 md:gap-10 lg:gap-44 px-10 sm:px-10 md:px-20 lg:px-10 mb-4">
            <div className="mb-10">
              <h2 className="font-semibold text-lg mb-3">Company</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-md text-gray-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-md text-gray-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-md text-gray-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-md text-gray-600">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 w-full">
              <h2 className="font-semibold text-lg mb-3">Contact</h2>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+917783042999" className="text-md text-gray-600">
                    +91 7783042999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@pathakassociates.in"
                    className="text-md text-gray-600  text-wrap break-words sm:break-words md:break-words lg-break-normal"
                  >
                    support@pathakassociates.in
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-3">Visit Links</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-md text-gray-600">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md text-gray-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-md text-gray-600">
                    FAQ&apos;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
