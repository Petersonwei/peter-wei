# Footer Component

The `Footer` component provides a consistent footer section across all pages of the portfolio site. It contains contact information, social links, navigation shortcuts, and copyright information.

## Overview

- **File Path**: `components/Footer.tsx`
- **Type**: Client Component (uses 'use client' directive)
- **Dependencies**:
  - Next.js: `Link`
  - Lucide Icons: `Github`, `Linkedin`, `Mail`, `Twitter`
  - ShadCN UI: `Button`

## Features

- **Responsive Layout**: Grid-based layout that adapts to different screen sizes
- **Social Media Links**: Links to GitHub, LinkedIn, Twitter, and email
- **Quick Navigation**: Links to main sections of the website
- **Resources Section**: Links to technologies used and source code
- **Dynamic Copyright**: Automatically displays the current year

## Usage

The Footer component is meant to be used once in the application layout:

```tsx
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

## Implementation Details

### Structure

The footer is divided into three main sections:

1. **About Section (2 columns wide on desktop)**: 
   - Brief description
   - Social media links with icon buttons

2. **Quick Links (1 column)**:
   - Internal navigation links to main pages
   - Uses Next.js `Link` component for client-side navigation

3. **Resources (1 column)**:
   - External links to technologies used
   - Link to the source code

### Styling

- Uses a subtle border-top to separate from main content
- Consistent with the site's color scheme via Tailwind's `bg-background` class
- Responsive grid layout with 1 column on mobile and 4 columns on desktop
- Hover effects on links for better interactivity

### Dynamic Content

The component dynamically calculates the current year for the copyright notice:

```typescript
const currentYear = new Date().getFullYear()
```

## Accessibility Considerations

- All link elements have descriptive text or aria-labels
- External links use `rel="noopener noreferrer"` for security
- Social media links have icon-only buttons with proper aria-labels
- Sufficient color contrast following the site's theme

## Customization

To customize the Footer component:

1. **Social Media Links**: Update the URLs in the href attributes
2. **Quick Links**: Add or remove navigation items as needed
3. **Resources**: Modify the list of external resources
4. **Text Content**: Update the description text in the about section

## Dependencies

- Requires the Button component from ShadCN UI
- Uses Lucide React icons
- Relies on Next.js Link component for internal navigation 