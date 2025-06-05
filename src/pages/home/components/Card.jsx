import React from "react";
import {
  Card as CardComponent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const Card = ({ data }) => {
  const { title, description, image } = data;
  return (
    <CardComponent className="overflow-hidden flex flex-col items-center w-full sm:w-96 p-3 hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <div className="w-60 h-60 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-2 text-center">
        <CardTitle className="text-xl font-semibold mb-2 text-gray-800">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          {description}
        </CardDescription>
      </div>
    </CardComponent>
  );
};

export default Card;