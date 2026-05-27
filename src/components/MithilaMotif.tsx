import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MithilaMotifProps {
  type: "sun" | "lotus" | "fish" | "geometry";
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function MithilaMotif({
  type,
  className = "",
  size = 120,
  interactive = true,
}: MithilaMotifProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to emulate float resistance
  const springConfig = { damping: 40, stiffness: 120, mass: 1 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate delta from screen center
      const deltaX = (e.clientX - window.innerWidth / 2) * 0.05;
      const deltaY = (e.clientY - window.innerHeight / 2) * 0.05;
      mouseX.set(deltaX);
      mouseY.set(deltaY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  const renderIcon = () => {
    switch (type) {
      case "sun":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="text-terracotta fill-none"
            opacity="0.25"
          >
            {/* Traditional Mithila radiant sun with double-line circles and kachni-stroke rays */}
            <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1.5" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />

            {/* Radiant spikes - alternating long lines and short dots */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              const x1 = 50 + 20 * Math.cos(rad);
              const y1 = 50 + 20 * Math.sin(rad);
              const x2 = 50 + (i % 2 === 0 ? 32 : 26) * Math.cos(rad);
              const y2 = 50 + (i % 2 === 0 ? 32 : 26) * Math.sin(rad);

              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth={i % 2 === 0 ? "0.75" : "0.5"}
                    opacity="0.8"
                  />
                  {i % 2 !== 0 && (
                    <circle
                      cx={50 + 30 * Math.cos(rad)}
                      cy={50 + 30 * Math.sin(rad)}
                      r="1"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        );

      case "lotus":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="text-clay fill-none"
            opacity="0.2"
          >
            {/* Symmetrical Folk lotus illustration - pure vectors with double fine boundary curves */}
            <path
              d="M 50,75 C 50,75 58,55 58,45 C 58,35 50,22 50,22 C 50,22 42,35 42,45 C 42,55 50,75 50,75 Z"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            {/* Center petal details */}
            <path d="M 50,22 L 50,75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />

            {/* Left Petals */}
            <path
              d="M 50,75 C 42,70 28,60 28,45 C 28,30 40,32 46,38"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M 50,75 C 34,75 16,68 18,52 C 19,41 33,40 40,43"
              stroke="currentColor"
              strokeWidth="0.5"
            />

            {/* Right Petals */}
            <path
              d="M 50,75 C 58,70 72,60 72,45 C 72,30 60,32 54,38"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M 50,75 C 66,75 84,68 82,52 C 81,41 67,40 60,43"
              stroke="currentColor"
              strokeWidth="0.5"
            />

            {/* Base floral rules */}
            <path d="M 28,80 Q 50,73 72,80" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 34,84 Q 50,78 66,84" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );

      case "fish":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="text-terracotta fill-none"
            opacity="0.18"
          >
            {/* Mithila dynamic fish (symbol of water, fertility, and river Ganga) */}
            <path
              d="M 12,50 C 30,25 65,32 82,42 L 90,30 L 88,50 L 92,65 L 82,54 C 65,66 30,73 12,50 Z"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            {/* Eye */}
            <circle cx="28" cy="46" r="2.5" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="28" cy="46" r="1" fill="currentColor" />

            {/* Scales details - Kachni cross hatch */}
            <path d="M 38,40 Q 42,50 40,58" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 46,38 Q 49,50 48,60" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 54,38 Q 57,51 55,61" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 62,40 Q 65,50 63,58" stroke="currentColor" strokeWidth="0.5" />

            {/* Fin lines */}
            <path d="M 40,35 Q 52,20 62,35" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 42,62 Q 54,78 62,63" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );

      case "geometry":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="text-clay/20 fill-none"
          >
            {/* Concentric squares with diamond nodes based on Aripana floor grids */}
            <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="0.5" />
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
            <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" stroke="#8D4C32" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="3" fill="#8D4C32" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      style={interactive ? { x: floatX, y: floatY } : {}}
      className={`absolute select-none pointer-events-none z-0 ${className}`}
    >
      {renderIcon()}
    </motion.div>
  );
}
