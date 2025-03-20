import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { PhoneOff, Mic } from "lucide-react"

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
  if (!isCallActive) return null;

  // Get the latest message
  const latestMessage = messages[messages.length - 1];
  const isParentaSpeaking = latestMessage?.role === 'assistant' && !latestMessage?.isComplete;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Mic className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {isParentaSpeaking ? "Parenta is speaking..." : "Parenta"}
                </h2>
                {isParentaSpeaking && (
                  <p className="text-gray-500 text-sm">
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
            >
              <PhoneOff className="mr-2 h-5 w-5" />
              End Call
            </Button>
          </div>

          <ScrollArea className="h-[400px] rounded-xl bg-white/50 backdrop-blur-sm p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm opacity-70 mb-1">
                      {message.role === 'user' ? 'You' : 'Parenta'}
                    </p>
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
} 