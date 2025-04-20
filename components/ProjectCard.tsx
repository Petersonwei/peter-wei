'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Code, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  isFeatured?: boolean
}

export default function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  // Function to map badge names to variants
  const getBadgeVariant = (badge: string) => {
    const lowerBadge = badge.toLowerCase().replace(' ', '-')
    if (lowerBadge === 'featured') return 'featured'
    if (lowerBadge === 'ai') return 'ai'
    if (lowerBadge === 'full-stack') return 'full-stack'
    if (lowerBadge === 'machine-learning') return 'machine-learning'
    if (lowerBadge === 'data-visualization') return 'data-visualization'
    if (lowerBadge === 'mobile') return 'mobile'
    if (lowerBadge === 'game-dev') return 'game-dev'
    return 'secondary'
  }

  if (isFeatured) {
    return (
      <Link href={`/projects/${project.id}`}>
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary cursor-pointer">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full">
              <Image
                src={project.imageUrl || '/projects/placeholder.jpg'}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {project.badges?.map(badge => (
                  <Badge key={badge} variant={getBadgeVariant(badge)}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-6 flex flex-col">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-primary" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pb-4 flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-2 flex justify-between">
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
                <Button size="sm" variant="ghost" className="gap-1">
                  View Details <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary cursor-pointer flex flex-col">
        <div className="relative h-48">
          <Image
            src={project.imageUrl || '/projects/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {project.badges?.map(badge => (
              <Badge key={badge} variant={getBadgeVariant(badge)}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{project.description}</p>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map(tech => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" variant="ghost">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" variant="ghost">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
          <Button size="sm" variant="outline" className="gap-1">
            Details <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
} 