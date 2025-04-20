import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

interface ProjectFeaturesProps {
  features?: string[]
}

export default function ProjectFeatures({ features = [] }: ProjectFeaturesProps) {
  if (features.length === 0) return null;
  
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          Key Features
        </h2>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary p-1 rounded mt-0.5">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
} 