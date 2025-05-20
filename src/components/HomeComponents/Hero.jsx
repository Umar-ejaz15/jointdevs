import React from 'react'
import { motion } from 'motion/react'
import ButtonComponent from "../../components/ButtonComponent";
import { AnimatedGridPattern } from '../magicui/animated-grid-pattern';
import { ShinyButton } from '../magicui/shiny-button';
import { RainbowButton } from '../magicui/rainbow-button';

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-black text-white border-2 border-white/20">
      {/* Background Animated Grid Pattern */}

      {/* Title */}
      <div className="flex justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: -150, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[12vw] tracking-tight leading-none font-extrabold uppercase select-none"
        >
          techeon
        </motion.h1>
      </div>

      {/* Description and Button */}
      <div className="mt-10 flex flex-col gap-6 max-w-xl px-4 text-center justify-center items-center md:text-left">
        <motion.p
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 90, delay: 0.4 }}
          className="text-base text-center sm:text-lg font-light leading-relaxed"
        >
          Start a journey of digital transformation as our SEO and marketing sorcery propels your brand towards unparalleled success with every click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto md:mx-0"
        >
          <RainbowButton className="text-lg p-5" >Book a Discovery Call</RainbowButton>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
