'use client'

import WakeWordDetector from '@/components/WakeWordDetector'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import TranscriptOverlay from '@/components/TranscriptOverlay'
import { useState, useRef } from 'react'

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
      <Card className="border-none shadow-none bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">Parenta</CardTitle>
          <CardDescription className="text-center text-primary-foreground/80">
            Say &quot;Hey Anna&quot; to start a conversation
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="flex-1 p-6">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">How to use:</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Allow microphone access when prompted</li>
              <li>Say <strong>&quot;Hey Anna&quot;</strong> to activate the voice assistant</li>
              <li>Speak naturally with the AI after the call connects</li>
              <li>Say <strong>&quot;Byebye Anna&quot;</strong> to end the conversation</li>
              <li>The system will automatically listen for the wake word again after the call ends</li>
            </ol>
            <Card className="mt-4 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
              <CardContent className="p-3">
                <p className="text-amber-800 dark:text-amber-200"><strong>Note:</strong> This feature works best in Chrome or Edge browsers. If you experience issues:</p>
                <ul className="list-disc pl-5 mt-1 text-amber-800 dark:text-amber-200">
                  <li>Make sure your microphone is working properly</li>
                  <li>Try refreshing the page</li>
                  <li>Speak clearly when saying the wake word</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
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