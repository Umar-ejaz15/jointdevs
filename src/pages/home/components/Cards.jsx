import React from "react";
import Card from "./Card";

const Cards = () => {
  const data = [
    {
      title: "eCommerce Solutions",
      description:
        "End-to-end support for your online store, from setup to optimization.",
      image: "/Home/eCommerce-Solutions-1.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage, inspire, and grow your audience across all social platforms.",
      image: "/Home/Social-Media-Marketing.png",
    },
    {
      title: "Facebook & Google Ads",
      description:
        "Drive targeted traffic and boost conversions with precision ads.",
      image: "/Home/Facebook-Google-Ads.png",
    },
    {
      title: "Graphic Design",
      description:
        "Stand out with visually stunning and brand-aligned designs.",
      image: "/Home/Graphic-Design-.png",
    },
    {
      title: "Digital Marketing",
      description: "Customized strategies to ensure long-term business growth.",
      image: "/Home/Digital-Marketing-.png",
    },
    {
      title: "Web Development",
      description:
        "We build SEO-optimized, high-conversion websites on Shopify and WordPress & Custom Coding.",
      image: "/Home/Web-Design-1.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default Cards;