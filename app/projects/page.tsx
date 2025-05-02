'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectsList from '@/components/ProjectsList'
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [projectType, setProjectType] = useState<string | null>(null)
  
  // Filter projects based on project type
  const filteredProjects = projectType 
    ? projects.filter(project => project.projectType === projectType)
    : projects

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my portfolio of web development and software engineering projects
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Button 
              variant={!projectType ? "default" : "outline"} 
              onClick={() => setProjectType(null)}
              className="px-4"
            >
              All Projects
            </Button>
            <Button 
              variant={projectType === "business" ? "default" : "outline"} 
              onClick={() => setProjectType("business")}
              className="px-4"
            >
              Business Projects
            </Button>
            <Button 
              variant={projectType === "side" ? "default" : "outline"} 
              onClick={() => setProjectType("side")}
              className="px-4"
            >
              Side Projects
            </Button>
          </div>
        </div>

        {/* Project List */}
        <ProjectsList 
          projects={filteredProjects} 
          limit={0} 
          showViewAll={false}
          title={projectType ? 
            `${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Projects` : 
            "All Projects"
          }
        />
      </div>
    </div>
  )
} 