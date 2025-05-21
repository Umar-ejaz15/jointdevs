import React from "react";
import Button from "../../../components/Button";
import { FaCheckCircle, FaProjectDiagram, FaTrophy } from "react-icons/fa";

const Hero = () => {
  const data = [
    {
      id: 1,
      number: "90%",
      detail: "Clients Satisfaction",
      icon: <FaCheckCircle className="text-3xl text-blue-500" />,
    },
    {
      id: 2,
      number: "250+",
      detail: "Projects Completed",
      icon: <FaProjectDiagram className="text-3xl text-blue-500" />,
    },
    {
      id: 3,
      number: "15+",
      detail: "Industry Awards",
      icon: <FaTrophy className="text-3xl text-blue-500" />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 p-6 md:p-10 rounded-lg">
        <div>
          <h1 className="text-4xl md:text-[5vw] font-bold tracking-tighter leading-none">
            Transforming Digital Presence into Business Growth
          </h1>
          <p className="text-base md:text-lg mt-5 text-gray-700/80 dark:text-white/80">
            We combine data-driven strategies, creative excellence, and
            cutting-edge technology to deliver exceptional marketing results
            that drive your business forward.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button txt="Get Started" />
          <Button txt="View our Work" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {item.icon}
              <div>
                <h2 className="text-2xl font-bold">{item.number}</h2>
                <p className="text-gray-600 dark:text-white/80">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center p-6">
        <img className="w-full  object-cover" src="/5.png" />
      </div>
    </div>
  );
};

export default Hero;