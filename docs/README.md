# Peter Wei Portfolio

A modern portfolio website built with Next.js, React, and ShadCN UI, featuring a voice assistant interface and showcasing various projects.

## Project Structure

The project follows a standard Next.js 15 app router structure:

```
peter-wei/
├── app/                    # Main application routes
│   ├── projects/           # Projects section routes
│   │   ├── [id]/           # Individual project pages
│   │   └── page.tsx        # Projects list page
│   ├── api/                # API routes
│   ├── about/              # About section
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # UI components (shadcn/ui)
│   └── ...                 # Feature components
├── data/                   # Data files
│   └── projects.ts         # Projects data
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── projects/           # Project images
└── docs/                   # Documentation
    └── components/         # Component documentation
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Deployment**: Vercel

## Key Features

- Modern, responsive design
- Voice assistant for hands-free navigation
- Project showcase with detailed project pages
- Markdown content support
- Image gallery for project display
- Dark/light mode support

## Getting Started

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run the development server with `pnpm dev`
4. Build for production with `pnpm build`

## Documentation

- [Components](./components/README.md) - Documentation for reusable components
- [Project Structure](./structure.md) - Detailed project structure explanation
- [Voice Assistant](./voice-assistant.md) - How the voice assistant works 