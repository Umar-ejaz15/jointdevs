import React from 'react'
import { motion } from 'framer-motion'

const CustomSEo = () => {
    const content = {
        badge: {
          text: "Joint Devs Agency"
        },
        heading: {
          text: "Custom SEO Solutions"
        },
        description: {
          text: "Every business is unique, and we understand that your SEO needs may extend beyond our standard services. That's why we offer custom SEO solutions customized to your specific requirements. Whether you need help with technical SEO, local SEO, or any other aspect of your digital marketing strategy, our team of experts is ready to assist you."
        }
    }

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
  </motion.div>
  )
}

export default CustomSEo