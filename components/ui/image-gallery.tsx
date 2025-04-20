'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from './button'

interface ImageGalleryProps {
  images: string[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showFullscreen, setShowFullscreen] = useState(false)
  
  if (!images || images.length === 0) return null
  
  const mainImage = images[activeIndex]
  
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  
  const toggleFullscreen = () => {
    setShowFullscreen(!showFullscreen)
  }
  
  return (
    <div className={cn('space-y-2', className)}>
      {/* Main image */}
      <div 
        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
        onClick={toggleFullscreen}
      >
        <Image
          src={mainImage}
          alt="Project image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        
        {images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className={cn(
                'relative w-20 h-16 rounded overflow-hidden cursor-pointer flex-shrink-0 border-2',
                activeIndex === index ? 'border-primary' : 'border-transparent'
              )}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Fullscreen modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4" onClick={toggleFullscreen}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 bg-background/80 rounded-full"
            onClick={toggleFullscreen}
          >
            <X className="h-5 w-5" />
          </Button>
          
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={mainImage}
              alt="Project image fullscreen"
              fill
              className="object-contain"
              sizes="100vw"
            />
            
            {images.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 