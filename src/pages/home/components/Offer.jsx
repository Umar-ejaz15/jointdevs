import React from "react";
import Cards from "./Cards";

const Offer = () => {
  return (
    <div className="w-full bg-zinc-100 min-h-screen px-4 md:px-8 lg:px-20 py-8 flex flex-col lg:flex-row gap-8 lg:gap-20">
      <div className="w-full mx-auto flex flex-col gap-5 items-center">    
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">What do we offer?</h1>
        <p className="text-black text-sm md:text-base text-center max-w-2xl">
          Highlight the key benefits of each service and how they can help
          businesses thrive in the US market.
        </p>
        <Cards/>
      </div>
    </div>
  );
};

export default Offer;