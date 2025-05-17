import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills = () => {
      const skills = [
          "On-Page SEO",
          "Technical SEO",
          "Digital PR",
          "Local SEO",
          "Topic Clusters",
          "Content Marketing",
          "Authority Building",
          "SEO Consultancy",
      ]
    return (
      <div className="w-full border border-white/20 border-t-0 justify-center items-center  p-4 md:p-5 bg-black overflow-hidden py-10">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          {skills.map((skill, index) => (
            <span key={index} className="mx-2 text-xl bg-zinc-900 text-white px-10 py-4 rounded-full">{skill}</span>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="right"
          className="py-4"
        >
          {skills.map((skill, index) => (
            <span key={index} className="mx-2 text-xl bg-zinc-900 text-white px-10 py-4 rounded-full">{skill}</span>
          ))}
        </Marquee>
      </div>
    )
}

export default Skills