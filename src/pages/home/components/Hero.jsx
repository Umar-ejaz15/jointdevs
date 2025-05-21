import React from "react";
import Button from "../../../components/Button";
import { FaCheckCircle, FaProjectDiagram, FaTrophy } from "react-icons/fa";

const Hero = () => {
  const data = [
    {
      id: 1,
      number: "90%",
      detail: "Clients Satisfaction",
      icon: <FaCheckCircle className="text-3xl text-blue-500 dark:text-purple-500" />,

    },
    {
      id: 2,
      number: "250+",
      detail: "Projects Completed",
      icon: <FaProjectDiagram className="text-3xl text-blue-500 dark:text-purple-500" />,
    },
    {
      id: 3,
      number: "15+",
      detail: "Industry Awards",
      icon: <FaTrophy className="text-3xl text-blue-500 dark:text-purple-500" />,
    },
  ];
  return (
    <div className="flex  dark:bg-zinc-950  container mx-auto flex-col md:flex-row min-h-screen items-center">
      <div className="w-full md:w-1/2 p-6 md:p-10 rounded-lg">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
            <span className="text-blue-500 dark:text-purple-500">Transforming</span> Digital Presence into <span className="text-blue-500 dark:text-purple-500">Business Growth</span>
          </h1>
          <p className="text-base md:text-xl mt-5 text-gray-700/80 dark:text-white/80 max-w-2xl">
            We combine <span className="text-blue-500 dark:text-purple-500 font-bold">data-driven strategies</span>, <span className="text-blue-500 dark:text-purple-500 font-bold">creative excellence</span>, and
            <span className="text-blue-500 dark:text-purple-500 font-bold"> cutting-edge technology</span> to deliver exceptional marketing results
            that drive your business forward.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button txt="Get Started" />
          <Button txt="View our Work" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              {item.icon}
              <div>
                <h2 className="text-2xl font-bold"><span className="text-blue-500 dark:text-purple-500">{item.number}</span></h2>
                <p className="text-gray-600 dark:text-white/80">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
        <img 
          className="w-3/4 h-auto object-cover rounded-lg " 
          src="/9.png" 
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;