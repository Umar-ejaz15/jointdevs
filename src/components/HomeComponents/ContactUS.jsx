import React from 'react'
import { FaTrophy, FaBrain, FaChartLine, FaRocket, FaMoneyBillWave } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContactUS = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-white py-8 sm:py-12 md:py-16 border border-white/20 justify-center items-center w-full p-2 sm:p-4 md:p-5 bg-black px-2 sm:px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-white"
        >
          Contact us today to discuss your custom SEO needs and discover how Flawless Marketing can help you achieve your online goals. Let us create a personalized plan that drives measurable results and sets your business apart from the competition.
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleContactClick}
            className="bg-gradient-to-r from-zinc-400 to-white text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:shadow-lg transform transition-all duration-300 text-sm sm:text-base"
          >
            Contact Us Now
          </motion.button>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 md:mb-8 text-center"
        >
          Why Choose Flawless Marketing?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaTrophy className="text-3xl sm:text-4xl text-zinc-400 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-semibold">Proven track record of success since 2014</p>
          </motion.div>

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaBrain className="text-3xl sm:text-4xl text-zinc-400 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-semibold">Unparalleled expertise and industry knowledge</p>
          </motion.div>

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaChartLine className="text-3xl sm:text-4xl text-zinc-400 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-semibold">Data-driven strategies personalized to your unique needs</p>
          </motion.div>

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaRocket className="text-3xl sm:text-4xl text-zinc-400 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-semibold">Cutting-edge techniques and exclusive link boosting strategies</p>
          </motion.div>

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-zinc-800/50 p-4 sm:p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaMoneyBillWave className="text-3xl sm:text-4xl text-zinc-400 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg font-semibold">Competitive, affordable pricing for the best ROI</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactUS