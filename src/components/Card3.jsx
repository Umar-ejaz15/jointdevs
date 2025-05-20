import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "./magicui/text-reveal";
import { ShinyButton } from "./magicui/shiny-button";

const content = [
  { text: "Search Engine Optimization (SEO)" },
  { text: "Content Marketing" },
  { text: "Website Optimization" },
  { text: "Link Building" },
  { text: "Unlock Full Potential" },
];

const Card3 = () => {
  return (
    <motion.div
      initial={{  y: 20 }}
      whileInView={{  y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-96 max-w-2xl mx-auto bg-zinc-950 rounded-xl p-6 shadow-lg flex flex-col justify-between"
    >
      {/* Icon */}
      <motion.h1
        whileHover={{ scale: 1.01 }}
        className="text-center text-white text-sm font-semibold tracking-wide bg-zinc-900 px-4 py-3 rounded-md shadow-sm"
      >
        Servicies
      </motion.h1>

      {/* Feature List */}
      <motion.div className="flex flex-col gap-2 mt-4">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{  x: 60 }}
            whileInView={{  x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="text-white/85 text-sm px-3 py-2 rounded-md hover:bg-zinc-800/40 transition-all flex items-start"
          >
            • {item.text}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <ShinyButton
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="bg-black text-white text-sm font-medium text-center py-3 rounded-md mt-4 shadow-md hover:shadow-white/20"
      >
        Successful Strategies
      </ShinyButton>
    </motion.div>
  );
};

export default Card3;
