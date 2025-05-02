'use client'

import { Project } from '@/data/projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Building, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
          <p className="text-sm line-clamp-3">{project.role}</p>
        </div>
        
        {/* Result */}
        <div>
          <h3 className="text-sm font-medium mb-1 text-muted-foreground">Result</h3>
          <p className="text-sm line-clamp-3">{project.result}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link href={`/projects/${project.id}`} className="w-full">
          <Button variant="secondary" className="w-full">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
} 