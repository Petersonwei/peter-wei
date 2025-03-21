import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TimelineItem = {
  title: string
  company: string
  date: string
  description: string[]
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{item.company} | {item.date}</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

