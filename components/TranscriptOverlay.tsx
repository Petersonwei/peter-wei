import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { PhoneOff, Mic, MessageSquare } from "lucide-react"
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
        title: "Peter is joining the call",
        description: "Please wait while the connection is established",
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
  const isPeterSpeaking = latestMessage?.role === 'assistant' && !latestMessage?.isComplete;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <Card className="w-full max-w-lg bg-background/95 backdrop-blur-sm shadow-lg border-2">
        <CardContent className="p-3 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
                {isPeterSpeaking ? (
                  <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                ) : (
                  <Mic className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                )}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {isPeterSpeaking ? "Peter is speaking..." : "Peter Wei"}
                </h2>
                {isPeterSpeaking && (
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Please wait until the response is complete
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={onEndCall}
              variant="destructive"
              size="default"
              className="rounded-full px-4 sm:px-6 py-1 sm:py-2 self-end sm:self-auto"
              disabled={!canEndCall}
            >
              <PhoneOff className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              End Call
            </Button>
          </div>

          <ScrollArea className="h-[300px] sm:h-[400px] rounded-xl bg-muted/50 backdrop-blur-sm p-3 sm:p-4">
            <div className="space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <Card className={`max-w-[85%] sm:max-w-[80%] shadow-sm ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background border-muted'
                  }`}>
                    <CardContent className="p-2 sm:p-3">
                      <p className="text-xs font-medium mb-1 opacity-70">
                        {message.role === 'user' ? 'You' : 'Peter'}
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">{message.content}</p>
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