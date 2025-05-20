import { motion } from "framer-motion";
import React from "react";
import ButtonComponent from "../ButtonComponent";

const DiscoveryCall = () => {
  const content = {
    badge: {
      text: "Joint Devs Agency"
    },
    heading: {
      text: "Take the First Step to Achieve Online Success"
    },
    description: {
      text: "Don't let your competitors outrank you – take action now and experience the Flawless Marketing difference. Contact us today to schedule a consultation and discover how our proven strategies can help you unlock your website's full potential, drive measurable results, and achieve your online goals."
    }
  };
    
  return (
    <motion.div 
      className="flex flex-col gap-6 border border-white/20 border-t-0 justify-center items-center w-full p-4 md:p-5 bg-black">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="">
        <motion.h1 className="bg-white w-fit text-black px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg mt-6 md:mt-10">
          {content.badge.text}
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-3xl px-4 md:px-0">
        <motion.h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent">
          {content.heading.text}
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center max-w-3xl px-4 md:px-0">
        <motion.p className="text-gray-300 text-base md:text-lg">
          {content.description.text}
        </motion.p>
      </motion.div>
      <ButtonComponent txt={"Book a Discovery Call"}/>
    </motion.div>
  );
};

export default DiscoveryCall;