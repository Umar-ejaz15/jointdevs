import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen  bg-gray-50 dark:bg-black py-16">
      <h1 className="text-5xl font-bold   text-center py-10">
        About <span className="text-blue-600 dark:text-purple-500"> Us</span>
      </h1>
      <div className="flex items-center justify-center">
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
            <img
              src="/12.png"
              alt="About Xpanzia"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Welcome to {" "}
              <span className="text-blue-600 dark:text-purple-500">
                 Techon
              </span>{" "}
              - Your eCommerce Partner in Digital Growth!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed dark:text-white/80">
              At Xpanzia, we specialize in driving success through tailored
              eCommerce solutions and cutting-edge digital marketing strategies.
              Whether you're looking to boost your online store, engage with
              your audience through social media marketing, or maximize ROI
              through Facebook and Google ads, we have the expertise to elevate
              your brand.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
