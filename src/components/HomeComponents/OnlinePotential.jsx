import { motion } from "framer-motion";
import React from "react";
import { ShinyButton } from "../magicui/shiny-button";
import { TextReveal } from "../magicui/text-reveal";
import { Particles } from "../magicui/particles";

const OnlinePotential = () => {
  const content = {
    badge: {
      text: "Joint Devs Agency",
    },
    heading: {
      text: "Unlock Your Online Potential with Our Proven Strategies",
    },
    description: {
      text: "Are you struggling to achieve the online visibility and traffic your business deserves? Look no further than Flawless Marketing, your trusted partner in driving measurable results through cutting-edge SEO strategies. With over a decade of experience and a proven track record of success, we're here to help you navigate the complex world of digital marketing and unlock your website's full potential.",
    },
  };

  return (
    <>
      <motion.div className="flex flex-col gap-6 border border-white/20 border-t-0 justify-center items-center w-full p-4 md:p-5 ">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
          className=""
        >
          <ShinyButton className="bg-black w-fit text-black px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg mt-6 md:mt-10">
            {content.badge.text}
          </ShinyButton>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center max-w-3xl px-4 md:px-0"
        >
          <motion.h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent">
            {content.heading.text}
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center max-w-3xl px-4 md:px-0"
        >
          <TextReveal className="h-auto text-base md:text-lg">
            {content.description.text}
          </TextReveal>
        </motion.div>
      </motion.div>
    </>
  );
};

export default OnlinePotential;
