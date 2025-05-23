import React from "react";

const AboutOurCompanay = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 transition-transform hover:scale-105 duration-300">
          <img src="/15.jpg" alt="About Techeon" className="w-full h-auto rounded-2xl shadow-md object-cover hover:shadow-lg transition-shadow duration-300" />
        </div>
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Techeon – Your Professional Digital Solutions Partner
            </h1>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed text-lg font-medium">
              At Techeon, we specialize in delivering comprehensive digital solutions
              that drive business growth. Our expertise encompasses SEO optimization,
              content creation, performance marketing, and various digital services
              designed to enhance your online presence and achieve measurable results.
            </p>
          </div>
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed text-lg font-medium">
              We are a dedicated team of digital professionals, including SEO experts,
              content strategists, and performance marketing specialists. Our focus
              is on delivering tailored digital solutions that help businesses
              maximize their online potential. Whether it's improving search rankings,
              creating engaging content, or optimizing digital performance, we have
              the expertise to elevate your digital presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCompanay;