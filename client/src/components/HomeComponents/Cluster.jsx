import React from "react";
import { motion } from "framer-motion";

const content = [
  {
    image: "/consulent.svg",
    title: "SEO Consultancy",
    description:
      "Boost your website's performance and surpass your competitors with data-driven insights from our SEO Consultancy service, led by industry expert Israel Gaudette. Benefit from unparalleled expertise, proven results, and customized solutions that align with your unique goals and challenges.",
    imagePosition: "top",
  },
  {
    title: "Topic Clusters",
    description:
      "Dominate your industry with our groundbreaking topic clusters service, utilizing the power of semantic search and topical authority. Establish your website as the leading expert in your field, earn Google's trust, and significantly improve your search rankings.",
    clusterImages: ["/clust1.svg"],
  },
  {
    image: "/marketing.svg",
    title: "Content Marketing",
    description:
      "Lift your content marketing strategy with our data-driven approach. Leverage in-depth user intent analysis, customized strategies, and enhanced lead nurturing to attract, engage, and convert your target audience.",
    imagePosition: "top",
  },
  {
    image: "/auth bulding.svg",
    title: "Authority Building",
    description:
      "Elevate your brand's digital presence through strategic Digital PR. Our established media network and proven storytelling approach naturally attract high-value backlinks while building lasting authority. Move beyond traditional link building – establish your brand as an industry leader while driving sustainable organic growth.",
    imagePosition: "bottom",
  },
];

const Cluster = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 min-h-[80vh] p-4 sm:p-8 md:p-12 border border-white/20">
      {content.map((item, index) => (
        <motion.div
          key={index}
          className="bg-zinc-900 p-4 sm:p-6 rounded-lg transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {item.imagePosition === "top" && item.image && (
            <motion.div
              className="flex justify-center mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full max-w-[200px] sm:max-w-none"
              />
            </motion.div>
          )}
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            {item.title}
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            {item.description}
          </motion.p>
          {item.clusterImages && (
            <motion.div
              className="flex gap-2 sm:gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.6 }}
            >
              {item.clusterImages.map((img, i) => (
                <div key={i} className="w-full">
                  <img
                    src={img}
                    alt={`${item.title} cluster ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
          {item.imagePosition === "bottom" && item.image && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.7 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full max-w-[200px] sm:max-w-none"
              />
            </motion.div>
          )}
        </motion.div>
      ))}
      <div className="text-center mx-auto w-full flex justify-center flex-col col-span-1 sm:col-span-2">
        <h1 className="text-3xl text-center w-full font-bold mb-4">You're in good company</h1>
        <p className="text-gray-300">
          Don't just take our word for it – see what our satisfied clients have
          to say about their experience with Flawless Marketing:
        </p>
      </div>
    </div>
  );
};

export default Cluster;