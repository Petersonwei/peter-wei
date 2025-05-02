'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Headphones, ArrowRight } from 'lucide-react'
import WakeWordDetector, { VoiceAssistantRef } from '@/components/WakeWordDetector'
import TranscriptOverlay from '@/components/TranscriptOverlay'
import { useState, useRef, useEffect } from 'react'
import { Message } from '@/components/chat/types'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import LogoAnimation from '@/components/LogoAnimation'
import ProjectsList from '@/components/ProjectsList'
import { projects } from '@/data/projects'

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isCallActive, setIsCallActive] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)
  const wakeWordDetectorRef = useRef<VoiceAssistantRef | null>(null)

  // Start pulsing animation every 5 seconds to draw attention to chat button
  useEffect(() => {
    if (!isCallActive) {
      const interval = setInterval(() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isCallActive]);

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

  const startConversation = () => {
    console.log('Start Conversation button clicked');
    
    // Manually trigger a call by simulating the wake word detection
    setIsCallActive(true);
    console.log('isCallActive set to true');
    
    // Add an initial message to show in the overlay
    const initialMessage: Message = {
      id: uuidv4(),
      type: 'transcription',
      role: 'system',
      content: "Starting conversation with Peter...",
      timestamp: new Date()
    };
    setMessages([initialMessage]);
    console.log('Initial message added');
    
    // Dispatch a custom event that can be listened for by WakeWordDetector
    const event = new CustomEvent('startConversation');
    window.dispatchEvent(event);
    console.log('startConversation event dispatched');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Hero Banner with Integrated Chat */}
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Peter Wei Portfolio</h1>
              <p className="text-xl mb-6">Your interactive portfolio explorer powered by AI</p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="font-semibold"
                  >
                    View Projects
                  </Button>
                </Link>
                <Link href="/cv">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="font-semibold bg-background/20 text-primary-foreground"
                  >
                    View CV
                  </Button>
                </Link>
              </div>
      </div>

            <div className="md:w-1/2">
              <Card className="shadow-xl border-0 overflow-hidden bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className={`bg-primary/20 p-4 rounded-full ${isPulsing ? 'animate-pulse' : ''}`}>
                        <Headphones className="h-8 w-8 text-primary" />
                      </div>
                      {isPulsing && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-30"></div>
                      )}
                </div>
                    <h2 className="text-2xl font-bold mb-3 text-card-foreground">Chat with Peter&apos;s AI Assistant</h2>
                    <p className="text-muted-foreground mb-6">
                      Get instant answers about my skills, experience, and projects. Ask me anything!
                </p>
                <Button 
                  size="lg" 
                  onClick={startConversation}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                      <Mic className="h-5 w-5" />
                      Start Talking Now
                      <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full p-4 md:p-6 flex-1">
        {/* Company Experience Animation */}
        <div className="mt-8 mb-12">
          <LogoAnimation />
        </div>

        {/* Featured Projects Section */}
        <ProjectsList 
          projects={projects.filter(p => p.featured)} 
          limit={3}
          showViewAll={true}
        />
      </div>

      {/* Keep the functionality components hidden */}
      <div>
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