import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            My name is Julian Houston and I am Software Engineer living in
            Brooklyn, NY.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am a Full-Stack Developer specializing in immersive web and XR
            experiences. I'm dedicated to transforming digital concepts into
            engaging realities, with a portfolio that spans robust web
            architectures and dynamic 3D animations.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            width={626}
            height={626}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
