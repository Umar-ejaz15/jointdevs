"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <div className="mx-auto max-w-4xl px-4 py-3">
        <div className="text-card text-2xl font-bold text-gray-400 dark:text-gray-600 md:text-3xl">
          <div className="inline-block max-w-full">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(progress, range, ["#888", "#fff"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mx-1 transition-all duration-300"
    >
      {children}
    </motion.span>
  );
};
