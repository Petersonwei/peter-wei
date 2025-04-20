# Components Documentation

This document outlines the key components used in the Peter Wei Portfolio project.

## Table of Contents

1. [Project Related Components](#project-related-components)
2. [UI Components](#ui-components)
3. [Voice Assistant Components](#voice-assistant-components)

## Project Related Components

### ProjectCard

The `ProjectCard` component displays project information in a card format. It has two display modes: standard and featured.

**File**: `components/ProjectCard.tsx`

**Props**:
- `project`: Project object containing all project details
- `isFeatured`: Boolean indicating if this is a featured project (displays in a larger format)

**Usage**:
```tsx
<ProjectCard project={project} isFeatured={true} />
```

[Detailed Documentation](./ProjectCard.md)

### ProjectFeatures

The `ProjectFeatures` component displays a list of key features for a project.

**File**: `components/ProjectFeatures.tsx`

**Props**:
- `features`: Array of strings describing project features

**Usage**:
```tsx
<ProjectFeatures features={project.features} />
```

[Detailed Documentation](./ProjectFeatures.md)

### ProjectLinks

The `ProjectLinks` component displays GitHub and demo links for a project.

**File**: `components/project-links.tsx`

**Props**:
- `githubUrl`: Optional GitHub repository URL
- `demoUrl`: Optional live demo URL

**Usage**:
```tsx
<ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
```

[Detailed Documentation](./ProjectLinks.md)

## UI Components

### Markdown

The `Markdown` component renders markdown content as HTML.

**File**: `components/ui/markdown.tsx`

**Props**:
- `content`: String containing markdown content
- `className`: Optional additional CSS classes

**Usage**:
```tsx
<Markdown content={project.markdownContent} />
```

[Detailed Documentation](./Markdown.md)

### ImageGallery

The `ImageGallery` component displays a collection of images with navigation and fullscreen view.

**File**: `components/ui/image-gallery.tsx`

**Props**:
- `images`: Array of image URLs
- `className`: Optional additional CSS classes

**Usage**:
```tsx
<ImageGallery images={project.gallery} />
```

[Detailed Documentation](./ImageGallery.md)

## Voice Assistant Components

### WakeWordDetector

Listens for a wake word to activate the voice assistant.

**File**: `components/WakeWordDetector.tsx`

[Detailed Documentation](./WakeWordDetector.md)

### VoiceBot

Handles voice interactions and responses.

**File**: `components/VoiceBot.tsx`

[Detailed Documentation](./VoiceBot.md) 