# ProjectCard Component

The `ProjectCard` component displays project information in a card format. It's designed to be used on the projects listing page and supports two display modes: standard and featured.

## Overview

- **File Path**: `components/ProjectCard.tsx`
- **Type**: Client Component (uses 'use client' directive)
- **Dependencies**:
  - Next.js: `Link`, `Image`
  - ShadCN UI: `Card`, `CardContent`, `CardFooter`, `CardHeader`, `CardTitle`, `Button`, `Badge`
  - Lucide Icons: `ChevronRight`, `Code`, `ExternalLink`, `Github`
  - Project data type from `@/data/projects`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `project` | `Project` | required | Project object containing all project details |
| `isFeatured` | `boolean` | `false` | Whether this is a featured project (displays in a larger format) |

## Features

- **Two Display Modes**: 
  - Featured mode: Horizontal layout with larger image and more visible technology badges
  - Standard mode: Compact card with limited technology badges

- **Badge Styling**: Automatically applies appropriate styling to badges based on their content (AI, Full Stack, etc.)

- **Responsive Design**: Adapts layout for different screen sizes

- **Interactive Elements**:
  - Project card links to the project detail page
  - GitHub and demo links open in new tabs
  - Hover effects for better user experience

## Usage Example

```tsx
// Standard card
<ProjectCard project={project} />

// Featured card
<ProjectCard project={project} isFeatured={true} />

// Within a grid or list
<div className="grid grid-cols-3 gap-6">
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
```

## Implementation Details

The component uses conditional rendering based on the `isFeatured` prop to render two completely different layouts:

1. **Featured Layout**:
   - Two-column grid on medium and larger screens
   - Full-width image on the left
   - Detailed content on the right including all technology badges
   - Both GitHub and demo buttons with text labels

2. **Standard Layout**:
   - Single-column card with image at the top
   - Truncated technology list (shows first 3 only)
   - Icon-only GitHub and demo buttons
   - More compact overall design

## Badge Variant Function

```tsx
const getBadgeVariant = (badge: string) => {
  const lowerBadge = badge.toLowerCase().replace(' ', '-')
  if (lowerBadge === 'featured') return 'featured'
  if (lowerBadge === 'ai') return 'ai'
  if (lowerBadge === 'full-stack') return 'full-stack'
  if (lowerBadge === 'machine-learning') return 'machine-learning'
  if (lowerBadge === 'data-visualization') return 'data-visualization'
  if (lowerBadge === 'mobile') return 'mobile'
  if (lowerBadge === 'game-dev') return 'game-dev'
  return 'secondary'
}
```

## Notes

- The component uses `stopPropagation()` on link clicks to prevent navigation to the project detail page when clicking the GitHub or demo links.
- Images use Next.js `Image` component with appropriate sizing for optimization.
- The design follows the ShadcnUI design system with consistent spacing and typography. 