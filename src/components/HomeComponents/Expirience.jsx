import React from "react";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";

const Expirience = () => {
 
  return (
    <div className=" gap-6 border  border-white/20 border-t-0 w-full p-5 bg-black">
      <div className="container grid h-auto py-8 grid-cols-1 md:grid-cols-3 items-center self-center mx-auto gap-5 overflow-hidden">
        
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
    </div>
  );
};

export default Expirience;
