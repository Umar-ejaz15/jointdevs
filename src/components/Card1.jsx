import React from "react";
import { User, Search, Globe, Share2, Users } from "lucide-react";
import { AnimatedBeam } from "./magicui/animated-beam";
import { MagicCard } from "./magicui/magic-card";

const Card1 = () => {
  const containerRef = React.useRef(null);
  const fromRef = React.useRef(null);
  const toRef = React.useRef(null);
  const userRef = React.useRef(null);
  const seoRef = React.useRef(null);
  const shareRef = React.useRef(null);

  const iconStyle =
    "h-12 w-12 rounded-full flex items-center justify-center shadow-xl";

  return (
    
    <MagicCard >
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl  h-96 mx-auto  rounded-2xl p-6 shadow-2xl"
      >
        {/* FROM */}
        <div ref={fromRef} className="absolute left-16 top-1/4">
          <div className={`${iconStyle} bg-blue-500/20`}>
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* CENTER USER */}
        <div
          ref={userRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className={`${iconStyle} bg-purple-500/20`}>
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* SEO */}
        <div ref={seoRef} className="absolute right-16 top-1/4">
          <div className={`${iconStyle} bg-green-500/20`}>
            <Search className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* SHARE */}
        <div ref={shareRef} className="absolute right-16 bottom-1/4">
          <div className={`${iconStyle} bg-orange-500/20`}>
            <Share2 className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* TO */}
        <div ref={toRef} className="absolute left-16 bottom-1/4">
          <div className={`${iconStyle} bg-teal-500/20`}>
            <Globe className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={userRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={userRef}
          toRef={seoRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={seoRef}
          toRef={shareRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={shareRef}
          toRef={toRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={toRef}
          toRef={fromRef}
        />
      </div>
    </MagicCard>
  );
};

export default Card1;
