import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  quote: string
  author: string
  title: string
  company: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "His focus on app development for our ERP system, Boond Manager, showcased his skills in React, TypeScript, Nest.js, and MongoDB. Peter demonstrated exemplary professionalism and a strong work ethic, contributing significantly to the project&apos;s success.",
    author: "Pierre Bussy",
    title: "Co-Founder",
    company: "Easy Skill Australia Pty Ltd",
  },
  {
    quote: "I highly recommend Tzu Hsiang (Peter) Wei for the IT intern role at AxCharge. His contributions to the design and launch of our company&apos;s official website were invaluable. Peter&apos;s responsibilities included UI/UX design, website development, and content creation, showcasing his technical proficiency and creativity.",
    author: "Peng Tong",
    title: "CEO",
    company: "AxCharge",
  },
  {
    quote: "I recently collaborated with on a Student-Staff Partnerships (SSP) Project at the University of Queensland (UQ). Peter was an active and enthusiastic member of our team, demonstrating his capabilities in secondary research analysis and planning human-centered design research methodologies. His professionalism, friendliness, and willingness to collaborate made him a pleasure to work with.",
    author: "Bianca McCracken",
    title: "Campaign Coordinator",
    company: "Marketing and Communication, The University of Queensland",
  },
]

export function Testimonials() {
  return (
    <div className="space-y-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-muted/50">
          <CardContent className="pt-6">
            <blockquote className="space-y-2">
              <p className="text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="flex items-center space-x-4 mt-4">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                </div>
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 