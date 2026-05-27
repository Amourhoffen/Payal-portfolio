import React from "react";

interface MadhubaniBorderProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "corner";
  opacity?: number;
}

export default function MadhubaniBorder({
  className = "",
  variant = "horizontal",
  opacity = 0.25,
}: MadhubaniBorderProps) {
  if (variant === "horizontal") {
    return (
      <div 
        className={`relative w-full overflow-hidden select-none pointer-events-none py-1.5 ${className}`} 
        style={{ opacity }}
      >
        <svg
          width="100%"
          height="14"
          viewBox="0 0 1200 14"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-terracotta fill-none"
        >
          {/* Mithila Double Line Outer Rules */}
          <line x1="0" y1="1" x2="1200" y2="1" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="3" x2="1200" y2="3" stroke="currentColor" strokeWidth="0.5" />

          {/* Repeating Geometric Triangles (Kachni Lines Style) */}
          <path
            d="M 0,3 L 10,11 L 20,3 L 30,11 L 40,3 L 50,11 L 60,3 L 70,11 L 80,3 L 90,11 L 100,3 L 110,11 L 120,3 
               L 130,11 L 140,3 L 150,11 L 160,3 L 170,11 L 180,3 L 190,11 L 200,3 L 210,11 L 220,3 L 230,11 L 240,3
               L 250,11 L 260,3 L 270,11 L 280,3 L 290,11 L 300,3 L 310,11 L 320,3 L 330,11 L 340,3 L 350,11 L 360,3
               L 370,11 L 380,3 L 390,11 L 400,3 L 410,11 L 420,3 L 430,11 L 440,3 L 450,11 L 460,3 L 470,11 L 480,3
               L 490,11 L 500,3 L 510,11 L 520,3 L 530,11 L 540,3 L 550,11 L 560,3 L 570,11 L 580,3 L 590,11 L 600,3
               L 610,11 L 620,3 L 630,11 L 640,3 L 650,11 L 660,3 L 670,11 L 680,3 L 690,11 L 700,3 L 710,11 L 720,3
               L 730,11 L 740,3 L 750,11 L 760,3 L 770,11 L 780,3 L 790,11 L 800,3 L 810,11 L 820,3 L 830,11 L 840,3
               L 850,11 L 860,3 L 870,11 L 880,3 L 890,11 L 900,3 L 910,11 L 920,3 L 930,11 L 940,3 L 950,11 L 960,3
               L 970,11 L 980,3 L 990,11 L 1000,3 L 1010,11 L 1020,3 L 1030,11 L 1040,3 L 1050,11 L 1060,3 L 1070,11 
               L 1080,3 L 1090,11 L 1100,3 L 1110,11 L 1120,3 L 1130,11 L 1140,3 L 1150,11 L 1160,3 L 1170,11 L 1180,3 
               L 1195,11 L 1200,3"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />

          {/* Internal Rhythmic Diamond Nodes */}
          <path
            d="M 5,7 L 10,4 L 15,7 L 10,10 Z M 25,7 L 30,4 L 35,7 L 30,10 Z M 45,7 L 50,4 L 55,7 L 50,10 Z 
               M 65,7 L 70,4 L 75,7 L 70,10 Z M 85,7 L 90,4 L 95,7 L 90,10 Z M 105,7 L 110,4 L 115,7 L 110,10 Z
               M 205,7 L 210,4 L 215,7 L 210,10 Z M 405,7 L 410,4 L 415,7 L 410,10 Z M 605,7 L 610,4 L 615,7 L 610,10 Z
               M 805,7 L 810,4 L 815,7 L 810,10 Z M 1005,7 L 1010,4 L 1015,7 L 1010,10 Z"
            fill="currentColor"
            opacity="0.8"
          />

          {/* Mithila Double Line Inner Rules */}
          <line x1="0" y1="11" x2="1200" y2="11" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="13" x2="1200" y2="13" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div 
        className={`relative h-full overflow-hidden select-none pointer-events-none px-1 py-4 ${className}`} 
        style={{ opacity }}
      >
        <svg
          width="14"
          height="100%"
          viewBox="0 0 14 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full text-terracotta fill-none"
        >
          <line x1="1" y1="0" x2="1" y2="600" stroke="currentColor" strokeWidth="0.5" />
          <line x1="3" y1="0" x2="3" y2="600" stroke="currentColor" strokeWidth="0.5" />

          {/* Repeating Diamond Nodes down the vertical path */}
          <path
            d="M 3,10 L 11,20 L 3,30 L 11,40 L 3,50 L 11,60 L 3,70 L 11,80 L 3,90 L 11,100 L 3,110 L 11,120 
               L 3,130 L 11,140 L 3,150 L 11,160 L 3,170 L 11,180 L 3,190 L 11,200 L 3,210 L 11,220 L 3,230 
               L 11,240 L 3,250 L 11,260 L 3,270 L 11,280 L 3,290 L 11,300 L 3,310 L 11,320 L 3,330 L 11,340 
               L 3,350 L 11,360 L 3,370 L 11,380 L 3,390 L 11,400 L 3,410 L 11,420 L 3,430 L 11,440 L 3,450 
               L 11,460 L 3,470 L 11,480 L 3,490 L 11,500 L 3,510 L 11,520 L 3,530 L 11,540 L 3,550 L 11,560 
               L 3,570 L 11,580 L 3,590 L 11,600"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 1"
          />

          <line x1="11" y1="0" x2="11" y2="600" stroke="currentColor" strokeWidth="0.5" />
          <line x1="13" y1="0" x2="13" y2="600" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  // Corner motif decoration to put in portfolio frames
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-terracotta fill-none ${className}`}
      style={{ opacity }}
    >
      <path d="M 2,40 L 2,2 C 2,2 10,2 15,2 M 2,2 L 2,15 M 6,40 L 6,6 L 40,6" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <path d="M 12,12 L 18,18 M 18,12 L 12,18" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
