export interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  canvaUrl: string;
  embedUrl: string;
  aspectRatio: string; // padding-top representation (e.g., '70.71%', '66.64%')
  description: string;
  curatorialNote: string;
  medium: string;
  year: string;
  tags: string[];
}

export interface PhilosophyPillar {
  title: string;
  slogan: string;
  academicInsight: string;
  detail: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  institution: string;
  focus: string;
}

export const ACADEMIC_PROFILE = {
  name: "Payal Priyadarshini",
  title: "Visual Storyteller & Photographer",
  candidacy: "M.Des Aspirant | IIT Guwahati Presentation",
  location: "पटना, बिहार, भारत (Patna, Bihar, India)",
  philosophyQuote: "Design is not just decoration. It is emotion, memory, and perspective.",
  academicBio: "A visual communicator deeply rooted in the culture of बिहार (Bihar). Guided by the blend of ancestral craftsmanship and modern storytelling, my work bridges human-centered research, documentary photography, and narrative building.",
  email: "payalpriyadarshi1403@gmail.com"
};

export const CORE_PHILOSOPHY: PhilosophyPillar[] = [
  {
    title: "1. Observational Photography",
    slogan: "Capturing the unspoken stories in everyday transit.",
    academicInsight: "Photography is more than passive capturing—it's a deliberate choice of moments where environment, lighting, and human emotion align beautifully.",
    detail: "Drawing from the quiet daily rhythms of बिहार (Bihar), my work finds meaning in the mundane—a subtle gesture, the play of light on old architecture, and the silent narratives of people."
  },
  {
    title: "2. Vernacular Roots, Modern Design",
    slogan: "Translating traditional motifs into structured digital layouts.",
    academicInsight: "Traditional art forms like Mithila painting offer more than cultural decoration; they hold an implicit spatial logic. My goal is to apply this indigenous geometry to modern, high-resolution design systems.",
    detail: "By blending the raw, emotional weight of historical heritage with clean, precise vector lines, I aim to create designs that feel both deeply rooted and globally contemporary."
  },
  {
    title: "3. Narrative-Led Illustration",
    slogan: "Crafting visual stories that connect and resonate.",
    academicInsight: "Illustration goes beyond rendering images. It is an exploration of cultural psychology and visual pacing that allows audiences to build genuine emotional connections with the subject.",
    detail: "I try to maintain the tactile sensation of physical art—like woodblock prints and handmade paper—even within digital screens, ensuring every stroke carries purpose and warmth."
  }
];

export const MAIN_PORTFOLIO: ProjectInfo = {
  id: "main-portfolio",
  title: "PAYAL PRIYADARSHINI",
  subtitle: "Core Academic Visual Portfolio (A3)",
  canvaUrl: "https://www.canva.com/design/DAHKCwPJ1R8/XGrS1Xw6_6tZjqCPQ1sqtw/view",
  embedUrl: "https://www.canva.com/design/DAHKCwPJ1R8/XGrS1Xw6_6tZjqCPQ1sqtw/view?embed",
  aspectRatio: "pb-[70.71%]",
  medium: "Interdisciplinary Design & Layout Research (A3 Format)",
  year: "2026",
  tags: ["Visual Identity", "Layout Architecture", "Contemporary Portfolio", "Typography Systems"],
  description: "A comprehensive investigation of unified layouts, type hierarches, and aesthetic curation designed for high-end professional and academic presentations.",
  curatorialNote: "Arranged with absolute respect for breathing margin lines, structured grid rules, and elegant negative space, this design dossier contains selected projects illustrating active problem statements and artistic responses."
};

export const STORY_ILLUSTRATION: ProjectInfo = {
  id: "story-illustration",
  title: "Narrative Dimensions",
  subtitle: "Visual Storyboards & Graphic Literature",
  canvaUrl: "https://www.canva.com/design/DAHK4XqpYY4/9UZQ25MH397A3AEn2oD1gA/view",
  embedUrl: "https://www.canva.com/design/DAHK4XqpYY4/9UZQ25MH397A3AEn2oD1gA/view?embed",
  aspectRatio: "pb-[66.64%]",
  medium: "Mixed-Media Digital Ink & Graphic Curation",
  year: "2025",
  tags: ["Folk Literature", "Character Exploration", "Storyboarding", "Emotional Synthesis"],
  description: "A highly cinematic visual narrative exploring characters and scenarios using emotional lighting, sketch-like textures, and deep dreamlike structures.",
  curatorialNote: "This project operates as an immersive narrative piece, combining the raw textures of physical paper drawing with subtle digital depth layers to achieve highly descriptive emotional states."
};

