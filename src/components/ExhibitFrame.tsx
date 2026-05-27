import React, { useState } from "react";
import { ExternalLink, Maximize2, FileText, Sparkles, HelpCircle } from "lucide-react";
import MadhubaniBorder from "./MadhubaniBorder";

interface ExhibitFrameProps {
  id: string;
  title: string;
  subtitle: string;
  embedUrl: string;
  canvaUrl: string;
  aspectRatioClass?: string; // e.g. "pb-[70.71%]"
  medium: string;
  year: string;
  tags: string[];
  description: string;
  curatorialNoteText: string;
}

export default function ExhibitFrame({
  id,
  title,
  subtitle,
  embedUrl,
  canvaUrl,
  aspectRatioClass = "pb-[70.71%]",
  medium,
  year,
  tags,
  description,
  curatorialNoteText,
}: ExhibitFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div
      id={`exhibit-wrapper-${id}`}
      className="group relative bg-[#0D0D0D] border border-zinc-900 rounded-xl p-4 md:p-6 lg:p-8 hover:border-zinc-700/60 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Earth Glow Accent around active frame */}
      <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl pointer-events-none" />

      {/* Museum Style Brass corner markings */}
      <MadhubaniBorder variant="corner" className="absolute top-2 left-2 rotate-0 text-terracotta/40 group-hover:text-terracotta/80 transition-colors duration-500" opacity={0.5} />
      <MadhubaniBorder variant="corner" className="absolute top-2 right-2 rotate-90 text-terracotta/40 group-hover:text-terracotta/80 transition-colors duration-500" opacity={0.5} />
      <MadhubaniBorder variant="corner" className="absolute bottom-2 left-2 -rotate-90 text-terracotta/40 group-hover:text-terracotta/80 transition-colors duration-500" opacity={0.5} />
      <MadhubaniBorder variant="corner" className="absolute bottom-2 right-2 rotate-180 text-terracotta/40 group-hover:text-terracotta/80 transition-colors duration-500" opacity={0.5} />

      {/* Top Header Labeling */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6 pb-4 border-b border-zinc-900 relative z-10">
        <div>
          <span className="text-[10px] font-mono text-terracotta tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-terracotta" />
            Exhibit Dossier #{id.toUpperCase()}
          </span>
          <h3 className="font-serif text-2xl text-warm-beige mt-1 tracking-wide">{title}</h3>
          <p className="text-xs text-clay/60 font-mono mt-0.5">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-clay/40 font-mono hidden sm:inline">Medium: {medium}</span>
          <span className="text-xs text-terracotta/80 font-mono border border-terracotta/30 px-2 py-0.5 rounded text-[10px]">{year}</span>
        </div>
      </div>

      {/* Interactive Embed Container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-black border border-zinc-950 shadow-inner group-hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition-all duration-700">
        
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal-deep/95 z-40 gap-4">
            <div className="w-8 h-8 rounded-full border border-terracotta/30 border-t-terracotta animate-spin" />
            <p className="font-mono text-[10px] text-clay/40 tracking-wider">Mounting gallery artifact...</p>
          </div>
        )}

        {/* Canva Embed Screen Wrapper */}
        <div className={`relative w-full ${aspectRatioClass} overflow-hidden h-0`}>
          <iframe
            id={`iframe-${id}`}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-none p-0 m-0 z-10 rounded-lg filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-1000"
            src={embedUrl}
            allowFullScreen
            allow="fullscreen"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Cinematic Vignette Overlay block */}
        <div className="absolute inset-0 cinematic-vignette pointer-events-none z-20 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
      </div>

      {/* Sub-exhibition curation plaque */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10 text-left">
        <div className="lg:col-span-8 space-y-3">
          <p className="text-sm text-clay/80 leading-relaxed font-sans font-light">
            <span className="font-serif text-lg font-normal text-warm-beige inline-block mr-1">“</span>
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t, idx) => (
              <span key={idx} className="text-[10px] font-mono text-clay/50 bg-[#121212] px-2.5 py-1 rounded-sm border border-zinc-900">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Custom Curatorial Placement Plaque - classic museum wall labels */}
        <div className="lg:col-span-4 bg-charcoal-light/40 border-l-2 border-terracotta/80 p-4 rounded-r-lg space-y-2">
          <span className="block text-[10px] font-mono tracking-widest text-terracotta uppercase">Curatorial Direction</span>
          <p className="text-xs text-clay/60 italic leading-relaxed font-serif">
            {curatorialNoteText}
          </p>
          
          <div className="pt-2 flex gap-3">
            <a
              id={`link-canva-out-${id}`}
              href={canvaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-warm-beige hover:text-terracotta flex items-center gap-1.5 underline underline-offset-4 decoration-terracotta/30 hover:decoration-terracotta transition-all cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Launch Original Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
