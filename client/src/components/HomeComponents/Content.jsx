import React from 'react'
import { motion } from 'framer-motion'

const Content = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-[80vh] items-center justify-between px-4 md:px-20 border border-white/20'>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="left flex-1 space-y-6 py-8 md:py-0"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-4xl md:text-6xl font-bold text-white'
        >
          Content Marketing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed'
        >
          Attract, engage, and convert your target audience with our data-driven content marketing service, customized to your specific industry and business goals.
        </motion.p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="right flex-1 mt-8 md:mt-0 block md:block"
      >
        <img src="/cntent.svg" alt="Content Marketing Illustration" className='w-full h-auto max-w-xl mx-auto object-cover' />
      </motion.div>
    </div>
  )
}

export default Content