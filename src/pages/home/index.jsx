import React from "react";
import Hero from "./components/Hero";
import Servicies from "./components/Servicies";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import VideoConsole from "./components/VideoConsole";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen    bg-white dark:bg-black text-black dark:text-white">
        <Hero />
        <About/>
        <Servicies />
        <WhyChooseUs/>
        <VideoConsole/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
