import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  const startSound = () => {
    try {
      // Lazy initialize AudioContext on client gesture
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Master Gain for smooth fades
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 2.5); // very soft
      gainNodeRef.current = masterGain;

      // Low-pass Filter for dark, warm, velvety tone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, ctx.currentTime);
      filterNodeRef.current = filter;

      // Resonant Earth frequency: 136.1 Hz (C3# approx)
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(136.1, ctx.currentTime);
      
      // Secondary pitch for beautiful ambient unison (slightly detuned)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(136.4, ctx.currentTime + 0.5);

      // Connect nodes
      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Start oscillators
      osc.start();
      osc2.start();

      oscRef.current = osc;
      osc2Ref.current = osc2;
      setIsPlaying(true);
    } catch (e) {
      console.error("Web Audio initialization blocked or failed: ", e);
    }
  };

  const stopSound = () => {
    const ctx = audioCtxRef.current;
    const masterGain = gainNodeRef.current;

    if (ctx && masterGain) {
      // Smooth fade out to prevent pop sound
      masterGain.gain.cancelScheduledValues(ctx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);

      setTimeout(() => {
        try {
          oscRef.current?.stop();
          osc2Ref.current?.stop();
          oscRef.current?.disconnect();
          osc2Ref.current?.disconnect();
          gainNodeRef.current?.disconnect();
          filterNodeRef.current?.disconnect();
        } catch (err) {
          // Ignore if already stopped
        }
        setIsPlaying(false);
      }, 1300);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          osc2Ref.current?.stop();
        } catch (err) {}
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        id="ambient-sound-toggle-btn"
        onClick={toggleSound}
        className={`px-3 py-1.5 rounded-full border text-xs tracking-widest font-mono uppercase flex items-center gap-2 transition-all duration-500 cursor-pointer ${
          isPlaying
            ? "bg-terracotta text-warm-beige border-terracotta shadow-[0_0_15px_rgba(200,92,106,0.35)]"
            : "bg-charcoal-light/60 text-clay/60 border-zinc-800 hover:border-clay/30 hover:text-clay"
        }`}
        title="Activate ambient acoustic focus zone (136.1 Hz custom drone)"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-warm-beige" />
            <span>Sound on</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span>Sound off</span>
          </>
        )}
      </button>

      {isPlaying && (
        <span className="hidden md:flex items-center gap-1.5 text-[10px] text-terracotta/80 font-mono tracking-widest uppercase animate-fade-in">
          <Sparkles className="w-3 h-3 animate-spin duration-3000" />
          <span>Vernacular Ambient Resonance (136.1 Hz) Active</span>
        </span>
      )}
    </div>
  );
}
