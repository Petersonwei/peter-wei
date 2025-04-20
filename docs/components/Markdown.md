# Markdown Component

The `Markdown` component converts markdown text to HTML and renders it with appropriate styling. It's used for rendering rich content in project descriptions and other areas of the site.

## Overview

- **File Path**: `components/ui/markdown.tsx`
- **Type**: Client Component (uses 'use client' directive)
- **Dependencies**:
  - React: `useState`, `useEffect`
  - Utility: `cn` from `@/lib/utils`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | required | Markdown content to be rendered as HTML |
| `className` | `string` | `undefined` | Optional additional CSS classes |

## Features

- **Markdown to HTML Conversion**: Transforms markdown syntax into HTML elements
- **Styled Output**: Uses Tailwind's typography plugin for consistent styling
- **Custom Styling Options**: Allows additional classes for customization
- **Dark Mode Support**: Automatically adapts to dark mode with appropriate styling
- **Supported Markdown Features**:
  - Headings (h1, h2, h3)
  - Paragraphs
  - Bold and italic text
  - Links (with target="_blank")
  - Code blocks and inline code
  - Ordered and unordered lists

## Usage Example

```tsx
// Basic usage
<Markdown content={project.markdownContent} />

// With custom class
<Markdown 
  content={project.markdownContent}
  className="text-sm bg-muted p-4 rounded-lg" 
/>

// Conditional rendering
{project.markdownContent ? (
  <Markdown content={project.markdownContent} />
) : (
  <p className="text-muted-foreground">{project.description}</p>
)}
```

## Implementation Details

### Markdown Parsing Process

The component uses a custom regex-based parser to convert markdown to HTML:

1. Converts headings (# Heading, ## Heading, ### Heading)
2. Formats paragraphs
3. Processes bold text (**bold**)
4. Processes italic text (*italic*)
5. Converts links: [text](url)
6. Handles code blocks (triple backticks)
7. Handles inline code (single backticks)
8. Processes unordered lists (starting with *)
9. Processes ordered lists (starting with numbers)
10. Manages line breaks

### React Implementation

The component uses `useState` and `useEffect` to:
1. Store the converted HTML
2. Process the markdown whenever the content prop changes
3. Render the HTML using `dangerouslySetInnerHTML` (safely, since we control the content)

### CSS Classes

The component uses Tailwind's typography plugin with these default classes:
- `prose`: Applies typography styling
- `dark:prose-invert`: Inverts colors for dark mode
- `max-w-none`: Removes the default max-width constraint
- `prose-img:rounded-lg`: Rounds the corners of any images in the content

## Security Considerations

- The implementation sanitizes HTML to prevent XSS attacks
- Links open in new tabs with `rel="noopener noreferrer"` for security
- Content is processed client-side, making it safe for user-generated content

## Limitations

- Does not support tables
- Limited support for nested lists
- No support for task lists (checkboxes)
- Image formatting is limited to rounding corners

## Notes

- This component was created as an alternative to using the react-markdown library due to type compatibility issues
- The custom implementation provides more control over styling and rendering
- For complex markdown needs, consider enhancing the regex patterns or exploring other libraries 