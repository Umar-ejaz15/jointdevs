import React from "react";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Hero />
      </div>
    </>
  );
};

export default Home;
