'use client'

import Image from 'next/image'
import { Home, MessageSquare, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface MobileNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="md:hidden">
      {/* Top Bar */}
      <Card className="m-4 p-4 border-none shadow-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/Triple P Logo.png" 
              alt="Triple P Logo" 
              width={40} 
              height={40} 
              className="mr-2"
              priority
            />
            <h1 className="text-lg font-bold text-primary">Voice AI</h1>
          </div>
          
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </Card>
      
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <Card className="mx-4 mb-4 p-2 border-none shadow-none">
          <nav>
            <ul className="space-y-1">
              <li>
                <Button
                  onClick={() => {
                    onTabChange('home')
                    setIsMenuOpen(false)
                  }}
                  variant={activeTab === 'home' ? 'secondary' : 'ghost'}
                  className={cn(
                    "w-full justify-start",
                    activeTab === 'home' && "bg-secondary"
                  )}
                >
                  <Home size={18} className="mr-2" />
                  <span>Home</span>
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => {
                    onTabChange('assistant')
                    setIsMenuOpen(false)
                  }}
                  variant={activeTab === 'assistant' ? 'secondary' : 'ghost'}
                  className={cn(
                    "w-full justify-start",
                    activeTab === 'assistant' && "bg-secondary"
                  )}
                >
                  <MessageSquare size={18} className="mr-2" />
                  <span>Voice Assistant</span>
                </Button>
              </li>
            </ul>
          </nav>
        </Card>
      )}
    </div>
  )
} 