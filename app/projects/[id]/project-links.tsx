'use client'

import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectLinksProps {
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectLinks({ githubUrl, demoUrl }: ProjectLinksProps) {
  return (
    <div className="flex gap-3">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button className="gap-2">
            <Github className="h-5 w-5" />
            View Code
          </Button>
        </a>
      )}
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-5 w-5" />
            Live Demo
          </Button>
        </a>
      )}
    </div>
  )
} 