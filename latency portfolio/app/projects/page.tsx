import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "AI ChatBot For Positive Parenting Program",
    description: "Developing an AI chatbot for the Positive Parenting Program at UQ, leveraging Node.js, React, OpenAI API, and cloud deployment for enhanced parental support.",
    technologies: ["Node.js", "React", "OpenAI API", "Linux", "Cloud Deployment"]
  },
  {
    title: "Design and Evaluation of an Online Training Tool", 
    description: "Developed an online training platform for the Triple P-Positive Parenting Program, enhancing accessibility and engagement through interactive elements, user-centered design, and open-source customization.",
    technologies: ["Figma", "UI/UX", "User-centered design", "Open-source customization", "User testing"]
  },
  {
    title: "House Hunter, UQ Validate Program",
    description: "Directed market research and validation through 40 interviews, collaborating with a 3-member team. Built the House Hunter website and designed the user interface, elevating user experience and supporting the business model.",
    technologies: ["Market Research", "Web Development", "UI/UX Design", "Team Collaboration"]
  },
  {
    title: "E-commerce store with .Net, React & Redux",
    description: "Built a proof-of-concept E-commerce store using .NET, React, Redux, and Material UI, incorporating modern authentication, payment systems, and responsive design.",
    technologies: ["React", "Redux", "Material UI", ".NET", "C#", "SQL Server", "Stripe API", "TypeScript", "Docker"]
  },
  {
    title: "Brisbane's Best Events",
    description: "Developed a web application for discovering and sharing events in Brisbane. The platform integrates Brisbane City Council Events API to provide personalized event recommendations and social features for young adults.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Leaflet.js", "OpenRouteService API", "GeoJSON"]
  },
  {
    title: "Task Manager",
    description: "Designed and implemented a Task Manager application with robust features for task creation, assignment, and tracking, leveraging React for the front-end, Node.js and Express for the back-end, and MongoDB for data persistence.",
    technologies: ["NestJS", "TypeScript", "Node.js", "AWS", "REST APIs", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    title: "Movie Review Website",
    description: "Built a responsive movie recommendation website, integrating APIs for dynamic movie recommendations.",
    technologies: ["JavaScript", "HTML", "CSS", "Figma", "API Integration", "Git"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="mr-2 mb-2">{tech}</Badge>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            {project.link && (
              <CardFooter>
                <Link href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
