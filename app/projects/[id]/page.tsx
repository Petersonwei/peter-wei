'use client'

import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Building, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost">← Back to Projects</Button>
          </Link>
        </div>
        
        {/* Project Header */}
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> {project.date}
            </span>
            <Badge variant={project.projectType === "business" ? "default" : "secondary"}>
              {project.projectType === "business" ? "Business Project" : "Side Project"}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>
        
        {/* Project Image */}
        <div className="rounded-lg overflow-hidden mb-12 relative h-[400px] w-full">
          <Image
            src={project.imageUrl}
            alt={`${project.title} banner`}
            className="object-cover"
            fill
            priority
          />
        </div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Who - Client */}
          {project.client && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Who</h2>
                <div className="flex items-center text-lg">
                  <Building className="mr-3 h-5 w-5 text-primary" />
                  <span>{project.client}</span>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* What - Role and Description */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">What</h2>
              <p className="text-lg">{project.role}</p>
            </CardContent>
          </Card>
          
          {/* Result */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Result</h2>
              <p className="text-lg">{project.result}</p>
            </CardContent>
          </Card>
          
          {/* Technologies */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 