import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Layers,
  Sparkles,
  Award,
  BookOpen,
  Mail,
  Instagram,
  Eye,
  ArrowDownCircle,
  Clock,
  Send,
  CheckCircle,
  MapPin,
  ExternalLink,
  Info,
  Sliders,
  ChevronRight,
  User
} from "lucide-react";

import {
  ACADEMIC_PROFILE,
  CORE_PHILOSOPHY,
  MAIN_PORTFOLIO,
  STORY_ILLUSTRATION,
  PHOTOGRAPHY_PROJECTS,
  BIHAR_ROOTS_STUDY,
  RESUME_TIMELINE,
  CURRICULUM_VITAE
} from "./data";

import ExhibitionLoader from "./components/ExhibitionLoader";
import AmbientSound from "./components/AmbientSound";
import MadhubaniBorder from "./components/MadhubaniBorder";
import ExhibitFrame from "./components/ExhibitFrame";
import PhilosophyStudio from "./components/PhilosophyStudio";
import MithilaMotif from "./components/MithilaMotif";
import PhilosophyQuoteRevealer from "./components/PhilosophyQuoteRevealer";
import ChamberNavigator from "./components/ChamberNavigator";

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [patnaTime, setPatnaTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedExhibitionTag, setSelectedExhibitionTag] = useState<string>("all");
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number>(0);
  const [activeChamber, setActiveChamber] = useState<"dossier" | "narration" | "observation">("dossier");
  const [imageError, setImageError] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLElement>(null);
  const photographyRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const rootsRef = useRef<HTMLElement>(null);
  const cvRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Dynamic Time Ticking in Patna (IST, UTC +5:30)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setPatnaTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track dynamic mouse positions for flashlight "lighting-glow" hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll active section tracker and Navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Navbar visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);

      const scrollPos = currentScrollY + window.innerHeight / 3;

      if (heroRef.current && scrollPos >= heroRef.current.offsetTop && scrollPos < heroRef.current.offsetTop + heroRef.current.offsetHeight) {
        setActiveSection("hero");
      } else if (aboutRef.current && scrollPos >= aboutRef.current.offsetTop && scrollPos < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
        setActiveSection("about");
      } else if (philosophyRef.current && scrollPos >= philosophyRef.current.offsetTop && scrollPos < philosophyRef.current.offsetTop + philosophyRef.current.offsetHeight) {
        setActiveSection("philosophy");
      } else if (portfolioRef.current && scrollPos >= portfolioRef.current.offsetTop && scrollPos < portfolioRef.current.offsetTop + portfolioRef.current.offsetHeight) {
        if (activeChamber === "dossier") {
          setActiveSection("portfolio");
        } else if (activeChamber === "narration") {
          setActiveSection("illustration");
        } else if (activeChamber === "observation") {
          setActiveSection("photography");
        }
      } else if (processRef.current && scrollPos >= processRef.current.offsetTop && scrollPos < processRef.current.offsetTop + processRef.current.offsetHeight) {
        setActiveSection("process");
      } else if (rootsRef.current && scrollPos >= rootsRef.current.offsetTop && scrollPos < rootsRef.current.offsetTop + rootsRef.current.offsetHeight) {
        setActiveSection("roots");
      } else if (cvRef.current && scrollPos >= cvRef.current.offsetTop && scrollPos < cvRef.current.offsetTop + cvRef.current.offsetHeight) {
        setActiveSection("cv");
      } else if (contactRef.current && scrollPos >= contactRef.current.offsetTop) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, activeChamber]);

  // Form Submission Logic
  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/payalpriyadarshi1403@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: contactName,
            email: contactEmail,
            message: contactMessage
        })
      });
      setIsSubmitting(false);
      setFormSubmitted(true);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      // Reset after 5s
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Curated list of all photo/illustration tags
  const ALL_SHOWCASE_TAGS = ["all", "Visual Identity", "Photography", "Folk Literature", "Minimalist Frames", "Storyboarding"];

  return (
    <div className="relative min-h-screen selection:bg-terracotta selection:text-warm-beige select-none bg-charcoal-deep font-sans">
      {/* Background Subtle Cinematic Overlay Blobs from Sleek Interface Theme */}
      <div className="absolute -bottom-48 -left-20 w-96 h-96 bg-[#8D4C32] rounded-full blur-[180px] opacity-[0.08] pointer-events-none z-0"></div>
      <div className="absolute -top-48 -right-20 w-96 h-96 bg-[#2a2a2a] rounded-full blur-[180px] opacity-[0.15] pointer-events-none z-0"></div>

      {/* Immersive Cinematic Atmosphere Helpers */}
      <div className="paper-overlay" />
      
      {/* Dynamic Flashlight Glow */}
      <div
        className="glow-effect hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          position: "fixed",
        }}
      />

      <AnimatePresence>
        {!loaderComplete && (
          <ExhibitionLoader onComplete={() => setLoaderComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className={`transition-all duration-1000 ${loaderComplete ? "opacity-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        
        {/* Navigation & Exhibition rail */}
        <header className={`fixed top-0 inset-x-0 bg-charcoal-deep/85 backdrop-blur-md border-b border-zinc-900/60 z-50 px-6 py-4 transition-all duration-500 ease-in-out ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo details with contemporary design-school identity */}
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-wide text-warm-beige">Payal Priyadarshini</span>
              <span className="h-4 w-[1px] bg-zinc-800" />
              <span className="font-mono text-[9px] text-clay/40 hidden sm:inline tracking-wider">M.Des Admission & Portfolio Review</span>
            </div>

            {/* Scientific Navigation Metrics and Audio Toggle */}
            <div className="flex items-center gap-6">
              
              {/* Patna Ticking local time clock */}
              <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-clay/50 border-r border-zinc-900 pr-6">
                <Clock className="w-3.5 h-3.5 text-terracotta" />
                <span>पटना, बिहार (Patna, Bihar) — IST {patnaTime || "17:48:43"}</span>
              </div>

              {/* Ambient sound trigger for interview impact */}
              <AmbientSound />
            </div>
          </div>
        </header>

        {/* Side Indicator Dot Bar for modern scrolling museum layout */}
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 hidden xl:flex">
          {[
            { tag: "hero", label: "Entrance" },
            { tag: "about", label: "The Artist" },
            { tag: "philosophy", label: "Philosophy" },
            { tag: "portfolio", label: "Portfolio" },
            { tag: "illustration", label: "Narration" },
            { tag: "photography", label: "Observation" },
            { tag: "process", label: "Progression" },
            { tag: "roots", label: "Vernacular Roots" },
            { tag: "cv", label: "Curriculum Vitae" },
            { tag: "contact", label: "Enquiries" }
          ].map((item) => (
            <button
              id={`nav-dot-${item.tag}`}
              key={item.tag}
              onClick={() => {
                if (item.tag === "portfolio") {
                  setActiveChamber("dossier");
                } else if (item.tag === "illustration") {
                  setActiveChamber("narration");
                } else if (item.tag === "photography") {
                  setActiveChamber("observation");
                }

                const targetRef = 
                  item.tag === "hero" ? heroRef :
                  item.tag === "about" ? aboutRef :
                  item.tag === "philosophy" ? philosophyRef :
                  item.tag === "portfolio" ? portfolioRef :
                  item.tag === "illustration" ? portfolioRef :
                  item.tag === "photography" ? portfolioRef :
                  item.tag === "process" ? processRef :
                  item.tag === "roots" ? rootsRef :
                  item.tag === "cv" ? cvRef : contactRef;
                scrollToRef(targetRef);
              }}
              className="group flex items-center justify-end gap-3 text-right cursor-pointer"
            >
              <span className="font-mono text-[9px] text-clay/0 group-hover:text-clay/60 transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
                {item.label}
              </span>
              <div
                className={`w-1.5 h-1.5 rounded-full border transition-all duration-500 ${
                  activeSection === item.tag
                    ? "bg-terracotta border-terracotta scale-150 shadow-[0_0_10px_rgba(200,92,66,0.5)]"
                    : "bg-transparent border-zinc-700 group-hover:border-clay"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* ==================================================== */}
        {/* 1. HERO SECTION */}
        {/* ==================================================== */}
        <section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center relative pt-24 overflow-hidden px-6 pb-12"
        >
          {/* Subtle slow floating particles to emulate gallery dust */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-terracotta/30 animate-pulse"
                style={{
                  left: `${(i * 9.7 + 5) % 100}%`,
                  top: `${(i * 12.3 + 12) % 100}%`,
                  animationDelay: `${i * 0.75}s`,
                  animationDuration: `${5 + (i % 3) * 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-15">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-terracotta font-medium block">
                  प्रवेशार्थ संचयन • M.DES PORTFOLIO
                </span>
                
                {/* Micro Madhubani Line Separator */}
                <MadhubaniBorder variant="horizontal" className="max-w-xs py-0.5" opacity={0.4} />

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-warm-beige leading-none font-light mt-4">
                  PAYAL
                  <br />
                  <span className="font-style: italic font-light text-clay/85 text-4xl md:text-6xl lg:text-7xl block mt-1">Priyadarshini</span>
                </h1>
                
                <h2 className="font-mono text-xs md:text-sm tracking-widest text-clay/50 uppercase pt-2">
                  M.Des Aspirant • Visual Storyteller • Observer Photographer
                </h2>
              </div>

              {/* Central high-art design quote */}
              <blockquote className="border-l border-terracotta/40 pl-6 space-y-2">
                <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-clay/90 font-light">
                  “{ACADEMIC_PROFILE.philosophyQuote}”
                </p>
                <cite className="block font-mono text-[10px] text-clay/35 tracking-wider uppercase">
                  — The Aesthetic Manifesto
                </cite>
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  id="view-curation-btn"
                  onClick={() => scrollToRef(portfolioRef)}
                  className="px-6 py-3 rounded-full bg-terracotta/90 hover:bg-terracotta text-warm-beige font-mono text-xs tracking-widest uppercase transition-all duration-500 hover:shadow-[0_4px_20px_rgba(200,92,66,0.3)] cursor-pointer text-center"
                >
                  View Digital Archive
                </button>
                
                <button
                  id="read-bio-btn"
                  onClick={() => scrollToRef(aboutRef)}
                  className="px-6 py-3 rounded-full border border-zinc-800 text-clay/80 hover:text-warm-beige hover:border-clay/40 transition-all duration-500 font-mono text-xs tracking-widest uppercase cursor-pointer text-center"
                >
                  Read Curator Statement
                </button>
              </div>
            </div>

            {/* Right Picture Frame Column: Curated B&W Portrait / Architectural Frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Luxury Frame Backdrop with soft Earth color aura */}
              <div className="w-full max-w-[380px] aspect-[3/4] bg-[#0E0E0E] rounded-2xl border border-zinc-900/80 p-3.5 relative shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden group">
                
                {/* Thin Madhubani-inspired corner details inside framing */}
                <MadhubaniBorder variant="corner" className="absolute top-1 left-1 rotate-0 text-terracotta/40" opacity={0.5} />
                <MadhubaniBorder variant="corner" className="absolute top-1 right-1 rotate-90 text-terracotta/40" opacity={0.5} />
                <MadhubaniBorder variant="corner" className="absolute bottom-1 left-1 -rotate-90 text-terracotta/40" opacity={0.5} />
                <MadhubaniBorder variant="corner" className="absolute bottom-1 right-1 rotate-180 text-terracotta/40" opacity={0.5} />

                {/* Highly beautiful, film-vignetted fine-art picture portrait */}
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-black group/portrait">
                  
                  {/* Portrait loading directly from public/DSCF7230.JPG with a high-fidelity fine-art fallback */}
                  <img
                    id="hero-bw-portrait"
                    src={imageError ? "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1200&auto=format&fit=crop" : "DSCF7230.JPG"}
                    onError={() => setImageError(true)}
                    alt="Fine Art Portrait — Payal Priyadarshini"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.82] transition-all duration-[2000ms] group-hover:scale-105 group-hover:brightness-[0.92]"
                  />

                  {/* Localized cinematic film-grain overlay to emulate vintage silver halide film grain specifically on this portrait */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22portraitNoise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.95%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23portraitNoise)%22/%3E%3C/svg%3E')] opacity-[0.09] mix-blend-overlay pointer-events-none z-10" />

                  {/* Deep gallery-style vignette filter overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 pointer-events-none" />
                  <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 15%, rgba(10,10,10,0.95) 100%) pointer-events-none" />

                  {/* Elegant authentic catalog caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-left space-y-1 bg-black/60 backdrop-blur-xs p-3 rounded-lg border border-zinc-900/60 pointer-events-none">
                    <span className="font-mono text-[9px] text-terracotta tracking-widest uppercase block font-semibold">
                      PAYAL PRIYADARSHINI
                    </span>
                    <p className="font-serif text-[11px] text-warm-beige font-light leading-snug">
                      Portrait of the artist (पटना, बिहार)
                    </p>
                    <p className="font-mono text-[7px] text-clay/45">
                      Focal Length: 35mm Prime • Silver Halide Documentary Archive
                    </p>
                  </div>
                </div>
              </div>

              {/* Abstract Terracotta-earth sun outline behind frame representing roots */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full border border-terracotta/10 pointer-events-none -z-10" />
              <div className="absolute -top-6 -left-6 w-56 h-56 rounded-full border border-zinc-900/40 pointer-events-none -z-10" />
            </div>

          </div>

          {/* Smooth Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-clay/35 z-10 animate-bounce">
            <span className="font-mono text-[9px] tracking-widest uppercase">Begin Downward Curation</span>
            <ArrowDownCircle className="w-4 h-4 text-terracotta/80" />
          </div>
        </section>

        {/* ==================================================== */}
        {/* 2. ABOUT THE ARTIST */}
        {/* ==================================================== */}
        <section
          id="about"
          ref={aboutRef}
          className="py-24 px-6 border-t border-zinc-950/40 bg-[#080808]/80 relative overflow-hidden"
        >
          {/* Subtle Parallax Background Motifs for cultural grounding */}
          <MithilaMotif type="fish" size={130} className="-left-8 top-12 opacity-[0.05] pointer-events-none" />
          <MithilaMotif type="lotus" size={150} className="-right-10 bottom-24 opacity-[0.06] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Side headers typical of Japanese edit layouts */}
              <div className="lg:col-span-4 text-left space-y-4 lg:sticky lg:top-28">
                <span className="text-[10px] font-mono tracking-widest text-clay/50 uppercase block">
                  कलाकार परिचय • ARTIST BIOGRAPHY
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-warm-beige tracking-wide font-light">
                  About Me
                </h3>
                
                <MadhubaniBorder variant="horizontal" className="max-w-[120px]" opacity={0.3} />

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-clay/60">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    <span>पटना, बिहार (Patna, Bihar, India)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-clay/60">
                    <User className="w-3.5 h-3.5 text-terracotta" />
                    <span>IIT Guwahati M.Des Aspirant</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-clay/60">
                    <Award className="w-3.5 h-3.5 text-terracotta" />
                    <span>Fine Arts & Visual Ethnography</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Biography Blocks */}
              <div className="lg:col-span-8 text-left space-y-8">
                <p className="font-serif text-2xl md:text-3xl text-warm-beige leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-terracotta first-letter:mr-2 first-letter:float-left">
                  {ACADEMIC_PROFILE.academicBio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <h4 className="font-serif text-xl text-warm-beige border-b border-zinc-900 pb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-terracotta" />
                      Visual Ethnographer
                    </h4>
                    <p className="text-sm text-clay/70 leading-relaxed font-light">
                      Her lens studies the structural geometry of everyday Indian transit spaces. Rather than snapshotting scenes, Payal maps the invisible dialogue between local architecture and biological human forms.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-xl text-warm-beige border-b border-zinc-900 pb-2 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-terracotta" />
                      Cultural Semanticist
                    </h4>
                    <p className="text-sm text-clay/70 leading-relaxed font-light">
                      Born and working from Patna, she views traditional Mithila rules not as archaic ornament, but as a robust digital layouts framework. Her work extracts these principles to construct clean, minimal modern displays.
                    </p>
                  </div>
                </div>

                {/* Inline Double line border representative of the Mithila double rule style */}
                <MadhubaniBorder variant="horizontal" className="py-2" opacity={0.25} />

                {/* Personal Philosophy Quote with subtle hover reveal animation */}
                <div className="pt-6">
                  <span className="font-mono text-[9px] text-[#555] tracking-widest uppercase block mb-3">
                    Core Philosophy & manifesto
                  </span>
                  <PhilosophyQuoteRevealer quote={ACADEMIC_PROFILE.philosophyQuote} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 3. PHILOSOPHY / DESIGN THINKING */}
        {/* ==================================================== */}
        <section
          id="philosophy"
          ref={philosophyRef}
          className="py-24 px-6 bg-charcoal-deep"
        >
          <div className="max-w-7xl mx-auto">
            <PhilosophyStudio />
          </div>
        </section>

        {/* ==================================================== */}
        {/* 4. MAIN PORTFOLIO SHOWCASE */}
        {/* ==================================================== */}
        <section
          id="portfolio"
          ref={portfolioRef}
          className="py-24 px-6 bg-[#080808]/80 relative"
        >
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header Block */}
            <div className="text-center max-w-2xl mx-auto space-y-2 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase">
                प्रदर्शन दीर्घा • THE EXHIBITION CHAMBERS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-warm-beige tracking-wide font-light">
                Digital Curation & Dossiers
              </h2>
              <p className="text-xs text-clay/50 font-mono">
                Click across the three gallery chambers to trigger custom animated transitions, mask reveals, and detail pans.
              </p>
              
              <div className="flex justify-center pt-2">
                <MadhubaniBorder variant="horizontal" className="max-w-[200px]" opacity={0.4} />
              </div>
            </div>

            {/* Unified Showcase with Cinematic Transition Animations */}
            <ChamberNavigator activeChamber={activeChamber} setActiveChamber={setActiveChamber} />

          </div>
        </section>

        {/* ==================================================== */}
        {/* 7. PROCESS & EXPLORATION (INTERACTIVE CHRONOLOGY) */}
        {/* ==================================================== */}
        <section
          id="process"
          ref={processRef}
          className="py-24 px-6 bg-charcoal-deep relative overflow-hidden"
        >
          {/* Subtle slow drifting aripana geometric grid in timeline background */}
          <MithilaMotif type="geometry" size={240} className="right-4 top-10 opacity-[0.03] rotate-12 pointer-events-none" />

          <div className="max-w-6xl mx-auto">
            <div className="space-y-1 mb-12 text-left">
              <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase block">
                शोध प्रक्रिया एवं विकास • RESEARCH & JOURNEY
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-warm-beige tracking-wide font-light">
                My Creative Timeline
              </h3>
              <p className="text-xs text-clay/50 font-mono">
                Click through the milestones to explore my experiences, research, and design progression.
              </p>
            </div>

            {/* Split dashboard layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Interactive Chronology Selector Panel */}
              <div className="lg:col-span-6 space-y-1">
                <div className="relative border-l border-zinc-900/80 ml-4 py-2 space-y-4">
                  
                  {RESUME_TIMELINE.map((item, idx) => {
                    const isActive = activeTimelineIndex === idx;

                    return (
                      <button
                        id={`timeline-node-${idx}`}
                        key={idx}
                        onClick={() => setActiveTimelineIndex(idx)}
                        className={`w-full text-left pl-8 relative group transition-all duration-500 rounded-r-xl py-3 pr-4 pointer-events-auto cursor-pointer border-l-2 -ml-[1px] block ${
                          isActive
                            ? "bg-[#0d0d0c] border-terracotta text-warm-beige shadow-inner"
                            : "bg-transparent border-transparent text-clay/50 hover:bg-[#0c0c0c]/10 hover:text-clay/80"
                        }`}
                      >
                        {/* Interactive Node indicator with double rule styles */}
                        <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                          isActive
                            ? "bg-terracotta scale-125 border-4 border-charcoal-deep shadow-[0_0_10px_rgba(141,76,50,0.8)]"
                            : "bg-zinc-900 border-2 border-zinc-700 group-hover:bg-terracotta group-hover:scale-110"
                        }`} />

                        <div className="flex justify-between items-center gap-2">
                          <span className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-500 ${
                            isActive ? "text-terracotta" : "text-clay/40"
                          }`}>
                            {item.year}
                          </span>
                          
                          <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                            Milestone 0{idx + 1}
                          </span>
                        </div>

                        <h4 className={`font-serif text-lg font-light mt-1 transition-colors duration-500 ${
                          isActive ? "text-warm-beige" : "text-clay/70"
                        }`}>
                          {item.role}
                        </h4>

                        <p className="text-xs font-mono text-zinc-500 mt-0.5">
                          {item.institution}
                        </p>
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Right Column: Dynamic Deep Curation Detail Card with sliding transitions */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="h-full min-h-[300px] bg-[#0d0d0c] border border-zinc-900/80 rounded-2xl p-6 md:p-8 relative flex flex-col justify-between overflow-hidden shadow-2xl group shadow-black/80">
                  
                  {/* Fine art corner accents inside the card */}
                  <div className="absolute top-2 left-2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-[1000ms]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terracotta">
                      <line x1="1" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="1" y1="1" x2="15" y2="1" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 right-2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-[1000ms]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terracotta">
                      <line x1="19" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="19" y1="19" x2="5" y2="19" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <AnimatePresence mode="wait">
                    {RESUME_TIMELINE.map((item, idx) => {
                      if (activeTimelineIndex !== idx) return null;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="space-y-6 flex-grow flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-zinc-950 pb-4">
                              <div>
                                <span className="font-mono text-[9px] text-terracotta tracking-widest uppercase block">
                                  मील का पत्थर • MILESTONE {item.year}
                                </span>
                                <h4 className="font-serif text-xl text-warm-beige mt-1">
                                  {item.role}
                                </h4>
                              </div>
                              <div className="text-right">
                                <span className="font-serif text-[11px] italic text-clay/40 block">
                                  {item.institution}
                                </span>
                              </div>
                            </div>

                            <p className="text-sm text-clay/80 leading-relaxed font-sans font-light">
                              {item.focus}
                            </p>
                          </div>

                          <div className="space-y-2 pt-6 mt-6 border-t border-zinc-950">
                            {/* Visual highlight tag metrics for semantic design feel */}
                            <div className="flex flex-wrap gap-2">
                              {["Candidacy Research", "Field Documentation", "Slow Ethnography", "Typography Grid"].slice(0, 3 + (idx % 2)).map((tag) => (
                                <span key={tag} className="font-mono text-[8px] text-clay/60 border border-zinc-800 px-2.5 py-1 rounded bg-[#0a0a0a]">
                                  ✦ {tag}
                                </span>
                              ))}
                            </div>

                            <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-2 pt-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                              <span>RESEARCH AND DEVELOPMENT DOCUMENT ARCHIVE</span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 8. CULTURAL INSPIRATION DETAILS */}
        {/* ==================================================== */}
        <section
          id="roots"
          ref={rootsRef}
          className="py-24 px-6 bg-[#080808]/80 relative"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center md:text-left space-y-2 mb-12">
              <span className="text-[10px] font-mono tracking-widest text-clay/50 uppercase block">
                देशज विन्यास अध्ययन • VERNACULAR GEOMETRY STUDY
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-warm-beige tracking-wide font-light flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>The</span>
                <span className="text-terracotta border-b border-terracotta/40 font-semibold px-1.5 py-0.5 rounded-sm bg-terracotta/5">बिहार</span>
                <span>Vernacular Synthesis</span>
              </h3>
              <p className="text-xs text-clay/50 font-mono mt-0.5">
                How Payal Priyadarshini translates historic बिहार (Bihar) identity into clean contemporary art.
              </p>
            </div>

            {/* Triple grid elements of बिहार roots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIHAR_ROOTS_STUDY.elements.map((elem, i) => (
                <div key={i} className="bg-charcoal-deep border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition-all duration-500 select-none text-left flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-terracotta">0{i + 1}</span>
                    <h4 className="font-serif text-xl text-warm-beige">{elem.name}</h4>
                    <p className="text-xs text-clay/60 leading-relaxed font-light">
                      {elem.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-zinc-950 mt-6 pt-4">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase block">Implementation Style:</span>
                    <p className="font-serif text-[11.5px] italic text-clay/40 mt-1">{elem.visualRepresentation}</p>
                  </div>
                </div>
              ))}
            </div>

            <MadhubaniBorder variant="horizontal" className="mt-12 py-3" opacity={0.3} />
          </div>
        </section>

        {/* ==================================================== */}
        {/* 9. RESUME / CV SECTION */}
        {/* ==================================================== */}
        <section
          id="cv"
          ref={cvRef}
          className="py-24 px-6 bg-charcoal-deep"
        >
          <div className="max-w-5xl mx-auto bg-charcoal-light/30 border border-zinc-900 rounded-2xl p-6 md:p-10 relative overflow-hidden text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-900/40">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase">शैक्षणिक सारांश • ACADEMIC SYNOPSIS</span>
                <h3 className="font-serif text-2xl md:text-3xl text-warm-beige font-light mt-1">Curriculum Vitae</h3>
              </div>
              
              <a
                id="view-canva-portfolio-btn"
                href="https://www.canva.com/design/DAHKCwPJ1R8/XGrS1Xw6_6tZjqCPQ1sqtw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-terracotta text-warm-beige hover:bg-terracotta transition-all duration-700 font-mono text-xs tracking-widest uppercase cursor-pointer flex items-center gap-2"
              >
                <span>Launch Core Canva (A3 Dossier)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CV details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              
              {/* Education section */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-terracotta border-b border-zinc-950 pb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Education Curation
                </h4>
                
                <div className="space-y-4">
                  {CURRICULUM_VITAE.education.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <h5 className="font-serif text-md text-warm-beige font-semibold">{edu.degree}</h5>
                      <p className="text-xs text-clay/60 font-mono">{edu.institution}</p>
                      <p className="text-[10px] text-terracotta/75 font-mono">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills section */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-terracotta border-b border-zinc-950 pb-2 flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  Selected Capabilities
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Creative Expertise</span>
                    <div className="flex flex-wrap gap-1.5">
                      {CURRICULUM_VITAE.skills.creative.map((sk, idx) => (
                        <span key={idx} className="bg-charcoal-deep border border-zinc-900/60 text-clay/70 font-mono text-[10px] px-2.5 py-1 rounded">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Technological Fluency</span>
                    <div className="flex flex-wrap gap-1.5">
                      {CURRICULUM_VITAE.skills.technical.map((sk, idx) => (
                        <span key={idx} className="bg-charcoal-deep border border-zinc-900/60 text-clay/70 font-mono text-[10px] px-2.5 py-1 rounded">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Exhibitions Timeline Row */}
            <div className="mt-8 pt-6 border-t border-zinc-900/40">
              <h4 className="font-serif text-lg text-terracotta mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Exhibitions & Participations
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CURRICULUM_VITAE.exhibitions.map((exh, i) => (
                  <li key={i} className="bg-[#0b0b0b] border border-zinc-950 p-4 rounded-lg flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-terracotta mt-0.5 shrink-0" />
                    <span className="text-xs text-clay/80 leading-relaxed font-light">{exh}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ==================================================== */}
        {/* 10. CONTACT & LINKS */}
        {/* ==================================================== */}
        <section
          id="contact"
          ref={contactRef}
          className="py-24 px-6 bg-[#080808]/80 relative"
          style={{ contentVisibility: "auto" }}
        >
          {/* Madhubani double pattern at top */}
          <div className="absolute top-0 inset-x-0">
            <MadhubaniBorder variant="horizontal" opacity={0.2} />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left Column Text details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-terracotta uppercase block">
                सम्पर्क सूत्र • INITIATE CONTACT
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-warm-beige tracking-wide font-light">
                Initiate Dialogue
              </h3>
              
              <p className="text-sm text-clay/70 leading-relaxed font-light font-sans">
                Professors, evaluation team, or collaborators looking to discuss design research, visual essays, or academic alignment in M.Des at IIT Guwahati can send a direct transmission.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">DIRECT EMAIL</span>
                <a
                  id="direct-email-link"
                  href={`mailto:${ACADEMIC_PROFILE.email}`}
                  className="text-md font-serif text-warm-beige hover:text-terracotta transition-colors flex items-center gap-2 underline"
                >
                  <Mail className="w-4 h-4 text-terracotta" />
                  <span>{ACADEMIC_PROFILE.email}</span>
                </a>
              </div>

              <div className="space-y-4 pt-1">
                <span className="font-mono text-[9px] text-zinc-500 uppercase block">GEOGRAPHICAL HQ</span>
                <p className="text-xs font-mono text-clay/60 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>पटना, बिहार (Patna, Bihar, India)</span>
                </p>
              </div>
            </div>

            {/* Right Column Interactive message sender */}
            <div className="lg:col-span-7 bg-charcoal-deep border border-zinc-900 rounded-2xl p-6 md:p-8 relative">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle className="w-12 h-12 text-terracotta animate-pulse" />
                    <div>
                      <h4 className="font-serif text-xl text-warm-beige font-light">Message Transmitted</h4>
                      <p className="text-xs text-clay/50 font-mono mt-1">
                        Your message has been received successfully. Thank you for your inquiry.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmitContact}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-mono text-[9px] text-[#555] uppercase mb-1">Your Name</label>
                      <input
                        id="form-name-input"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Evaluation Panelist / Professor"
                        className="w-full bg-[#0a0a0a] border border-zinc-900 rounded-lg p-3 text-sm text-warm-beige focus:outline-none focus:border-terracotta/60 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] text-[#555] uppercase mb-1">Your Email</label>
                      <input
                        id="form-email-input"
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. professor@iitg.ac.in"
                        className="w-full bg-[#0a0a0a] border border-zinc-900 rounded-lg p-3 text-sm text-warm-beige focus:outline-none focus:border-terracotta/60 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] text-[#555] uppercase mb-1">Message Query</label>
                      <textarea
                        id="form-message-input"
                        required
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Write questions regarding curation, design thinking pillars, or illustration portfolios..."
                        className="w-full bg-[#0a0a0a] border border-zinc-900 rounded-lg p-3 text-sm text-warm-beige focus:outline-none focus:border-terracotta/60 transition-colors font-sans"
                      />
                    </div>

                    <button
                      id="submit-enquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg bg-terracotta hover:bg-terracotta-dark text-warm-beige border border-transparent font-mono text-xs tracking-widest uppercase transition-all duration-300 font-semibold cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border border-zinc-800 border-t-warm-beige animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal-deep border-t border-zinc-950 py-12 px-6 text-center text-xs text-zinc-500 font-mono relative">
          <div className="max-w-7xl mx-auto space-y-6">
            <MadhubaniBorder variant="horizontal" opacity={0.15} />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px]">
              <div className="text-left space-y-1">
                <p className="text-warm-beige font-serif tracking-wide text-xs">PAYAL PRIYADARSHINI</p>
                <p className="text-[9px] text-zinc-600">Visual Portfolio Portfolio Archive. All rights curated.</p>
              </div>

              <div className="text-center md:text-right space-y-1">
                <p>Designed on Contemporary Mithila Spacing Grids</p>
                <p className="text-[9px] text-zinc-600">Built using React, TailwindCSS & Motion</p>
              </div>
            </div>
            
            <div className="pt-4 text-[9px] border-t border-zinc-900 text-zinc-700">
              IIT Guwahati • M.Des Admission Presentation Portfolio (2026)
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
