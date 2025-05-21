import React from "react";
import LazyLoad from 'react-lazyload';

const Service = ({ service, index }) => {
  const { tittle, description, image, learnMore } = service;
  return (
    <div className="flex container flex-col md:flex-row h-auto items-center py-8 mx-auto px-4 gap-8">
      {index % 2 === 0 ? (
        <>
          <div className="md:w-1/2">
            <LazyLoad height={300} offset={100} once>
              <picture>
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt="Marketing Service"
                  loading="lazy"
                  width="100%"
                  className="h-auto rounded-lg shadow-lg"
                />
              </picture>
            </LazyLoad>
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
            <LazyLoad height={300} offset={100} once>
              <picture>
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt="Marketing Service"
                  loading="lazy"
                  width="100%"
                  className="h-auto rounded-lg shadow-lg"
                />
              </picture>
            </LazyLoad>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;