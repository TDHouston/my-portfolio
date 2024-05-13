import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Projects from "./Projects";
import About from "../about/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
    </>
  );
};

export default HomePage;
