'use client'

import { ReactNode } from 'react'
import { TopNav } from '@/components/TopNav'
import Footer from '@/components/Footer'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
} 