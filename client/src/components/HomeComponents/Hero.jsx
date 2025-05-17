import React from 'react'
import { motion } from 'motion/react'
import ButtonComponent from "../../components/ButtonComponent";


const Hero = () => {
    
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center px-4">
          <div className="flex ">
            <motion.h1
              initial={{ opacity: 0, y: -200, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="text-[16vw] sm:text-[12vw] md:text-[10vw] tracking-tight leading-none font-bold uppercase"
            >
              Joint
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 200, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
              className="text-[16vw] sm:text-[12vw] md:text-[10vw] tracking-tight leading-none font-bold uppercase"
            >
              DEvs
            </motion.h1>
          </div>
          <div className="flex overflow-hidden gap-6 flex-col items-center w-full md:w-2/3 lg:w-1/3 mt-10 text-sm self-center md:self-end px-4">
            <motion.p
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.4 }}
              className="text-center md:text-left"
            >
              Start a journey of digital transformation as our SEO and marketing
              sorcery propels your brand towards unparalleled success with every
              click.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" sm:w-auto"
            >
              <ButtonComponent txt="Book a Discovery Call" />
            </motion.div>
          </div>
        </div>
  )
}

export default Hero