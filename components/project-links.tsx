'use client'

import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectLinksProps {
  githubUrl?: string
  demoUrl?: string
}

export function ProjectLinks({ githubUrl, demoUrl }: ProjectLinksProps) {
  if (!githubUrl && !demoUrl) return null;
  
  return (
    <div className="flex gap-2 mt-4">
      {githubUrl && (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            View Code
          </Button>
        </a>
      )}
      
      {demoUrl && (
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </a>
      )}
    </div>
  )
} 