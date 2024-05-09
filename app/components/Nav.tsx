'use client'
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "./ContactModal"; // Adjust the path to where your ContactModal is located

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // State for contact modal visibility

  function getMenuClasses() {
    if (isOpen) {
      return "flex absolute top-[60px] bg-gray-800 w-full p-4 left-0 gap-10 flex-col";
    } else {
      return "hidden md:flex";
    }
  }

  // Toggle contact modal visibility
  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <nav className="text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Julian Houston
        </a>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-gray-300 flex items-center">
            Home
          </Link>
          <Link
            href="/about"
            className="mx-2 hover:text-gray-300 flex items-center"
          >
            About
          </Link>
          {/* <Link href="/resume" className="mx-2 hover:text-gray-300 flex items-center">Resume</Link> */}
          <Link
            href="/projects"
            className="mx-2 hover:text-gray-300 flex items-center"
          >
            Projects
          </Link>
          <button
            type="button"
            className="mx-2 hover:text-gray-300 flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={toggleContactModal}
          >
            Contact
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Modal Component */}
      <ContactModal isOpen={isContactModalOpen} onClose={toggleContactModal} />
    </nav>
  );
};

export default Nav;
