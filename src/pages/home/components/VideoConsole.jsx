import React from "react";

const VideoConsole = () => {
  return (
    <div className="bg-white dark:bg-black text-black  dark:text-white min-h-[40vh] flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left">
            Ready to get started?
            <span className="block mt-2 text-2xl md:text-4xl">It's fast, free and very easy!</span>
          </h1>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <button className="rounded-lg px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 hover:dark:bg-purple-500 cursor-pointer transition-colors duration-300">
            <span>Get Free Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoConsole;