import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { PhoneOff, Mic } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"

interface Message {
  id: string
  type: 'response' | 'transcription'
  role?: string
  content: string
  timestamp: Date
  isComplete?: boolean
}

interface TranscriptOverlayProps {
  messages: Message[]
  onEndCall: () => void
  isCallActive: boolean
}

export default function TranscriptOverlay({ messages, onEndCall, isCallActive }: TranscriptOverlayProps) {
  const { toast } = useToast()
  const [canEndCall, setCanEndCall] = useState(false)

  useEffect(() => {
    if (isCallActive) {
      // Reset canEndCall to false when call starts
      setCanEndCall(false)
      
      // Show toast when call starts
      toast({
        title: "Peter is coming",
        description: "Please wait while Peter joins the conversation",
      })

      // Set delay for end call button
      const timer = setTimeout(() => {
        setCanEndCall(true)
      }, 4000)

      return () => clearTimeout(timer)
    } else {
      // Reset canEndCall when call ends
      setCanEndCall(false)
    }
  }, [isCallActive, toast])

  if (!isCallActive) return null;

  // Get the latest message
  const latestMessage = messages[messages.length - 1];
  const isParentaSpeaking = latestMessage?.role === 'assistant' && !latestMessage?.isComplete;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg bg-background/95 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {isParentaSpeaking ? "Parenta is speaking..." : "Parenta"}
                </h2>
                {isParentaSpeaking && (
                  <p className="text-muted-foreground text-sm">
                    Please wait until the response is complete
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={onEndCall}
              variant="destructive"
              size="lg"
              className="rounded-full px-6"
              disabled={!canEndCall}
            >
              <PhoneOff className="mr-2 h-5 w-5" />
              End Call
            </Button>
          </div>

          <ScrollArea className="h-[400px] rounded-xl bg-muted/50 backdrop-blur-sm p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <Card className={`max-w-[80%] ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <CardContent className="p-3">
                      <p className="text-sm opacity-70 mb-1">
                        {message.role === 'user' ? 'You' : 'Parenta'}
                      </p>
                      <p>{message.content}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
} 