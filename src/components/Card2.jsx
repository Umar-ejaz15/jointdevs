import React from 'react'
import { motion } from "framer-motion";

const content = [
    {
      text: "Personalized Strategies",
    },
    {
      text: "Tailored for Client's Goals",
    },
    {
      text: "Optimized for SEO & Conversions",
    },
    {
      text: "Driven by Data",
    },
  ];

const Card2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full max-w-md mx-auto "
    >
        <div className="card1 border border-white/20 bg-zinc-900 rounded-md p-4 sm:p-6 hover:border-white/40 transition-all duration-300">
          <div className="flex flex-col justify-center items-center">
            <motion.img 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className='bg-white rounded-full p-2 sm:p-3 mb-4 sm:mb-6 shadow-lg hover:shadow-white/20 transition-all duration-300 w-16 sm:w-20' 
              src="/Personalized-Icon.avif" 
              alt="Personalized Solutions Icon" 
            />
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              className="p-4 sm:p-6 bg-zinc-800 rounded-md font-bold text-xs sm:text-sm hover:bg-zinc-700 transition-all duration-300 w-full text-center"
            >
              Our Strategic Solutions
            </motion.h1>
          </div>

          <motion.div className="flex flex-col w-full items-start mt-3">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="text-white/80 text-left text-base sm:text-lg p-2 flex items-center gap-1 w-full hover:bg-zinc-800 rounded-md transition-all duration-300"
              >
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-white font-bold text-black px-6 sm:px-20 py-4 sm:py-6 text-center rounded-full shadow-lg hover:shadow-white/20"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm sm:text-base"
          >
            Successful Strategies
          </motion.h1>
        </motion.div>
    </motion.div>
  )
}

export default Card2