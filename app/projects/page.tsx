'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { Button } from "@/components/ui/button"
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)
  
  // Filter projects based on the selected filter
  const filteredProjects = filter 
    ? projects.filter(project => 
        project.badges?.some(badge => 
          badge.toLowerCase().replace(' ', '-') === filter.toLowerCase()
        )
      )
    : projects

  // Get unique badge types for filtering
  const badgeTypes = Array.from(
    new Set(
      projects.flatMap(project => 
        project.badges?.map(badge => badge.toLowerCase().replace(' ', '-')) || []
      )
    )
  )

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my portfolio of web development, mobile, and AI projects
          </p>
          
          {/* Filter Badges */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Button 
              variant={!filter ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter(null)}
              className="rounded-full"
            >
              All Projects
            </Button>
            
            {badgeTypes.map(badgeType => (
              <Button
                key={badgeType}
                variant={filter === badgeType ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(badgeType)}
                className="rounded-full"
              >
                {badgeType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {!filter && projects.filter(p => p.featured).map(project => (
          <ProjectCard key={project.id} project={project} isFeatured={true} />
        ))}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => !p.featured || filter)
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
} 