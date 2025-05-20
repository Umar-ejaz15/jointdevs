"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const LinkBuilding = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
   <motion.div
      initial={shouldReduceMotion ? {} : { y: 20 }}
      whileInView={shouldReduceMotion ? {} : { y: 0 }}
      
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 border border-white/20 border-t-0 justify-between items-center w-full p-6 md:p-8 bg-black/95 backdrop-blur-sm hover:bg-black/90 transition-all duration-300"
    >
      <motion.div 
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        
        transition={{ duration: 0.2 }}
        className="left w-full md:w-2/3 space-y-4"
      >
        <motion.img 
          whileHover={{ scale: 1.05 }}
          src="/link building.svg" 
          alt="Link Building" 
          className="w-full max-w-md mx-auto transition-transform duration-300" 
        />
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight"
        >
          Link Building
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          
          transition={{ delay: 0.3 }}
          className="text-white/70 leading-relaxed text-sm md:text-base"
        >
          Strengthen your backlink profile and improve your search engine rankings with our two powerful link building strategies: Digital PR and 3-way link exchange. Our team will help you acquire high-quality, relevant links from authoritative websites in your industry.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        
        transition={{ duration: 0.6 }}
        className="right w-full md:w-1/3 space-y-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-semibold text-white/90"
        >
          3-Way Link Exchange
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          
          transition={{ delay: 0.5 }}
          className="text-white/70 leading-relaxed text-sm md:text-base"
        >
          Leverage our extensive network of SaaS partners to build powerful backlinks through our innovative 3-way link exchange campaigns.
        </motion.p>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          src="/3way.svg" 
          alt="3-Way Link Exchange" 
          className="w-full max-w-xs mx-auto transition-transform duration-300" 
        />
      </motion.div>
    </motion.div>
  );
};

export default LinkBuilding;