export const PHOTOGRAPHY_PROJECTS: ProjectInfo[] = [
  {
    id: "photography-1",
    title: "Observational Poetics (Part I)",
    subtitle: "Sacred Scales and Raw Human Landscapes",
    canvaUrl: "https://www.canva.com/design/DAHK4UQlJzo/FHN618ZnUcnv9XZerhit8Q/view",
    embedUrl: "https://www.canva.com/design/DAHK4UQlJzo/FHN618ZnUcnv9XZerhit8Q/view?embed",
    aspectRatio: "pb-[66.65%]",
    medium: "Monochrome & Fine Art Observational Photography",
    year: "2025",
    tags: ["Human Documentaries", "High-Contrast Shadow", "Poetic Framing"],
    description: "A documentary photography series exploring the textures, light, and everyday gestures within ordinary Indian workspaces.",
    curatorialNote: "A focused selection of visual moments capturing daily transitions, the natural lighting of old wooden windows, and quiet reflections of work in Bihar (बिहार)."
  },
  {
    id: "photography-2",
    title: "Observational Poetics (Part II)",
    subtitle: "Ratios of Void and Matter",
    canvaUrl: "https://www.canva.com/design/DAHK4c1kvFg/eF0xjxA58Wl8oiGS0VJGsQ/view",
    embedUrl: "https://www.canva.com/design/DAHK4c1kvFg/eF0xjxA58Wl8oiGS0VJGsQ/view?embed",
    aspectRatio: "pb-[69.55%]",
    medium: "Documentary Photography & Form Curation",
    year: "2026",
    tags: ["Visual Ratios", "Socio-Cultural Facades", "Minimalist Frames"],
    description: "A continuation of my structural observation of public spaces, exploring high-contrast monochrome tones and negative space.",
    curatorialNote: "Removing color highlights geometry and form. This portfolio studies how people inhabit architectural spaces, showcasing a sensitive eye for visual balance and composition."
  }
];

export const BIHAR_ROOTS_STUDY = {
  title: "The बिहार (Bihar) Vernacular Synthesis",
  concept: "Modernizing Folk Geometry",
  academicPremise: "While Mithila art (Madhubani) is often seen purely through a cultural lens, from a design perspective, it represents a highly sophisticated system of space division, visual rhythm, and line-weight contrasts.",
  elements: [
    {
      name: "The Mithila Line Style",
      description: "Utilizing double horizontal boundary rules, rhythmic vertical lines (Kachni), and solid fills (Bharni) to represent visual mass without structural gradients.",
      visualRepresentation: "Thin 0.5px line drawings forming repeating geometric patterns."
    },
    {
      name: "Terracotta Earth Tones",
      description: "Deploying deep rust-reds, subtle clay greys, and warm sun-washed sand colors to ground high-art tech aesthetics back to the fertile soil of Patna and the banks of Ganges.",
      visualRepresentation: "Extremely subtle warm ambient glow, earthy accent dividers, and terracotta tints."
    },
    {
      name: "Tactile Paper Sensation",
      description: "Simulating physical handmade paper fibers of our design portfolio on screen through microscopic noise overlays to trigger memory of touch and materials.",
      visualRepresentation: "Grain overlays and soft clay container frames."
    }
  ]
};

export const RESUME_TIMELINE: TimelineEvent[] = [
  {
    year: "Present",
    role: "M.Des Candidate & Portfolio Creator",
    institution: "IIT Guwahati (Aspirant Evaluation)",
    focus: "Visual Storytelling, Photography, Socially Grounded Communication Design and User-Experience Aesthetics."
  },
  {
    year: "2024 - 2025",
    role: "Visual Designer & Cultural Researcher",
    institution: "Art & Heritage Exploration (बिहार / पटना Sector)",
    focus: "On-ground documentary photography, studying line structures in Mithila art, crafting visual layouts and narrations."
  },
  {
    year: "2021 - 2024",
    role: "Academic Degree Curation",
    institution: "Undergraduate Fine Arts & Visual Communication",
    focus: "Typography, Graphic Layouts, Fine Art Photography, Traditional Lithography, and Editorial Curation."
  }
];

export const CURRICULUM_VITAE = {
  education: [
    {
      degree: "Master of Design (M.Des) Aspirant",
      institution: "Indian Institute of Technology, Guwahati",
      year: "2026 Interview Presentation"
    },
    {
      degree: "Bachelor's Program in Creative Arts / Communication",
      institution: "State University / Recognized Institution",
      year: "First Class Distinction"
    }
  ],
  skills: {
    creative: [
      "Visual Storytelling",
      "Fine Art Photography",
      "Story Illustration",
      "Folk-Art Typography Integration",
      "Design Ethnography",
      "Editorial Systems"
    ],
    technical: [
      "Adobe Creative Suite",
      "Layout & Typography Systems",
      "Responsive Interactive Design",
      "Figma",
      "B&W Darkroom Curation",
      "Framer Motion & Digital Exhibition Setup"
    ]
  },
  exhibitions: [
    "Selected Works, Contemporary बिहार (Bihar) Art Collective Hub (2025)",
    "Documentary Series: 'पटना (Patna) in Transit' Photographic Exhibition (2024)",
    "Folk Geometry: Mithila Line Iterations Workshop Curator (2023)"
  ]
};
