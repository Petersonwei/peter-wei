import { Metadata } from 'next'
import { projects } from '@/data/projects'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }
  
  return {
    title: `${project.title} | Peter Wei Portfolio`,
    description: project.description
  }
} 