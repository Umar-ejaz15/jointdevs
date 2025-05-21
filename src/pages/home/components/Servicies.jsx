import React from "react";
import Service from "./Service";

const Servicies = () => {
  const services = [
    {
      index: 1,
      tittle: "Product Marketing",
      description:
        "Transform your product launches into success stories with our strategic product marketing approach. We help position your products effectively, create compelling narratives, and drive market adoption through data-driven strategies.",
      image: "../../../../services/4.jpg",
      learMore: "",
    },
    {
      index: 2,
      tittle: "Content Marketing",
      description:
        "Create engaging content that resonates with your audience and drives conversions. Our content marketing strategies focus on delivering value, building authority, and creating meaningful connections with your target market.",
      image: "../../../../services/5.jpg",
      learMore: "",
    },
    {
      index: 3,
      tittle: "Email Marketing",
      description:
        "Nurture customer relationships and drive conversions with personalized email campaigns. Our email marketing services combine creative design, compelling copy, and advanced automation to deliver results.",
      image: "../../../../services/2.jpg",
      learMore: "",
    },
    {
      index: 4,
      tittle: "Social Media Marketing",
      description:
        "Build a strong social media presence that engages your audience and drives brand awareness. We create and execute comprehensive social media strategies that align with your business objectives",
      image: "../../../../services/6.jpg",
      learMore: "",
    },
    {
      index: 5,
      tittle: "Search Engine Optimization (SEO)",
      description:
        "Improve your search rankings and drive organic traffic with our data-driven SEO strategies. We focus on sustainable growth through technical optimization, content strategy, and quality link building.",
      image: "../../../../services/1.jpg",
      learMore: "",
    },
    {
      index: 6,
      tittle: "Performance Marketing",
      description:
        "Drive measurable results through targeted advertising campaigns. Our performance marketing strategies focus on maximizing ROI across multiple channels while optimizing for your specific business goals.",
      image: "../../../../services/3.jpg",
      learMore: "",
    },
  ];
  return (
    <div className="  dark:bg-zinc-950 w-full h-full min-h-screen ">
      <div className="mx-auto w-full flex items-center justify-center flex-col gap-5">
        <h1 className="text-5xl font-bold   text-center mt-10">
          Our{" "}
          <span className="text-blue-600 dark:text-purple-500">Services</span>
        </h1>
        <p className="text-center text-gray-900 dark:text-white/80 text-2xl w-1/2">
          We deliver comprehensive digital marketing solutions that drive growth
          and maximize your business potential.
        </p>
        <div>
          {services.map((service,index) => (
            <Service index={service.index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicies;
