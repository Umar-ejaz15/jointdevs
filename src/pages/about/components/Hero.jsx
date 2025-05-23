import React from 'react'

const Hero = () => {
  return (
   <div className="w-full min-h-screen bg-white relative">
        <div className="w-full h-[100vh] relative">
          <img
            src="/about us.jpg"
            className="w-full h-full object object-center"
            alt="about"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white dark:text-purple-300 text-6xl md:text-9xl font-bold px-4 py-2">
              About us
            </h1>
          </div>
        </div>
      </div>
  )
}

export default Hero
