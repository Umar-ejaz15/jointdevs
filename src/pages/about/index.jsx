import React from "react";
import Hero from "./components/Hero";
import AboutOurCompanay from "./components/AboutOurCompanay";
import WhyUs from "./components/WhyUs";
import VideoConsole from "../home/components/VideoConsole";
import Footer from "../home/components/Footer";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen    bg-white dark:bg-black text-black dark:text-white">
        <Hero />
        <AboutOurCompanay />
        <WhyUs/>
        <VideoConsole/>
        <Footer/>
      </div>
    </>
  );
};

export default About;
