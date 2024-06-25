"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white w-full border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/PI.svg" className="h-8" alt="Flowbite Logo" />
          </Link>
{/* 
          <div className="hidden md:flex md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-4 py-2 text-center"
            >
              Sign In
            </button>
          </div> */}

          <div className="md:hidden">
            <button
              type="button"
              className="text-white bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-4 py-2 text-center  mt-1"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className={pathname === "/" ? "active" : ""}>
                <Link href="/" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>

              <li className={pathname === "/about" ? "active" : ""}>
                <Link href="/about" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li className={pathname === "/services" ? "active" : ""}>
                <Link href="/services" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li className={pathname === "/blogs" ? "active" : ""}>
                <Link href="/blogs" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    Blogs
                  </span>
                </Link>
              </li>
              <li className={pathname === "/pricing" ? "active" : ""}>
                <Link href="/pricing" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    Pricing
                  </span>
                </Link>
              </li>
              <li className={pathname === "/contact" ? "active" : ""}>
                <Link href="/contact" passHref>
                  <span className="block py-3 px-5 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}