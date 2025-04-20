'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// List of company logos to display (doubled to create a smoother loop)
const COMPANIES = [
  { name: 'Microsoft', logo: '/projects/microsoft.svg', url: 'https://microsoft.com' },
  { name: 'Google', logo: '/projects/google.svg', url: 'https://google.com' },
  { name: 'Amazon', logo: '/projects/amazon.svg', url: 'https://amazon.com' },
  { name: 'Apple', logo: '/projects/apple.svg', url: 'https://apple.com' },
  { name: 'Meta', logo: '/projects/meta.svg', url: 'https://meta.com' },
  { name: 'Tesla', logo: '/projects/tesla.svg', url: 'https://tesla.com' },
  // Repeat to make the animation smoother
  { name: 'Microsoft', logo: '/projects/microsoft.svg', url: 'https://microsoft.com' },
  { name: 'Google', logo: '/projects/google.svg', url: 'https://google.com' },
  { name: 'Amazon', logo: '/projects/amazon.svg', url: 'https://amazon.com' },
  { name: 'Apple', logo: '/projects/apple.svg', url: 'https://apple.com' },
  { name: 'Meta', logo: '/projects/meta.svg', url: 'https://meta.com' },
  { name: 'Tesla', logo: '/projects/tesla.svg', url: 'https://tesla.com' },
]

export default function LogoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  // Initialize scroll position tracking
  const scrollPositionRef = useRef({ 
    startX: 0, 
    scrollLeft: 0, 
    isScrolling: false 
  })

  // Pause animation when user interacts
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    carousel.style.animationPlayState = isPaused ? 'paused' : 'running'
  }, [isPaused])

  // Handle mouse events for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    
    setIsPaused(true)
    setIsGrabbing(true)
    
    const { scrollLeft } = carouselRef.current
    scrollPositionRef.current = {
      startX: e.clientX,
      scrollLeft,
      isScrolling: true
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollPositionRef.current.isScrolling || !carouselRef.current) return
    
    const dx = e.clientX - scrollPositionRef.current.startX
    carouselRef.current.scrollLeft = scrollPositionRef.current.scrollLeft - dx
  }

  const handleMouseUp = () => {
    scrollPositionRef.current.isScrolling = false
    setIsGrabbing(false)
    
    // Resume animation after 2 seconds of inactivity
    setTimeout(() => setIsPaused(false), 2000)
  }

  // Handle mouse leave to prevent stuck grabbing state
  const handleMouseLeave = () => {
    if (scrollPositionRef.current.isScrolling) {
      handleMouseUp()
    }
  }

  // Grab the right cursor style
  const cursorStyle = isGrabbing ? 'cursor-grabbing' : 'cursor-grab'

  return (
    <div className="w-full my-6 overflow-hidden py-6" ref={containerRef}>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">I worked for</h3>
        
        {/* Use a container with horizontal scrolling */}
        <div 
          className={`w-full overflow-x-auto scrollbar-hide ${cursorStyle}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={carouselRef}
            className="logo-track flex items-center animate-carousel min-w-max"
            style={{ pointerEvents: isPaused ? 'all' : 'none' }}
          >
            {COMPANIES.map((company, index) => (
              <Link 
                key={`${company.name}-${index}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
                title={`Visit ${company.name}`}
                onClick={(e) => isPaused ? null : e.preventDefault()}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={70}
                  height={70}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/Peter Wei Logo.png'
                  }}
                  draggable={false}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 