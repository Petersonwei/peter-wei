export interface Project {
  id: string;
  title: string;
  description: string;
  client?: string;
  role: string;
  result: string;
  technologies: string[];
  imageUrl: string;
  date: string;
  projectType: "business" | "side"; // "business" or "side" project
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "travel-right",
    title: "Travel Right",
    description: "A sustainable tourism-focused gamification app designed to encourage eco-friendly travel choices.",
    client: "The University of Queensland",
    role: "Contract Software Engineer - Working in a 4-person team to develop a tourism-focused gamification app, actively communicating with multi-level stakeholders (manager, designer, researcher).",
    result: "Developed a mobile application that gamifies sustainable tourism choices, helping users reduce their carbon footprint while traveling.",
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js", "Tailwind CSS"],
    imageUrl: "/projects/travel-right.jpg",
    date: "Mar 2024 - Present",
    projectType: "business",
    featured: true
  },
  {
    id: "e-commerce-store",
    title: "E-Commerce Store",
    description: "A secure e-commerce platform built with .NET Core, React, and Stripe payment integration.",
    role: "Full Stack Developer - Built a secure e-commerce platform using .NET Core, React (RTK Query), and Stripe, supporting high concurrency.",
    result: "Improved query speed by 20% with Entity Framework and MS SQL optimisation. Automated releases via Azure DevOps CI/CD, ensuring 99.9% uptime and halving deployment time.",
    technologies: [".NET Core", "React", "RTK Query", "Stripe", "MS SQL", "Azure DevOps"],
    imageUrl: "/projects/e-commeerce-re-store.jpg",
    date: "Jan 2025 - Present",
    projectType: "side",
    featured: true
  },
  {
    id: "clone-myself-voice-web-portfolio",
    title: "Clone Myself – Voice Web Portfolio",
    description: "A full-stack AI voice assistant portfolio with real-time voice cloning capabilities.",
    role: "Full Stack Developer - Developed a full-stack AI voice assistant using LLM, Retell AI, and Next.js with real-time voice cloning.",
    result: "Reduced latency by 30% through optimised API fetching and integration. Managed 50+ voice interactions via Firebase with improved accuracy and natural dialogue.",
    technologies: ["Next.js", "LLM", "Retell AI", "Firebase", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/clone-me-personal-portfolio.jpg",
    date: "Feb 2025 – Mar 2025",
    projectType: "side",
    featured: true
  }
];

export default projects; 