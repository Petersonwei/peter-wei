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
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-8 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my portfolio of web development and software engineering projects
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button 
              variant={!projectType ? "default" : "outline"} 
              onClick={() => setProjectType(null)}
              className="px-6 py-2"
              size="lg"
            >
              All Projects ({projects.length})
            </Button>
            <Button 
              variant={projectType === "business" ? "default" : "outline"} 
              onClick={() => setProjectType("business")}
              className="px-6 py-2"
              size="lg"
            >
              Business Projects ({projects.filter(p => p.projectType === "business").length})
            </Button>
            <Button 
              variant={projectType === "side" ? "default" : "outline"} 
              onClick={() => setProjectType("side")}
              className="px-6 py-2"
              size="lg"
            >
              Side Projects ({projects.filter(p => p.projectType === "side").length})
            </Button>
          </div>
        </div>

        {/* Projects List with Count */}
        <div className="mb-6 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-2">
            {projectType ? 
              `${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Projects` : 
              "All Projects"
            }
            <span className="text-muted-foreground ml-2">({filteredProjects.length})</span>
          </h2>
          <ProjectsList 
            projects={filteredProjects} 
            limit={0} 
            showViewAll={false}
            title=""
          />
        </div>
      </div>
    </div>
  )
} 