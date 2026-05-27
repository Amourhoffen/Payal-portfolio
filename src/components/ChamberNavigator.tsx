import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Eye, Film, BookOpen, Layers } from "lucide-react";
import { MAIN_PORTFOLIO, STORY_ILLUSTRATION, PHOTOGRAPHY_PROJECTS } from "../data";
import ExhibitFrame from "./ExhibitFrame";
import MithilaMotif from "./MithilaMotif";

type ChamberId = "dossier" | "narration" | "observation";

interface ChamberNavigatorProps {
  activeChamber?: ChamberId;
  setActiveChamber?: (id: ChamberId) => void;
}

export default function ChamberNavigator({
  activeChamber: controlledActiveChamber,
  setActiveChamber: controlledSetActiveChamber,
}: ChamberNavigatorProps) {
  const [localActiveChamber, setLocalActiveChamber] = useState<ChamberId>("dossier");
  const [transitioning, setTransitioning] = useState(false);

  const activeChamber = controlledActiveChamber || localActiveChamber;
  const setActiveChamberState = controlledSetActiveChamber || setLocalActiveChamber;

  const chambers = [
    {
      id: "dossier" as ChamberId,
      name: "Chamber I",
      title: "Academic Dossier",
      subtitle: "A3 Spatial Layout System",
      icon: BookOpen,
      badge: "A3 Portfolio Format",
    },
    {
      id: "narration" as ChamberId,
      name: "Chamber II",
      title: "Story Illustration",
      subtitle: "Narrative Dimensions",
      icon: Layers,
      badge: "Mixed-Media Ink",
    },
    {
      id: "observation" as ChamberId,
      name: "Chamber III",
      title: "Photo Documentaries",
      subtitle: "Observational Poetics",
      icon: Film,
      badge: "Fine Art Monochrome",
    },
  ];

  // Callback to trigger mask sweep effect before switching state if desired, or let AnimatePresence handle it natively
  const handleChamberChange = (id: ChamberId) => {
    if (id === activeChamber) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveChamberState(id);
      setTransitioning(false);
    }, 450); // Matches the sweeps
  };

  const renderActiveContent = () => {
    switch (activeChamber) {
      case "dossier":
        return (
          <motion.div
            key="dossier-panel"
            initial={{ opacity: 0, scale: 1.03, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            <ExhibitFrame
              id={MAIN_PORTFOLIO.id}
              title={MAIN_PORTFOLIO.title}
              subtitle={MAIN_PORTFOLIO.subtitle}
              embedUrl={MAIN_PORTFOLIO.embedUrl}
              canvaUrl={MAIN_PORTFOLIO.canvaUrl}
              aspectRatioClass={MAIN_PORTFOLIO.aspectRatio}
              medium={MAIN_PORTFOLIO.medium}
              year={MAIN_PORTFOLIO.year}
              tags={MAIN_PORTFOLIO.tags}
              description={MAIN_PORTFOLIO.description}
              curatorialNoteText={MAIN_PORTFOLIO.curatorialNote}
            />
          </motion.div>
        );

      case "narration":
        return (
          <motion.div
            key="narration-panel"
            initial={{ opacity: 0, scale: 1.03, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            <ExhibitFrame
              id={STORY_ILLUSTRATION.id}
              title={STORY_ILLUSTRATION.title}
              subtitle={STORY_ILLUSTRATION.subtitle}
              embedUrl={STORY_ILLUSTRATION.embedUrl}
              canvaUrl={STORY_ILLUSTRATION.canvaUrl}
              aspectRatioClass={STORY_ILLUSTRATION.aspectRatio}
              medium={STORY_ILLUSTRATION.medium}
              year={STORY_ILLUSTRATION.year}
              tags={STORY_ILLUSTRATION.tags}
              description={STORY_ILLUSTRATION.description}
              curatorialNoteText={STORY_ILLUSTRATION.curatorialNote}
            />
          </motion.div>
        );

      case "observation":
        return (
          <motion.div
            key="observation-panel"
            initial={{ opacity: 0, scale: 1.03, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full space-y-12"
          >
            {PHOTOGRAPHY_PROJECTS.map((proj, idx) => (
              <div key={proj.id} className="relative">
                <div className="text-left mb-3 px-2 font-mono text-zinc-500 text-[10px] flex items-center justify-between">
                  <span>Platemark Plate II.{idx + 1}</span>
                  <span>Rural Ethnographic Observation Series</span>
                </div>
                
                <ExhibitFrame
                  id={proj.id}
                  title={proj.title}
                  subtitle={proj.subtitle}
                  embedUrl={proj.embedUrl}
                  canvaUrl={proj.canvaUrl}
                  aspectRatioClass={proj.aspectRatio}
                  medium={proj.medium}
                  year={proj.year}
                  tags={proj.tags}
                  description={proj.description}
                  curatorialNoteText={proj.curatorialNote}
                />
              </div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="chamber-gallery-system" className="space-y-10 relative">
      
      {/* Absolute Decorative Motifs that react and blend during Chamber Transitions */}
      <MithilaMotif type="geometry" size={160} className="top-10 -left-20 opacity-20 pointer-events-none hidden lg:block" />
      <MithilaMotif type="lotus" size={140} className="bottom-20 -right-20 opacity-25 pointer-events-none hidden lg:block" />

      {/* Cinematic Curated Tab Selection Bar */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 border border-zinc-900/60 p-2.5 rounded-2xl bg-[#080808]/90 backdrop-blur-md max-w-4xl mx-auto relative z-20">
        {chambers.map((ch) => {
          const isActive = activeChamber === ch.id;
          const IconComponent = ch.icon;

          return (
            <button
              id={`chamber-tab-${ch.id}`}
              key={ch.id}
              onClick={() => handleChamberChange(ch.id)}
              className={`group flex-1 flex flex-col justify-between items-start text-left p-4 rounded-xl cursor-pointer transition-all duration-700 relative overflow-hidden ${
                isActive
                  ? "bg-[#0f0f0e] border border-terracotta/40 shadow-[0_4px_24px_rgba(141,76,50,0.08)]"
                  : "bg-transparent border border-transparent hover:border-zinc-800/80 hover:bg-[#0c0c0c]/40"
              }`}
            >
              <div className="flex justify-between items-start w-full gap-2">
                <span className="font-mono text-[9px] tracking-widest text-terracotta/75 group-hover:text-terracotta transition-colors uppercase">
                  {ch.name}
                </span>
                
                <span className="font-mono text-[8px] tracking-wider text-zinc-500 bg-zinc-950/80 border border-zinc-900 px-2 py-0.5 rounded">
                  {ch.badge}
                </span>
              </div>

              <div className="mt-4 space-y-1 flex items-center gap-3 w-full">
                <div className={`p-2 rounded-lg transition-transform duration-500 ${
                  isActive ? "bg-terracotta/10 text-terracotta" : "bg-zinc-900/40 text-zinc-500 group-hover:text-clay/80"
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div>
                  <h4 className={`font-serif text-sm transition-colors duration-500 ${
                    isActive ? "text-warm-beige" : "text-clay/60 group-hover:text-warm-beige"
                  }`}>
                    {ch.title}
                  </h4>
                  <p className="font-mono text-[9px] text-zinc-500">
                    {ch.subtitle}
                  </p>
                </div>
              </div>

              {/* Slider highlight layoutId underlay */}
              {isActive && (
                <motion.div
                  layoutId="activeChamberGlow"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-terracotta/20 via-terracotta to-terracotta/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Decorative Traditional Labeling acting as a separator */}
      <div className="flex items-center justify-between font-mono text-[9px] text-[#666] max-w-5xl mx-auto px-4 border-t border-zinc-900/10 pt-4">
        <span>संवादात्मक दीर्घा • SELECTED ACADEMIC ARCHIVES</span>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-terracotta" />
          <span className="text-clay/60 uppercase text-[8px] tracking-wider">FINE-ART MODE ACTIVE</span>
        </div>
        <span>LOCATION: IIT GUWAHATI REVIEW FORMAT</span>
      </div>

      {/* Dynamic Slide Container with cinematic wipe overlay and fade zoom transition */}
      <div className="relative max-w-5xl mx-auto overflow-visible min-h-[400px]">
        {/* The Cinematic Sweep/Wipe Curtain Mask Overlay */}
        <AnimatePresence>
          {transitioning && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#8D4C32] to-transparent pointer-events-none z-50 opacity-40 mix-blend-color-dodge h-full rounded-2xl"
              style={{
                boxShadow: "0 0 80px rgba(141,76,50,0.6)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Core Animated Showroom */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            {renderActiveContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
