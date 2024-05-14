import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="lg:my-6 bg-[#f4f4f4]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl  text-gray-900">
              About
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I am a Howard University Computer Information Systems alumnus,
              originally from Flint, MI, and San Bernardino, CA. As a software
              engineer, I have a strong foundation in full-stack development,
              with growing expertise in AR/VR/XR and video game development.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Almost two years into my career, I&apos;ve worked as a junior
              full-stack Java developer. I have also dedicated countless hours
              to coding boot camps and am currently working towards completing
              multiple professional certifications to enhance my skill set.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/IMG_4445.JPG"
              alt="Julian Houston"
              width={626}
              height={626}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Technologies I&apos;ve Worked With
            </h2>
            {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p> */}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {/* Front End Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Front End
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/reactLogo.png"
                    alt="React / React Native"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>
                    React / React Native
                  </span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/htmlLogo.png"
                    alt="HTML"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>HTML</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/cssLogo.png"
                    alt="CSS"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>CSS</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/bootstrapLogo.png"
                    alt="Bootstrap CSS"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Bootstrap</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/tailwindLogo.png"
                    alt="Tailwind CSS"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Tailwind</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/threejsLogo.png"
                    alt="Three.js"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Three.js</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/nextjsLogo.png"
                    alt="Next.js"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Next.js</span>
                </div>
              </div>
            </section>

            {/* Back End Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Back End
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/mysqlLogo.png"
                    alt="MySQL"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>MySQL</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/nodeLogo.png"
                    alt="Node.js"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Node.js</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/springLogo.png"
                    alt="Spring"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Spring Framework</span>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Languages
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/javaLogo.png"
                    alt="Java"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Java</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/javascriptLogo.png"
                    alt="JavaScript"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>JavaScript</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/typescriptLogo.png"
                    alt="Typescript"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Typescript</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/jsonLogo.png"
                    alt="JSON"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>JSON</span>
                </div>
              </div>
            </section>

            {/* Devops Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Devops
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/dockerLogo.png"
                    alt="Docker"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Docker</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/vercelLogo.png"
                    alt="Vercel"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Vercel</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/jenkinsLogo.png"
                    alt="Jenkins"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Jenkins</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/awsLogo.png"
                    alt="AWS"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>AWS</span>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Tools
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/bitbucketLogo.png"
                    alt="BitBucket"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>BitBucket</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/blenderLogo.png"
                    alt="Blender"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Blender</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/dbeaverLogo.png"
                    alt="DBeaver"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>DBeaver</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/gitLogo.png"
                    alt="Git"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Git</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/npmLogo.png"
                    alt="NPM"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>NPM</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/unityLogo.png"
                    alt="Unity"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Unity</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/vitejsLogo.png"
                    alt="Vite"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Vite</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/figmaLogo.png"
                    alt="Figma"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Figma</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/githubLogo.png"
                    alt="Github"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Github</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/eclipseLogo.png"
                    alt="Eclipse"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Eclipse</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/jiraLogo.png"
                    alt="Jira"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Jira</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/vscLogo.png"
                    alt="Visual Studio Code"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Visual Studio Code</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/wordpressLogo.png"
                    alt="WordPress"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>WordPress</span>
                </div>
              </div>
            </section>

            {/* Testing Section */}
            <section>
              <h2 className="text-gray-900 bg-[#f4f4f4] rounded-sm font-medium text-xl">
                Testing
              </h2>
              <div className="grid grid-cols-3 gap-2 p-5">
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/junitLogo.png"
                    alt="JUnit"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>JUnit</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/mochaLogo.png"
                    alt="Mocha"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Mocha</span>
                </div>
                <div
                  className={`${styles.toolTip} text-center text-gray-500 dark:text-gray-400`}
                >
                  <Image
                    src="/logos/postmanLogo.png"
                    alt="Postman"
                    width={64}
                    height={64}
                  />
                  <span className={styles.toolTipText}>Postman</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
