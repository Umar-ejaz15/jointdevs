import React from "react";

const Service = ({ service, index }) => {
  const { tittle, description, image, learnMore } = service;
  return (
    <div className="flex container flex-col md:flex-row h-auto items-center py-8 mx-auto px-4 gap-8">
      {index % 2 === 0 ? (
        <>
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Marketing Service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-6xl font-bold uppercase tracking-tighter text-gray-800 dark:text-white">
              {tittle}
            </h1>
            <p className="text-gray-600 dark:text-white/80 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-6xl font-bold uppercase tracking-tighter text-gray-800 dark:text-white">
              {tittle}
            </h1>
            <p className="text-gray-600 dark:text-white/80 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Marketing Service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Service;