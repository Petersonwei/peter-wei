'use client'

import WakeWordDetector from '@/components/WakeWordDetector'
import { Card, CardContent } from "@/components/ui/card"
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
      <div className="bg-blue-500 p-6 text-white">
        <h1 className="text-2xl font-semibold text-center">Parenta</h1>
        <p className="text-blue-100 mt-1 text-center">Say &quot;Hey Anna&quot; to start a conversation</p>
      </div>
      
      <div className="flex-1 p-6 bg-gray-50">
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
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm">
              <p><strong>Note:</strong> This feature works best in Chrome or Edge browsers. If you experience issues:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Make sure your microphone is working properly</li>
                <li>Try refreshing the page</li>
                <li>Speak clearly when saying the wake word</li>
              </ul>
            </div>
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