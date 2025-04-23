import React from "react";
import { motion } from "framer-motion";

const content = [
  { img: "./c1.avif", position: "md:-left-5 -left-2 top-0" },
  { img: "./c2.avif", position: "md:-right-5 -right-2 top-0" },
  { img: "./c3.avif", position: "md:-bottom-10 -bottom-5 md:-left-5 -left-2" },
  { img: "./c4.avif", position: "md:-right-5 -right-2 md:-bottom-10 -bottom-5" },
];

const Card1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-5 px-4 md:px-0"
    >
      <motion.div 
        className="card1 border border-white/20 bg-zinc-900/90 backdrop-blur-sm rounded-lg shadow-xl hover:border-white/40 transition-all duration-300 w-full"
      >
        <div className="flex flex-col justify-center items-center p-4 md:p-6">
          <motion.img
            transition={{ duration: 1 }}
            className="bg-white rounded-full p-2 md:p-3 mb-4 md:mb-6 shadow-lg hover:shadow-white/20 w-16 md:w-auto"
            src="./Clients-Badge.avif"
            alt="Clients Badge"
          />
          <h1 className="p-4 md:p-6 bg-zinc-800 rounded-md w-full mb-6 text-center text-sm md:text-lg">
            Our Strategic Solutions
          </h1>
        </div>

        <motion.div className="flex justify-center overflow-hidden w-full h-32 md:h-40 items-center gap-2 my-4 relative">
          {content.map((item, index) => (
            <motion.img
              key={index}
              src={item.img}
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.4,
                type: "spring",
                stiffness: 200
              }}
              alt={`Client ${index + 1}`}
              className={`absolute rounded-full shadow-lg hover:shadow-white/20 w-12 md:w-auto ${item.position}`}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="bg-white font-bold text-black px-8 md:px-20 py-4 md:py-6 text-center rounded-full shadow-lg hover:shadow-white/20"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-base"
        >
          15+ Years in Business
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Card1;