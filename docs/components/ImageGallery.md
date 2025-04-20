# ImageGallery Component

The `ImageGallery` component provides an interactive image gallery with thumbnail navigation and fullscreen viewing capabilities. It's designed to showcase multiple project images in a user-friendly interface.

## Overview

- **File Path**: `components/ui/image-gallery.tsx`
- **Type**: Client Component (uses 'use client' directive)
- **Dependencies**:
  - React: `useState`
  - Next.js: `Image`
  - Lucide Icons: `ChevronLeft`, `ChevronRight`, `X`
  - ShadCN UI: `Button`
  - Utility: `cn` from `@/lib/utils`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | required | Array of image URLs to display in the gallery |
| `className` | `string` | `undefined` | Optional additional CSS classes for the container |

## Features

- **Main Image Display**: Shows the currently selected image in a responsive container
- **Thumbnail Navigation**: Displays small thumbnails of all images for quick selection
- **Navigation Controls**: Next/previous buttons for cycling through images
- **Fullscreen Mode**: Click on the main image to view it in fullscreen
- **Responsive Design**: Adapts to different screen sizes

## Usage Example

```tsx
// Basic usage
<ImageGallery images={['/image1.jpg', '/image2.jpg', '/image3.jpg']} />

// With custom class
<ImageGallery 
  images={project.gallery} 
  className="mt-8 rounded-xl overflow-hidden" 
/>

// Conditional rendering
{project.gallery && project.gallery.length > 0 ? (
  <ImageGallery images={[project.imageUrl, ...project.gallery]} />
) : (
  <Image src={project.imageUrl} alt={project.title} />
)}
```

## Implementation Details

### State Management

The component manages two state variables:
- `activeIndex`: Tracks the currently displayed image
- `showFullscreen`: Controls whether the fullscreen mode is active

### Navigation Functions

- `nextImage()`: Cycles to the next image in the array
- `prevImage()`: Cycles to the previous image in the array
- `toggleFullscreen()`: Toggles the fullscreen view

### Conditional Rendering

- The component renders nothing if the images array is empty
- Navigation buttons only appear when there are multiple images
- Thumbnails only appear when there are multiple images
- Fullscreen mode appears as a modal overlay when active

### Fullscreen Implementation

The fullscreen view is implemented as a fixed-position overlay with:
- A semi-transparent background
- Close button in the top-right corner
- Larger display of the current image
- Navigation controls that remain accessible

## Accessibility Considerations

- All buttons have clear visual affordances
- Images include alt text for screen readers
- Click targets are adequately sized for touch devices
- Modal can be closed by clicking outside the image or the close button

## CSS Classes

The component uses the following main CSS class structures:

- Main container: `space-y-2` + any custom classes
- Main image container: `relative aspect-video rounded-lg overflow-hidden cursor-pointer`
- Thumbnail container: `flex gap-2 overflow-x-auto pb-2`
- Thumbnail items: `relative w-20 h-16 rounded overflow-hidden cursor-pointer flex-shrink-0 border-2`
- Fullscreen container: `fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4`

## Notes

- The component uses `e.stopPropagation()` to prevent event bubbling when clicking navigation buttons
- The thumbnail for the active image is highlighted with a border
- Images use the Next.js `Image` component for optimization 