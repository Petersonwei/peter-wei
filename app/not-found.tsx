'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, PanelLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <div className="flex gap-3">
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" /> 
            Go Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline" className="gap-2">
            <PanelLeft className="h-4 w-4" /> 
            View Projects
          </Button>
        </Link>
      </div>
    </div>
  )
} 