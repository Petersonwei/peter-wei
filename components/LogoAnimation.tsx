'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// List of company logos to display from all available logos
const COMPANIES = [
  // Original company logos
  { name: 'Axcharge', logo: '/logos/axcharge.png' },
  { name: 'Dribag', logo: '/logos/dribag.png' },
  { name: 'Easy Skill', logo: '/logos/easy-skill.png' },
  { name: 'Vexit', logo: '/logos/vexit.png' },
  // Additional logos from the logos folder
  { name: 'ACF', logo: '/logos/ACF_logo.png' },
  { name: 'ACS', logo: '/logos/ACS_Logo.webp' },
  { name: 'UQ', logo: '/logos/UQ_logo.png' },
  { name: 'Project Tyra', logo: '/logos/projecttyra_logo.jpeg' },
  { name: 'TEDxUQ', logo: '/logos/TEDxUQ_Logo.png' },
  { name: 'Rotary Brisbane', logo: '/logos/rotary_brisbane_logo.png' },
  { name: 'Rotary International', logo: '/logos/rotary_international_logo.png' },
]

// Create a large array of items for a true infinite loop
// We duplicate it 3 times to ensure there are plenty of logos for any screen size
const CAROUSEL_ITEMS = [...COMPANIES, ...COMPANIES, ...COMPANIES]

export default function LogoAnimation() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const animationRef = useRef<number | null>(null)

  // Handle mouse down event - start dragging
  const handleMouseDown = () => {
    setIsPaused(true)
    setIsDragging(true)
    
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }

  // Handle mouse up event - stop dragging and set timer to resume animation
  const handleMouseUp = () => {
    setIsDragging(false)
    
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000) // Resume animation after 2 seconds of inactivity
  }

  // Handle mouse leave - ensure we don't get stuck in dragging state
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 2000)
    }
  }

  // Custom animation loop to ensure infinite scrolling
  useEffect(() => {
    // Implement a true infinite scrolling effect
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container || isPaused) return;
      
      // Get half of the total scroll width
      const halfScrollWidth = container.scrollWidth / 2;
      
      // If we've scrolled past the halfway point, reset to the start
      // This creates the illusion of infinite scrolling
      if (container.scrollLeft >= halfScrollWidth) {
        container.scrollLeft = 0;
      } else {
        // Otherwise continue scrolling
        container.scrollLeft += 1.5; // Slightly faster scrolling
      }
      
      // Continue the animation
      animationRef.current = requestAnimationFrame(handleScroll);
    };
    
    // Start the animation if not paused
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(handleScroll);
    }
    
    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Cleanup timeout and animation on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Generate a domain from company name
  const getDomain = (name: string) => {
    const lowercaseName = name.toLowerCase().replace(/\s+/g, '')
    
    // Map specific domains for entities that might not follow the standard pattern
    if (name === 'UQ') return 'uq.edu.au'
    if (name === 'TEDxUQ') return 'tedxuq.com'
    if (name === 'ACF') return 'acf.org'
    if (name === 'ACS') return 'acs.org.au'
    if (name === 'Project Tyra') return 'projecttyra.com'
    if (name === 'Rotary Brisbane') return 'rotarybrisbanecbd.com'
    if (name === 'Rotary International') return 'rotary.org'
    
    // Default domain pattern
    return `${lowercaseName}.com`
  }

  return (
    <div className="flex flex-col items-center w-full my-8">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">I worked for</h3>
      
      <div className="w-full overflow-hidden bg-card rounded-lg border">
        {/* Carousel container */}
        <div 
          ref={scrollRef}
          className="
            flex gap-16 py-6 px-4 
            scrollbar-hide
            cursor-grab overflow-x-auto
            whitespace-nowrap
            bg-background/50
          "
          style={{ 
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            paddingLeft: 'calc(50vw - 50% + 2rem)',
            paddingRight: 'calc(50vw - 50% + 2rem)',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {CAROUSEL_ITEMS.map((company, index) => (
            <a 
              key={`${company.name}-${index}`}
              href={`https://www.${getDomain(company.name)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-md rounded-lg p-3 bg-card hover:bg-card/80"
              title={`Visit ${company.name}`}
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault(); // Prevent navigation if dragging
                }
              }}
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                  draggable="false" // Prevent image dragging
                  priority={index < 8} // Prioritize loading first visible images
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
} 