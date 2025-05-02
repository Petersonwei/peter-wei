'use client'


import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          {/* About */}
          <h3 className="text-lg font-semibold mb-4">Peter Wei</h3>
          <p className="text-muted-foreground mb-6">
            Full-stack developer specializing in modern web technologies and AI solutions.
            Building innovative, user-friendly applications with a focus on performance and accessibility.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Petersonwei" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/peter-wei-it/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Direct Contact */}
          <div className="text-muted-foreground mb-6">
            <p>pwei.dev@gmail.com</p>
            <p>0452509198</p>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Peter Wei. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 