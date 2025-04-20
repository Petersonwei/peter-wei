'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ChevronLeft, 
  Code,
  Calendar
} from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectLinks } from '@/components/project-links'
import ProjectFeatures from '@/components/ProjectFeatures'
import { Markdown } from '@/components/ui/markdown'
import { ImageGallery } from '@/components/ui/image-gallery'

export default function ProjectPage() {
  // Get the route params using useParams hook
  const params = useParams()
  const id = params?.id as string
  
  // Find the project by ID
  const project = projects.find(p => p.id === id)
  
  // If project not found, return 404
  if (!project) {
    notFound()
  }
  
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

  // Default features if none provided
  const defaultFeatures = [
    'Feature-rich user interface with responsive design',
    'Integration with multiple APIs and services',
    'High performance and scalable architecture',
    'Comprehensive testing and error handling'
  ]
  
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="group mb-4 -ml-3">
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </Link>
        
        {/* Project Title Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              {project.badges?.map(badge => (
                <Badge key={badge} variant={getBadgeVariant(badge)}>
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
          <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
        </div>
        
        {/* Main Project Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column: Info & Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Image Gallery (if available) or Feature Image */}
            {project.gallery && project.gallery.length > 0 ? (
              <ImageGallery images={[project.imageUrl, ...project.gallery]} />
            ) : (
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project.imageUrl || '/projects/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </div>
            )}
            
            {/* Project Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Project Overview
                </h2>
                {project.markdownContent ? (
                  <Markdown content={project.markdownContent} />
                ) : (
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">{project.longDescription || project.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Key Features */}
            <ProjectFeatures features={project.features || defaultFeatures} />
          </div>
          
          {/* Right Column: Technologies & Info */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="text-sm py-1 px-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Project Info */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Project Info</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Project Type</h3>
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {project.badges?.[0] || "Development"}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Date</h3>
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Related Projects */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Related Projects</h2>
                <div className="space-y-4">
                  {projects
                    .filter(p => 
                      p.id !== project.id && 
                      p.badges?.some(b => project.badges?.includes(b))
                    )
                    .slice(0, 2)
                    .map(relatedProject => (
                      <Link href={`/projects/${relatedProject.id}`} key={relatedProject.id}>
                        <div className="flex items-center gap-3 group">
                          <div className="relative h-12 w-12 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedProject.imageUrl || '/projects/placeholder.svg'}
                              alt={relatedProject.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              {relatedProject.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {relatedProject.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 