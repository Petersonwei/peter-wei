export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  badges?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Peter Wei Portfolio",
    description: "A modern portfolio website built with Next.js, React, and ShadCN UI, featuring a voice assistant interface.",
    longDescription: "This portfolio showcases my projects and skills in web development. It features a modern UI built with Next.js and Tailwind CSS, with a unique voice assistant that helps visitors navigate and learn about my work.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Vercel"],
    imageUrl: "/projects/portfolio.jpg",
    demoUrl: "https://peterwei.dev",
    githubUrl: "https://github.com/peterwei/portfolio",
    featured: true,
    badges: ["Featured", "AI"],
    features: [
      "Voice-activated assistant for hands-free navigation",
      "Dark/light mode with system preference detection",
      "Responsive design that works on all devices",
      "Dynamic project filtering and categorization",
      "Built with accessibility in mind"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with secure payment processing and user authentication.",
    longDescription: "Built a comprehensive e-commerce platform using React for the frontend and Node.js for the backend. Implemented secure payment processing with Stripe, user authentication, and product management features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT Auth"],
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "https://ecommerce-demo.peterwei.dev",
    githubUrl: "https://github.com/peterwei/ecommerce",
    badges: ["Full Stack"],
    features: [
      "Secure user authentication and authorization",
      "Payment processing with Stripe integration",
      "Product inventory management system",
      "Shopping cart with persistent storage",
      "Order history and tracking functionality"
    ]
  },
  {
    id: "ai-assistant",
    title: "AI Virtual Assistant",
    description: "A voice-enabled AI assistant that helps users find information and complete tasks.",
    longDescription: "Developed an AI assistant that uses natural language processing to understand user queries and provide helpful responses. The assistant can be used via voice commands or text input and can perform a variety of tasks.",
    technologies: ["Python", "TensorFlow", "React", "Web Speech API", "OpenAI API"],
    imageUrl: "/projects/ai-assistant.jpg",
    demoUrl: "https://assistant.peterwei.dev",
    githubUrl: "https://github.com/peterwei/ai-assistant",
    badges: ["AI", "Machine Learning"],
    features: [
      "Natural language processing for understanding complex queries",
      "Voice recognition with speech-to-text capabilities",
      "Integration with various APIs for weather, news, and more",
      "Personalized responses based on user history",
      "Continuous learning from user interactions"
    ]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard for business intelligence.",
    longDescription: "Created a real-time analytics dashboard that helps businesses monitor key performance indicators. The dashboard features customizable widgets, data filtering, and export options.",
    technologies: ["Vue.js", "D3.js", "Firebase", "Node.js", "Express"],
    imageUrl: "/projects/analytics.jpg",
    demoUrl: "https://analytics.peterwei.dev",
    githubUrl: "https://github.com/peterwei/analytics-dashboard",
    badges: ["Data Visualization"],
    features: [
      "Real-time data updates with websocket connections",
      "Interactive charts and graphs with D3.js",
      "Customizable dashboard with drag-and-drop widgets",
      "Data export in multiple formats (CSV, PDF, Excel)",
      "User permission management for different data access levels"
    ]
  },
  {
    id: "mobile-app",
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    longDescription: "Developed a cross-platform mobile app for fitness enthusiasts. The app allows users to track their workouts, monitor nutrition, and visualize progress over time. It also features social sharing and workout challenges.",
    technologies: ["React Native", "Redux", "Firebase", "Expo", "GraphQL"],
    imageUrl: "/projects/fitness-app.jpg",
    demoUrl: "https://expo.dev/@peterwei/fitness-app",
    githubUrl: "https://github.com/peterwei/fitness-app",
    badges: ["Mobile"],
    features: [
      "Custom workout plan creation and tracking",
      "Nutrition logging with calorie and macro calculations",
      "Progress visualization with charts and graphs",
      "Social features for sharing workouts and challenges",
      "Offline functionality with data syncing"
    ]
  },
  {
    id: "game-development",
    title: "2D Platformer Game",
    description: "A retro-style platformer game built with Unity.",
    longDescription: "Created a 2D platformer game inspired by classic titles. Features include multiple levels, custom character animations, power-ups, and a level editor for players to create their own challenges.",
    technologies: ["Unity", "C#", "Blender", "Aseprite"],
    imageUrl: "/projects/game.jpg",
    demoUrl: "https://peterwei.itch.io/platformer",
    githubUrl: "https://github.com/peterwei/platformer-game",
    badges: ["Game Dev"],
    features: [
      "Multiple levels with increasing difficulty",
      "Custom pixel art and animations",
      "Power-up system with unique abilities",
      "Level editor for player-created content",
      "Cross-platform gameplay (Windows, Mac, Web)"
    ]
  }
];

export default projects; 