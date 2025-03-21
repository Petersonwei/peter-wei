'use client'

import WakeWordDetector from '@/components/WakeWordDetector'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import TranscriptOverlay from '@/components/TranscriptOverlay'
import { useState, useRef } from 'react'
import { Mic, Info, HelpCircle, CheckCircle2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface Message {
  id: string
  type: 'response' | 'transcription'
  role?: string
  content: string
  timestamp: Date
  isComplete?: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isCallActive, setIsCallActive] = useState(false)
  const wakeWordDetectorRef = useRef<{ endCall: () => Promise<void> } | null>(null)

  const handleCallStatusChange = (status: string) => {
    setIsCallActive(status === 'ongoing' || status === 'connecting')
  }

  const handleMessagesUpdate = (newMessages: Message[]) => {
    setMessages(newMessages)
  }

  const handleEndCall = async () => {
    if (wakeWordDetectorRef.current) {
      await wakeWordDetectorRef.current.endCall()
      setIsCallActive(false)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <Card className="border-none shadow-none bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Mic className="h-6 w-6" />
            Peter Wei Voice Assistant
          </CardTitle>
          <CardDescription className="text-center text-primary-foreground/90 font-medium text-lg">
            Say &quot;Hey Peter&quot; to start a conversation
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="flex-1 p-6 max-w-3xl mx-auto w-full">
        <Card className="mb-6 border-2 border-muted shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              How to Use the Voice Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">1</span>
                  Getting Started
                </h3>
                <ul className="ml-8 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Allow microphone access when prompted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Wait for the <strong>Listening for Hey Peter</strong> status</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">2</span>
                  Using the Assistant
                </h3>
                <ul className="ml-8 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Say <strong>Hey Peter</strong> to activate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Speak naturally after the connection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">3</span>
                  Ending a Conversation
                </h3>
                <ul className="ml-8 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Say <strong>Byebye Peter</strong> to end</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Or click the <strong>End Call</strong> button</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">4</span>
                  After the Call
                </h3>
                <ul className="ml-8 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>System will automatically listen again</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                    <span>Say "Hey Peter" to start a new conversation</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-amber-50 dark:bg-amber-950 border-t border-amber-200 dark:border-amber-800 rounded-b-lg">
            <div className="flex items-start gap-2 w-full">
              <HelpCircle className="h-5 w-5 mt-0.5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
              <div className="text-sm text-amber-800 dark:text-amber-300">
                <p className="font-medium">For best results:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Use Chrome or Edge browsers</li>
                  <li>Ensure your microphone is properly connected</li>
                  <li>Speak clearly when saying the wake word</li>
                  <li>If issues persist, try refreshing the page</li>
                </ul>
              </div>
            </div>
          </CardFooter>
        </Card>
        
        <WakeWordDetector 
          ref={wakeWordDetectorRef}
          onCallStatusChange={handleCallStatusChange}
          onMessagesUpdate={handleMessagesUpdate}
          onEndCall={() => setIsCallActive(false)}
        />
      </div>

      <TranscriptOverlay 
        messages={messages}
        isCallActive={isCallActive}
        onEndCall={handleEndCall}
      />
    </div>
  )
} 