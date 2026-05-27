import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import MadhubaniBorder from "./MadhubaniBorder";
import MithilaMotif from "./MithilaMotif";

interface ExhibitionLoaderProps {
  onComplete: () => void;
}

export default function ExhibitionLoader({ onComplete }: ExhibitionLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: Quote loading, 1: Ready to enter
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setPhase(1);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="exhibition-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 bg-[#070707] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Subtle noise and background vignette */}
          <div className="absolute inset-0 paper-overlay" />
          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.95) 100%) pointer-events-none" />

          {/* Subtle rotating background Mithila motif for cinematic depth in loading screen */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none opacity-[0.035] select-none z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="w-full h-full flex items-center justify-center"
            >
              <MithilaMotif type="geometry" size={320} interactive={false} />
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-12 w-[180px] h-[180px] pointer-events-none opacity-[0.025] select-none z-0">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <MithilaMotif type="lotus" size={160} interactive={false} />
            </motion.div>
          </div>

          {/* Top telemetry lines - honest and understated academic curation */}
          <div className="flex justify-between items-start w-full relative z-10 font-mono text-[9px] text-clay/40 tracking-widest uppercase">
            <div className="space-y-1">
              <p>शैक्षणिक कला दीर्घा • PROPOSAL FOR M.DES CANDIDACY • 2026</p>
              <p>आई.आई.टी गुवाहाटी प्रवेश समीक्षा • IIT GUWAHATI REVIEW</p>
            </div>
            <div className="text-right space-y-1">
              <p>पटना • बिहार • GANGETIC VALLEY</p>
              <p>BIHAR CULTURAL GEOGRAPHY</p>
            </div>
          </div>

          {/* Center Title / Quotation Block */}
          <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10 my-12 text-center md:text-left">
            <AnimatePresence mode="wait">
              {phase === 0 ? (
                <motion.div
                  key="loading-content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="text-xs uppercase tracking-widest text-terracotta/80 font-mono block">
                    Curatorial Introduction
                  </span>
                  
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-beige leading-tight font-light font-style: italic">
                    “Design is not decoration.
                    <br />
                    It is emotion, memory, and perspective.”
                  </h1>

                  <div className="w-16 h-[1px] bg-terracotta/40 mx-auto md:mx-0 my-8" />

                  <p className="font-serif text-sm md:text-md text-clay/50 italic font-light max-w-xl">
                    Preparing fine-art layouts, photographic observations, and story illustrations of Payal Priyadarshini.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="portal-content"
                  initial={{ opacity: 0, scale: 0.99, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 flex flex-col items-center md:items-start"
                >
                  <div className="space-y-1 text-center md:text-left">
                    <span className="text-xs uppercase tracking-widest text-terracotta font-mono font-medium block">
                      EXHIBITION GATE OPEN
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-warm-beige tracking-wide font-light">
                      PAYAL PRIYADARSHINI
                    </h2>
                    <h3 className="font-mono text-xs md:text-sm text-clay/50 tracking-widest uppercase">
                      Visual Storyteller • Contemporary बिहार (Bihar) Vernacular Designer
                    </h3>
                  </div>

                  <MadhubaniBorder variant="horizontal" className="max-w-md" opacity={0.6} />

                  <button
                    id="enter-exhibition-btn"
                    onClick={handleEnter}
                    className="group relative px-8 py-3.5 rounded-full border border-terracotta text-warm-beige overflow-hidden bg-transparent hover:bg-terracotta transition-all duration-700 font-mono text-xs tracking-widest uppercase cursor-pointer flex items-center gap-3 shadow-[0_4px_20px_rgba(200,92,66,0.15)] hover:shadow-[0_4px_25px_rgba(200,92,66,0.4)]"
                  >
                    <span>Enter Digital Gallery</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2.5 transition-transform duration-500" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Loading Bar and Stats */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-zinc-950">
            <div className="flex items-center gap-3">
              <div className="h-1 w-24 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                <motion.div
                  className="h-full bg-terracotta"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-[10px] text-clay/40">{progress}% INITIALIZED</span>
            </div>

            <div className="text-[10px] font-mono text-clay/30 flex items-center gap-2">
              <span>GALLERY SPACE PREPARATION</span>
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta/80 animate-ping" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
