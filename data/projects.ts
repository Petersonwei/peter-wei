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
    imageUrl: "/projects/e-commeerce-re-store.jpg.jpg",
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
    imageUrl: "/projects/clone-me-personal-portfolio.jpg.jpg",
    date: "Feb 2025 – Mar 2025",
    projectType: "side",
    featured: true
  },
  {
    id: "project-tyra-dashboard",
    title: "Project Tyra Real-Time Dashboard",
    description: "A data analytics dashboard for the Research Mentorship Program, visualizing participant demographics and program metrics.",
    client: "Project Tyra",
    role: "Data Analyst - Built 4 real-time dashboards using Python, analyzing 6 years of historical data to enable real-time monitoring and data-driven decision-making.",
    result: "Created interactive visualizations showing geographic distributions and demographic breakdowns that improved program evaluation and strategic planning.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "Statistical Analysis"],
    imageUrl: "/projects/tyra-dashboard.jpg",
    date: "Jun 2024 - Present",
    projectType: "business",
    featured: false
  },
  {
    id: "python-sokoban-game",
    title: "Python Sokoban Game",
    description: "A fully-featured Sokoban puzzle game with custom graphics, level design, and in-game shop system.",
    role: "Game Developer - Designed and implemented a classic puzzle game with modern features including score tracking, shop system, and player progression.",
    result: "Created an engaging game with pixel art graphics, power-up systems, and multiple levels that demonstrates software design principles and Python skills.",
    technologies: ["Python", "Pygame", "Object-Oriented Design", "Game Development", "UI/UX Design"],
    imageUrl: "/projects/python-sokoban.jpg",
    date: "Oct 2024 - Dec 2024",
    projectType: "side",
    featured: false
  },
  {
    id: "vexit-cms-system",
    title: "CMS System for Developers",
    description: "A comprehensive content management system designed specifically for software development teams.",
    client: "VEXIT Consulting",
    role: "Software Developer Intern - Built a CMS frontend with Next.js, React, Redux, and RTK, integrating scalable RESTful microservices.",
    result: "Improved system performance by 40% through .NET Core and PostgreSQL optimisation. Enhanced release efficiency by 30% with Azure DevOps CI/CD and Agile workflows.",
    technologies: ["Next.js", "React", "Redux", ".NET Core", "PostgreSQL", "Azure DevOps"],
    imageUrl: "/projects/vexit-wiki.jpg",
    date: "Dec 2024 - Present", 
    projectType: "business",
    featured: false
  },
  {
    id: "java-collaboration-sheet",
    title: "Java Collaboration Sheet",
    description: "A Java-based spreadsheet application supporting real-time collaboration and complex formula processing.",
    role: "Backend Developer - Designed and implemented the core computation engine for processing complex mathematical formulas and enabling collaborative editing.",
    result: "Built a functional spreadsheet processor with formula evaluation, cell referencing, and multi-user support that demonstrates solid Java programming skills.",
    technologies: ["Java", "Data Structures", "Algorithms", "Multi-threading", "Software Architecture"],
    imageUrl: "/projects/java-sheet.jpg",
    date: "Sep 2024 - Nov 2024",
    projectType: "side",
    featured: false
  },
  {
    id: "mascot-power-bi",
    title: "Mascot New Tech Power BI & Tableau",
    description: "Industry defect analysis dashboards for manufacturing process optimization.",
    client: "Mascot New Technology Co.Ltd",
    role: "Business Analyst / System Analyst Intern - Analyzed factory workflows using Power BI, reducing defects by 25% via process optimization.",
    result: "Designed real-time dashboards, cutting reporting time by 70% and enhancing decision-making. Led stakeholder workshops with engineers and management to align operations with ISO-compliant, data-driven solutions.",
    technologies: ["Power BI", "Tableau", "Data Analysis", "SQL", "Manufacturing Analytics", "Process Optimization"],
    imageUrl: "/projects/mascot.jpg",
    date: "Dec 2023 - Feb 2024",
    projectType: "business",
    featured: false
  },
  {
    id: "brave-new-class",
    title: "Brave New Class Landing Page",
    description: "A/B tested landing page for an educational virtual reality platform with interactive class modules.",
    role: "UI/UX Designer - Created multiple landing page variations to optimize conversion rates through systematic A/B testing.",
    result: "Designed an engaging landing page featuring VR education benefits that achieved 40% higher sign-up rates compared to the previous design.",
    technologies: ["HTML/CSS", "JavaScript", "A/B Testing", "UI/UX Design", "Conversion Rate Optimization"],
    imageUrl: "/projects/brave-new-class.jpg",
    date: "Apr 2024 - May 2024",
    projectType: "side",
    featured: false
  },
  {
    id: "house-hunter-uiux",
    title: "House Hunter UIUX",
    description: "A property inspection and rental search platform designed to help users find safe and affordable accommodations in Australia.",
    role: "UI/UX Designer - Designed wireframes, prototypes, and user flows for a property inspection app targeting the Australian rental market.",
    result: "Developed a user-centered design that simplifies the property inspection request process and improves the rental search experience.",
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Responsive Design"],
    imageUrl: "/projects/house-hunter.jpg",
    date: "Jul 2024 - Aug 2024",
    projectType: "side",
    featured: false
  },
  {
    id: "web-analysis-marketing",
    title: "Web Analysis and Marketing",
    description: "Website analysis and optimization project focused on improving mobile responsiveness and user experience.",
    client: "TEDxUQ",
    role: "Web Analyst - Conducted comprehensive analysis of website performance, focusing on mobile responsiveness and user experience optimization.",
    result: "Delivered actionable recommendations that improved mobile navigation and user interaction, resulting in increased engagement metrics.",
    technologies: ["Google Analytics", "UX Analysis", "Responsive Design", "WordPress", "SEO", "Conversion Rate Optimization"],
    imageUrl: "/projects/tedx-website.jpg",
    date: "Jul 2023 - Sep 2024",
    projectType: "business",
    featured: false
  },
  {
    id: "rotary-website-redesign",
    title: "Rotary of Brisbane Website Redesign",
    description: "Complete website redesign for Queensland's first Rotary club, enhancing digital presence and member engagement.",
    client: "Rotary Club of Brisbane",
    role: "Webmaster (Casual) - Rebuilt website architecture using HTML, CSS, and Club Runner, increasing monthly users by 40%.",
    result: "Co-developed the Queensland District Conference site, improving digital visibility and accessibility for members and the community.",
    technologies: ["HTML/CSS", "JavaScript", "Club Runner CMS", "Responsive Design", "SEO Optimization"],
    imageUrl: "/projects/rotary-website.jpg",
    date: "Mar 2024 - Present",
    projectType: "business",
    featured: false
  },
  {
    id: "risen-energy-website",
    title: "Risen Energy Official Website",
    description: "Design and development of an official website for Risen Energy, showcasing their energy storage systems and services.",
    role: "Web Developer - Designed and built a responsive website highlighting the company's energy solutions and installation services.",
    result: "Created a modern, informative website that effectively communicates the company's value proposition and services to potential customers.",
    technologies: ["HTML/CSS", "JavaScript", "Responsive Design", "WordPress", "SEO Optimization"],
    imageUrl: "/projects/risen--energy.jpg",
    date: "Nov 2024 - Dec 2024",
    projectType: "side",
    featured: false
  },
  {
    id: "uq-ux-research",
    title: "UX Research For Service Department",
    description: "Research project exploring what flexibility means to students, particularly focusing on postgraduate needs.",
    client: "The University of Queensland",
    role: "UX Researcher - Conducted comprehensive user research to understand student flexibility needs and expectations.",
    result: "Delivered insights on flexible scheduling, online resources, and communication that informed university service improvements.",
    technologies: ["User Research", "Qualitative Analysis", "Survey Design", "Personas", "Journey Mapping", "Stakeholder Presentations"],
    imageUrl: "/projects/uq-ux-research.jpg",
    date: "May 2024 - Jul 2024",
    projectType: "business",
    featured: false
  },
  {
    id: "parenta-ai-voice",
    title: "Parenta AI Voice Counsellor",
    description: "An AI-powered voice assistant for parents, providing guidance and support for common parenting challenges.",
    role: "EdTech Developer - Designed and implemented a voice-activated AI counselling system for parents using natural language processing and voice recognition.",
    result: "Created an accessible tool that offers immediate parenting advice through conversational AI, improving user engagement through intuitive voice interactions.",
    technologies: ["Web Speech API", "Natural Language Processing", "React", "Voice UI Design", "Accessibility", "User Testing"],
    imageUrl: "/projects/parenta.jpg",
    date: "Jan 2025 - Mar 2025",
    projectType: "side",
    featured: false
  },
  {
    id: "aws-cloud-raspberry-pi",
    title: "AWS Cloud Raspberry Pi Projects",
    description: "Internet of Things development projects connecting Raspberry Pi devices to AWS cloud services for remote monitoring and control.",
    role: "IoT Developer - Designed and implemented cloud-connected IoT solutions using Raspberry Pi hardware and AWS services.",
    result: "Built functional prototypes demonstrating data collection, remote monitoring, and cloud-based control systems.",
    technologies: ["Raspberry Pi", "AWS IoT Core", "Python", "MQTT", "IoT Sensors", "Cloud Computing"],
    imageUrl: "/projects/aws-iot.jpg",
    date: "Feb 2025 - Apr 2025",
    projectType: "side",
    featured: false
  },
  {
    id: "computer-4-learning",
    title: "Computer 4 Learning",
    description: "Technical volunteer work refurbishing and preparing computers for educational use in disadvantaged communities.",
    client: "Computers 4 Learning",
    role: "IT Support Volunteer - Repaired and QA-tested 40+ laptops, reinstalling OS with Linux for optimal performance.",
    result: "Contributed to providing functional, reliable computers to students and organizations that would otherwise lack access to technology resources.",
    technologies: ["Linux", "Hardware Troubleshooting", "OS Installation", "Software Configuration", "Technical Support"],
    imageUrl: "/projects/c4l-it-support.jpg",
    date: "Dec 2023 - Jul 2024",
    projectType: "business",
    featured: false
  }
];

export default projects; 