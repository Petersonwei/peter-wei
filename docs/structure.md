# Project Structure

This document outlines the structure of the Peter Wei Portfolio project, explaining the purpose of each directory and key files.

## Root Structure

```
peter-wei/
├── app/                    # Next.js app directory (app router)
├── components/             # Reusable components
├── data/                   # Data files
├── docs/                   # Documentation
├── lib/                    # Utility functions
├── public/                 # Static assets
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration for Tailwind
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## App Directory Structure

The `app` directory follows Next.js 15 App Router conventions:

```
app/
├── api/                    # API routes
│   └── ...                 # Various API endpoints
├── projects/               # Projects section
│   ├── [id]/               # Dynamic project detail pages
│   │   ├── metadata.ts     # Metadata generation for project pages
│   │   └── page.tsx        # Individual project page component
│   └── page.tsx            # Projects listing page
├── about/                  # About section
│   └── page.tsx            # About page
├── favicon.ico             # Site favicon
├── globals.css             # Global CSS styles
├── layout.tsx              # Root layout component
└── page.tsx                # Home page component
```

## Components Directory

The `components` directory contains all reusable UI components:

```
components/
├── ui/                     # ShadCN UI components
│   ├── badge.tsx           # Badge component
│   ├── button.tsx          # Button component
│   ├── card.tsx            # Card components
│   ├── image-gallery.tsx   # Image gallery component
│   ├── markdown.tsx        # Markdown rendering component
│   └── ...                 # Other UI components
├── ProjectCard.tsx         # Project card component
├── ProjectFeatures.tsx     # Project features component
├── TopNav.tsx              # Top navigation component
├── VoiceBot.tsx            # Voice assistant bot
├── WakeWordDetector.tsx    # Voice assistant wake word detection
├── project-links.tsx       # Project links component
└── ...                     # Other components
```

## Data Directory

The `data` directory contains static data used throughout the application:

```
data/
├── projects.ts             # Projects data
└── ...                     # Other data files
```

## Public Directory

The `public` directory contains static assets that are served directly:

```
public/
├── projects/               # Project images
│   ├── portfolio.jpg
│   ├── ecommerce.jpg
│   └── ...                 # Other project images
├── avatar.jpg              # Personal avatar
└── ...                     # Other static assets
```

## Key Files

### Project Configuration

- **next.config.js**: Configuration for Next.js including image domains, redirects, etc.
- **tailwind.config.js**: Tailwind CSS configuration including theme customization.
- **tsconfig.json**: TypeScript configuration including path aliases.

### Project Data

- **data/projects.ts**: Contains the `Project` interface and an array of project data.

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  markdownContent?: string;
  technologies: string[];
  imageUrl: string;
  gallery?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  badges?: string[];
  features?: string[];
}
```

### Key Components

- **components/ProjectCard.tsx**: Renders a project card in either standard or featured mode.
- **components/ProjectFeatures.tsx**: Displays a list of project features.
- **components/ui/image-gallery.tsx**: Interactive image gallery with thumbnails and fullscreen view.
- **components/ui/markdown.tsx**: Custom markdown renderer.

### Pages

- **app/page.tsx**: Home page showcasing featured projects and skills.
- **app/projects/page.tsx**: Projects listing page with filtering capability.
- **app/projects/[id]/page.tsx**: Dynamic project detail page.

## Routing

The project uses Next.js App Router for routing:

- `/`: Home page
- `/projects`: Projects listing page
- `/projects/[id]`: Individual project page (dynamic route)
- `/about`: About page

## State Management

The project primarily uses React's built-in state management:

- `useState` for component-level state
- URL parameters for page-level state (e.g., current project)
- No global state management solution is implemented as it's not needed for this scale

## Styling Approach

The project uses a combination of:

- Tailwind CSS for utility-based styling
- ShadCN UI for component-based styling
- Global CSS variables for theming
- CSS modules for component-specific styling when needed

## Build and Deployment

The project is configured for deployment on Vercel with:

- TypeScript compilation
- Tailwind CSS optimization
- Static image optimization
- Built-in API routes

## Documentation Organization

The documentation is organized as follows:

```
docs/
├── components/             # Component documentation
│   ├── README.md           # Components overview
│   ├── ProjectCard.md      # ProjectCard documentation
│   └── ...                 # Other component docs
├── README.md               # Main documentation
├── structure.md            # Project structure (this file)
└── voice-assistant.md      # Voice assistant documentation
``` 