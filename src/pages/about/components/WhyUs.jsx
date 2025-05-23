import React from "react";

const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Techeon?
            </h1>
            <ul className="text-gray-700 dark:text-white/80 leading-relaxed text-lg font-medium space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Experience:</strong> With years of industry
                  experience, we know what works in the digital landscape.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Innovation:</strong> We stay ahead of trends to
                  deliver cutting-edge solutions for our clients.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Customization:</strong> Our strategies are tailored to
                  your unique business goals and challenges.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Results:</strong> We're focused on delivering
                  measurable results that drive long-term success.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed text-lg font-medium italic mt-4">
              Join us at Xpanzia, where innovation meets performance, and let's
              grow your business together!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 transition-transform hover:scale-105 duration-300">
          <img
            src="/why us.webp"
            alt="About Techeon"
            className="w-full h-auto rounded-2xl shadow-md object-cover hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
