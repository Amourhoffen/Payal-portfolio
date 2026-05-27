import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface PhilosophyQuoteRevealerProps {
  quote: string;
  author?: string;
}

export default function PhilosophyQuoteRevealer({
  quote,
  author = "The Aesthetic Manifesto",
}: PhilosophyQuoteRevealerProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Split quote into words for beautiful staggered flow and selective highlighting on hover
  const words = quote.split(" ");

  return (
    <div
      id="philosophy-quote-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 md:p-12 rounded-2xl bg-[#0d0d0c] border border-zinc-900 overflow-hidden cursor-default transition-all duration-700 hover:border-terracotta/40 hover:shadow-[0_8px_32px_rgba(141,76,50,0.06)] group"
    >
      {/* Bihar-inspired subtle background geometric motif that brightens on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-terracotta">
          <polygon points="50,5 95,50 50,95 5,50" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Hanging Quote Mark Decors */}
      <span className="absolute top-4 left-6 font-serif text-6xl text-terracotta/10 select-none group-hover:text-terracotta/20 transition-colors duration-700">
        “
      </span>

      <div className="relative z-10 space-y-4">
        {/* Animated quote body with staggered word layout */}
        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-2 text-center">
          {words.map((word, wordIdx) => {
            // Emphasize key philosophical words (e.g. Design, emotion, memory, perspective)
            const isKeywords = ["Design", "emotion,", "memory,", "perspective."].some(
              (kw) => word.toLowerCase().includes(kw.toLowerCase())
            );

            return (
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0.65, y: 0 }}
                animate={{
                  opacity: isHovered 
                    ? 1 
                    : isKeywords ? 0.85 : 0.65,
                  scale: isHovered && isKeywords ? 1.05 : 1,
                  color: isHovered 
                    ? (isKeywords ? "#8D4C32" : "#F5F5F0") 
                    : (isKeywords ? "#af674d" : "#DFD7CF")
                }}
                transition={{
                  duration: 0.4,
                  delay: wordIdx * 0.02,
                  ease: "easeOut"
                }}
                className={`font-serif text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide inline-block font-light ${
                  isKeywords ? "font-normal italic" : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Dynamic Interactive Accent Draw Line under Quote */}
        <div className="flex justify-center pt-4">
          <div className="relative w-36 h-2">
            {/* The base muted line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[0.5px] bg-zinc-800" />
            
            {/* The active drawing line representing the double border rules in Madhubani */}
            <motion.div
              initial={{ width: "15%" }}
              animate={{ width: isHovered ? "100%" : "25%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[1px] bg-terracotta"
            />
            
            {/* Double dot nodes that expand slightly */}
            <motion.div
              animate={{ scale: isHovered ? 1.4 : 1, backgroundColor: isHovered ? "#8D4C32" : "#555" }}
              transition={{ duration: 0.4 }}
              className="absolute left-[30%] top-[3px] w-1 h-1 rounded-full"
            />
            <motion.div
              animate={{ scale: isHovered ? 1.4 : 1, backgroundColor: isHovered ? "#8D4C32" : "#555" }}
              transition={{ duration: 0.4 }}
              className="absolute right-[30%] top-[3px] w-1 h-1 rounded-full"
            />
          </div>
        </div>

        {/* Elegant Animated Author Label */}
        <div className="text-center">
          <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase block translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
            {author}
          </span>
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 0.6, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
                className="font-mono text-[8px] tracking-wider text-terracotta uppercase block mt-1"
              >
                ✦ Click quote block anywhere to activate curatorial soundscape
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
