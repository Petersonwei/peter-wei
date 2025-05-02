'use client'

import { Project } from '@/data/projects'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building, Code } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={`${project.title} thumbnail`}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute top-2 right-2">
          <Badge variant={project.projectType === "business" ? "default" : "secondary"}>
            {project.projectType === "business" ? "Business Project" : "Side Project"}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground flex items-center">
          <Calendar className="inline mr-1 h-4 w-4" /> {project.date}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-grow">
        {/* Who */}
        {project.client && (
          <div>
            <h3 className="text-sm font-medium mb-1 text-muted-foreground">Who</h3>
            <p className="flex items-center">
              <Building className="mr-2 h-4 w-4 inline text-primary" />
              <span>{project.client}</span>
            </p>
          </div>
        )}
        
        {/* What */}
        <div>
          <h3 className="text-sm font-medium mb-1 text-muted-foreground">What</h3>
          <p className="text-sm">{project.role}</p>
        </div>
        
        {/* Result */}
        <div>
          <h3 className="text-sm font-medium mb-1 text-muted-foreground">Result</h3>
          <p className="text-sm">{project.result}</p>
        </div>
        
        {/* Technologies */}
        <div>
          <h3 className="text-sm font-medium mb-1 text-muted-foreground flex items-center">
            <Code className="mr-1 h-3 w-3" /> Technologies
          </h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 