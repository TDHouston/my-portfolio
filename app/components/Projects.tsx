import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="bg-[#f4f4f4] antialiased p-4 mx-auto">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Full Stack Engineering | XR Engineering | 3D Generalist
          </p>
        </div>

        <div
          className="grid mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div className="space-y-4">
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Full Stack Java Engineer
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900">
              Tech Chefs | Capstone Project
            </h3>
            <Image
              className="mx-auto"
              src="/techchefs.png"
              alt=""
              width={600}
              height={0}
            />
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Tech Chefs is a recipe customization app that allows users to
              create, post, and share recipes online, and then generate a
              shopping list based on the recipes they select or create. This app
              was developed in five days by a team of three as part of a
              capstone project.
            </p>
            <p className="text-sm font-extrabold">
              Technologies: Java, Javascript, HTML/CSS, SQL, Bootstrap, Node.js,
              React, Spring Maven, JUnit, JWT
            </p>
            <Link
              href="https://github.com/Tech-Chefs/TechChefsCapstone"
              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
              target="_blank"
            >
              View Code
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Creative Developer
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900">
              WebGL Portfolio
            </h3>
            <video src="/webglClip.mov" autoPlay loop playsInline muted/>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              This immersive portfolio prototype is a gateway to 3D, AR, VR, and
              MR, documenting my journey with cutting-edge technologies and
              immersive experiences. The ultimate goal is to gamify the
              portfolio, creating an interactive journey that captivates and
              inspires.
            </p>
            <p className="text-sm font-extrabold">
              Technologies: Javascript, Three.js, HTML/CSS, Blender, Node.js,
              React, Vite, Vercel
            </p>
            <Link
              href="https://www.juhous.com/"
              className="text-white mr-2 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              role="button"
              target="_blank"
            >
              Try Demo
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3 a1 1 0 110-2h11.586l-2.293-2.293 a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://github.com/TDHouston/exhibitsArchive"
              className="text-white ml-2 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
              target="_blank"
            >
              View Code
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3 a1 1 0 110-2h11.586l-2.293-2.293 a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* <div className="space-y-4">
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Adobe Inc.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Logo design
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family, and communities
              of people who share your interests.
            </p>
            <a
              href="#"
              title=""
              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              View case study
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4 a1 1 0 01-1.414-1.414L14.586 11H3 a1 1 0 110-2h11.586l-2.293-2.293 a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
