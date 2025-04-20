import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MicIcon, XIcon } from "@/components/icons/icons"

export default function InstructionsCard() {
  return (
    <Card className="mb-4 sm:mb-6 shadow-md">
      <CardHeader className="pb-2 px-4 pt-4">
        <CardTitle className="text-xl font-bold">
          Quick Guide - Peter Wei Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center p-3 border rounded-lg bg-primary/5">
            <div className={cn(
              "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3",
              "text-primary font-bold"
            )}>
              1
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <MicIcon className="h-4 w-4" />
                </div>
                <div>
                  <p>Say <strong>Hi Peter</strong> to start</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center p-3 border rounded-lg bg-primary/5">
            <div className={cn(
              "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3",
              "text-primary font-bold"
            )}>
              2
            </div>
            <div>
              <p>Ask questions about parenting</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center p-3 border rounded-lg bg-primary/5">
            <div className={cn(
              "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3",
              "text-primary font-bold"
            )}>
              3
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-0">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <XIcon className="h-4 w-4" />
                </div>
                <div>
                  <p>Say <strong>Goodbye Peter</strong> to end</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Our voice assistant is ready to answer questions about Peter Wei portfolio.
        </div>
      </CardContent>
    </Card>
  )
} 