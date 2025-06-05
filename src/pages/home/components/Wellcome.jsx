import React from "react";

const Wellcome = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-8 lg:px-20 py-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <img 
          className="w-full h-auto object-cover rounded-lg "  
          src="../../../../Home/Techeon-homepage-1st-img.png" 
          alt="Techeon Welcome" 
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center flex-col gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Welcome to Techeon - Your eCommerce Partner in Digital Growth!
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Xpanzia, we specialize in driving success through tailored
            eCommerce solutions and cutting-edge digital marketing strategies.
            Whether you're looking to boost your online store, engage with your
            audience through social media marketing, or maximize ROI through
            Facebook and Google ads, we have the expertise to elevate your
            brand.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-10 mt-4">
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-2">300+</h2>
            <p className="text-lg text-gray-700">Successful Accounts</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-2">5+</h2>
            <p className="text-lg text-gray-700">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;