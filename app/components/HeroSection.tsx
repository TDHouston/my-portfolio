import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React from "react";
import HeroCanvas from "./HeroCanvas";

const HeroSection = () => {
  return (
    <section className="bg-white lg:my-6 mx-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:flex-col lg:justify-center lg:items-center text-center lg:text-left">
        <div className="mr-auto place-self-center lg:col-span-4 lg:py-8 lg:pr-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-gray-900">
            My name is Julian Houston and I am a Software Engineer living in
            Brooklyn, NY.
          </h1>
          <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            I am passionate about transforming digital concepts into engaging
            realities. My portfolio showcases my expertise in full-stack
            engineering and immersive experiences.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-8 lg:flex h-[100%] w-[100%]">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
