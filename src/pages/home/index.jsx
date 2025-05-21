import React from "react";
import Hero from "./components/Hero";
import Servicies from "./components/Servicies";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Hero />
        <Servicies />
      </div>
    </>
  );
};

export default Home;
