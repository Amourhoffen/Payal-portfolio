import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Palette, Layers, Compass, Code, Eye, Info } from "lucide-react";
import { CORE_PHILOSOPHY, BIHAR_ROOTS_STUDY } from "../data";
import MadhubaniBorder from "./MadhubaniBorder";

export default function PhilosophyStudio() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredConcept, setHoveredConcept] = useState<number | null>(null);

  return (
    <div 
      id="philosophy-studio"
      className="bg-[#0b0b0b] border border-zinc-900 rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden text-left"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 madhubani-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Heading block */}
      <div className="max-w-3xl mb-12 relative z-10">
        <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase flex items-center gap-1.5 mb-2">
          <Compass className="w-3.5 h-3.5 text-terracotta" />
          दर्शन एवं सिद्धान्त • DESIGN PHILOSOPHY & ETHNOGRAPHY
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-warm-beige tracking-wide font-light">
          The Vernacular Synthesis Studio
        </h3>
        <p className="text-sm text-clay/60 font-mono mt-1">
          Exploring traditional art forms and integrating them into modern design systems.
        </p>
        
        <div className="w-20 h-[1px] bg-terracotta/30 my-6" />
        
        <p className="text-sm text-clay/80 leading-relaxed font-sans max-w-2xl font-light">
          {BIHAR_ROOTS_STUDY.academicPremise}
        </p>
      </div>

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 mt-6">
        
        {/* Left Side: Selectable Philosophy Pillars */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-clay/50 uppercase block mb-2">
            चिन्तन के आधार स्तम्भ • PHILOSOPHY PILLARS
          </span>
          {CORE_PHILOSOPHY.map((pillar, idx) => (
            <button
              id={`philosophy-tab-btn-${idx}`}
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-500 cursor-pointer ${
                activeTab === idx
                  ? "bg-charcoal-light border-terracotta/50 shadow-[0_10px_25px_rgba(200,92,66,0.08)]"
                  : "bg-charcoal-deep/30 border-zinc-950 hover:border-zinc-800 hover:bg-charcoal-light/40"
              }`}
            >
              <div className="flex justify-between items-start gap-3">
                <span className="font-mono text-xs text-terracotta mt-0.5">0{idx + 1}</span>
                <div className="flex-grow space-y-1">
                  <h4 className="font-serif text-lg text-warm-beige group-hover:text-terracotta transition-colors">
                    {pillar.title.replace(/^\d+\.\s*/, "")}
                  </h4>
                  <p className="text-xs text-clay/50 italic font-serif">
                    “{pillar.slogan}”
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Interactive Curation Area */}
        <div className="lg:col-span-7 bg-charcoal-light/50 border border-zinc-900 rounded-2xl p-6 md:p-8 min-h-[460px] flex flex-col justify-between relative shadow-inner">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 flex-grow flex flex-col justify-between"
            >
              {/* Pillar Academic Insights */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
                  <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase">
                    Structural Insight
                  </span>
                  <span className="text-xs text-clay/30 font-mono">0{activeTab + 1} / 03</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-xl text-warm-beige leading-snug">
                    {CORE_PHILOSOPHY[activeTab].slogan}
                  </h4>
                  <p className="text-sm text-clay/80 font-serif leading-relaxed italic border-l-2 border-terracotta/40 pl-4 py-1">
                    {CORE_PHILOSOPHY[activeTab].academicInsight}
                  </p>
                  <p className="text-xs text-clay/50 leading-relaxed font-sans pt-1 font-light">
                    {CORE_PHILOSOPHY[activeTab].detail}
                  </p>
                </div>
              </div>

              {/* Dynamic Exhibition Block representing study details */}
              <div className="bg-[#080808] border border-zinc-950 rounded-xl p-4 md:p-5 mt-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[8px] font-mono text-zinc-600 uppercase flex items-center gap-1">
                  <Palette className="w-2.5 h-2.5" />
                  <span>Conceptual Design Specimen</span>
                </div>

                {/* Sub-Interactive Sandbox depending on active pillar */}
                {activeTab === 0 && (
                  <div className="space-y-4 py-2">
                    <span className="text-[10px] font-mono text-terracotta uppercase block">
                      Specimen A: Traditional Space Division
                    </span>
                    
                    {/* Animated Geometric Vector Canvas representing Mithila spacing syntax */}
                    <div className="h-28 bg-[#0a0a0a] border border-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden group/vector">
                      <div className="absolute inset-0 paper-overlay" />
                      
                      <svg width="100%" height="100%" className="w-full h-full text-clay/20 px-4">
                        {/* Golden ratio horizontal bands */}
                        <line x1="0" y1="20" x2="100%" y2="20" stroke="#C85C42" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
                        <line x1="0" y1="52" x2="100%" y2="52" stroke="#C85C42" strokeWidth="0.75" opacity="0.4" />
                        <line x1="0" y1="72" x2="100%" y2="72" stroke="#C85C42" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 4" />
                        
                        {/* Dynamic repeating vertical lines shifting based on hover */}
                        {Array.from({ length: 18 }).map((_, i) => (
                          <line
                            key={i}
                            x1={`${i * 6 + 4}%`}
                            y1="10"
                            x2={`${i * 6 + 4}%`}
                            y2="100"
                            stroke="#ffffff"
                            strokeWidth="0.5"
                            opacity={i % 3 === 0 ? "0.2" : "0.08"}
                            className="transition-all duration-700 group-hover/vector:stroke-terracotta"
                            style={{
                              transform: `scaleY(${1 + Math.sin(i) * 0.15})`
                            }}
                          />
                        ))}

                        {/* Traditional focal concentric circles modeled as modern camera reticle */}
                        <circle cx="50%" cy="50%" r="28" stroke="#DFD7CF" strokeWidth="0.5" fill="none" opacity="0.25" strokeDasharray="3 3" />
                        <circle cx="50%" cy="50%" r="14" stroke="#C85C42" strokeWidth="0.75" fill="none" opacity="0.4" />
                        <circle cx="50%" cy="50%" r="3" fill="#C85C42" opacity="0.8" />
                      </svg>
                      
                      <div className="absolute bottom-1 right-2 font-mono text-[8px] text-zinc-600">
                        VISUAL ANALYSIS: GRID STRUCTURE
                      </div>
                    </div>
                    <p className="text-[11px] text-clay/50 font-mono text-center">
                      Hover over the specimen grid to observe calculated space division.
                    </p>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4 py-2">
                    <span className="text-[10px] font-mono text-terracotta uppercase block">
                      Specimen B: Natural Color Palette
                    </span>

                    {/* Terracotta mix sandbox */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { name: "Sindoor Red", hex: "#C85C42", desc: "Energy Focus", ratio: "45%" },
                        { name: "Silt Grey", hex: "#4C4640", desc: "Ganges Mud", ratio: "30%" },
                        { name: "Soot Black", hex: "#161616", desc: "Charcoal Ash", ratio: "15%" },
                        { name: "Kora White", hex: "#E9E5DD", desc: "Raw Cotton", ratio: "10%" }
                      ].map((pigment, pi) => (
                        <div key={pi} className="bg-charcoal-deep border border-zinc-900 rounded p-2 text-center group/pigment hover:border-zinc-700 transition-all duration-300">
                          <div
                            className="h-10 w-full rounded-sm mb-1.5 shadow-inner transition-transform duration-500 group-hover/pigment:scale-105"
                            style={{ backgroundColor: pigment.hex }}
                          />
                          <span className="block font-serif text-[10px] font-semibold text-warm-beige truncate">{pigment.name}</span>
                          <span className="block font-mono text-[8px] text-zinc-500 mt-0.5">{pigment.hex}</span>
                          <span className="block font-mono text-[9px] text-terracotta/70 mt-1">{pigment.ratio} MASS</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-clay/50 font-mono text-center">
                      Mineral pigments analyzed from ancient Mithila murals, refined for modern digital layouts.
                    </p>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4 py-2">
                    <span className="text-[10px] font-mono text-terracotta uppercase block">
                      Specimen C: Tactile Digital Textures
                    </span>

                    {/* Interactive Fiber visualizer */}
                    <div className="bg-[#0e0e0e] border border-zinc-900 rounded-lg p-3 relative h-28 flex flex-col justify-between overflow-hidden">
                      <div className="absolute inset-0 paper-overlay opacity-30" />
                      
                      <div className="space-y-1 relative z-10 w-full">
                        <div className="flex justify-between items-center text-[9px] font-mono text-clay/40">
                          <span>PAPER QUALITY DESCRIPTION</span>
                          <span>170 GSM HANDMADE COTTON PAPER</span>
                        </div>
                        <div className="h-0.5 bg-zinc-900 w-full rounded-full overflow-hidden">
                          <motion.div 
                            className="bg-terracotta h-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-[10px] font-mono relative z-10">
                        <div className="border border-zinc-900/40 p-1.5 bg-charcoal-deep/60 rounded">
                          <span className="text-zinc-500 block text-[8px]">INK HEAVINESS</span>
                          <span className="text-warm-beige font-semibold">SLOW INTEGRATION</span>
                        </div>
                        <div className="border border-zinc-900/40 p-1.5 bg-charcoal-deep/60 rounded">
                          <span className="text-zinc-500 block text-[8px]">TACTILE FEELING</span>
                          <span className="text-terracotta font-semibold">ORGANIC HIGHLIGHT</span>
                        </div>
                      </div>

                      <div className="absolute bottom-1 right-2 font-mono text-[8px] text-zinc-600">
                        FIBER MATURATION MODEL
                      </div>
                    </div>
                    <p className="text-[11px] text-clay/50 font-mono text-center">
                      Simulates physical paper resistance, absorbing digital strokes into heavy, warm fibers.
                    </p>
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-950 pt-4">
            <div className="flex items-center gap-1 text-zinc-500 font-mono text-[10px]">
              <Info className="w-3.5 h-3.5" />
              <span>Aesthetic study completed successfully</span>
            </div>
            
            <span className="text-[9px] text-clay/35 font-mono uppercase tracking-widest">
              IIT Guwahati M.Des presentation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
