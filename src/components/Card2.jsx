import React from "react";
import { motion } from "framer-motion";
import { ShinyButton } from "./magicui/shiny-button";
import { MagicCard } from "./magicui/magic-card";

const content = [
  { text: "Strategic Business Solutions" },
  { text: "Results-Driven Approach" },
  { text: "Enterprise-Level Optimization" },
  { text: "Data-Informed Decisions" },
];

const Card2 = () => {
  return (
    <MagicCard>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-96 max-w-2xl mx-auto rounded-xl p-6 shadow-lg flex flex-col justify-between"
      >
        {/* Title */}
        <motion.h1
          whileHover={{ scale: 1.01 }}
          className="text-center text-white text-sm font-semibold tracking-wide bg-zinc-900 px-4 py-3 rounded-md shadow-sm"
        >
          Enterprise Solutions
        </motion.h1>

        {/* Features List */}
        <motion.div className="flex flex-col gap-3 mt-4">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ x: 4 }}
              className="text-white/90 text-sm px-3 py-2 flex items-center gap-2 hover:bg-zinc-800/50 rounded-md transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <ShinyButton
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-black text-white text-sm  font-medium text-center py-3 rounded-md mt-4 shadow-md hover:shadow-white/20"
        >
          Enterprise Excellence
        </ShinyButton>
      </motion.div>
    </MagicCard>
  );
};

export default Card2;
