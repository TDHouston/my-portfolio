import React from "react";
import Nav from "../components/Nav/Nav";
import HeroSection from "../components/HeroSection/HeroSection";
import FirstProject from "../components/Projects/1/FirstProject";
import SecondProject from "../components/Projects/2/SecondProject";
import ThirdProject from "../components/Projects/3/ThirdProject";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <FirstProject />
      <SecondProject />
      <ThirdProject />
      <Footer />
    </>
  );
};

export default HomePage;
