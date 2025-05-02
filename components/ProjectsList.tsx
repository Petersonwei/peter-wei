'use client'

import { Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectsListProps {
  projects: Project[]
  limit?: number
  showViewAll?: boolean
  className?: string
  title?: string
}

export default function ProjectsList({
  projects,
  limit = 3,
  showViewAll = false,
  className,
  title = "Featured Projects"
}: ProjectsListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects
  
  return (
    <section className={cn("py-8", className)}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        
        {showViewAll && (
          <Link href="/projects">
            <Button variant="ghost" className="font-medium">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <div key={project.id} className="h-full flex">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      
      {showViewAll && projects.length > limit && (
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
} 