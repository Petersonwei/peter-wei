'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  const navigateToChat = () => {
    router.push('/chat')
  }
  
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        {/* Hero Section */}
        <Card className="border-none shadow-none bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Welcome to Parenta</CardTitle>
            <CardDescription className="text-center text-primary-foreground/80">
              Your personal voice assistant powered by AI
            </CardDescription>
          </CardHeader>
        </Card>
        
        {/* Feature Card */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Voice Assistant</h2>
                <p className="text-muted-foreground">
                  Talk to your AI assistant using voice commands. Just say &quot;Hey Anna&quot; to get started.
                </p>
              </div>
              <Button 
                size="lg"
                onClick={navigateToChat}
                className="mt-4"
              >
                Start Conversation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}