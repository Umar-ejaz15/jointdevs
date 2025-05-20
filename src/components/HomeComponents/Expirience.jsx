import React from "react";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import { BentoGrid } from "../magicui/bento-grid";
import { DotPattern } from "../magicui/dot-pattern";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";

const Expirience = () => {
 
  return (
    <div className=" gap-6 border relative  border-white/20 border-t-0 w-full p-5 ">
      <div className="container grid h-auto py-8 grid-cols-1 md:grid-cols-3 items-center self-center mx-auto gap-5 overflow-hidden">
        <Card2/>
        <Card1/>
        <Card3/>
      </div>
    </div>
  );
};

export default Expirience;
