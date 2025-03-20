'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function TopNav() {
  const pathname = usePathname()
  
  return (
    <div className="border-b border-border bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image 
            src="/Triple P Logo.png" 
            alt="Triple P Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
            priority
          />
          <span className="font-bold text-xl text-primary">Voice AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === "/" && "bg-accent text-accent-foreground"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/chat" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === "/chat" && "bg-accent text-accent-foreground"
                    )}
                  >
                    Voice Assistant
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side items (Theme Toggle and Mobile Menu) */}
        <div className="flex items-center space-x-4 ml-auto">
          <ThemeToggle />
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <nav className="space-y-2">
                    <Link href="/" legacyBehavior passHref>
                      <Button
                        variant={pathname === "/" ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          pathname === "/" && "bg-secondary"
                        )}
                      >
                        Home
                      </Button>
                    </Link>
                    <Link href="/chat" legacyBehavior passHref>
                      <Button
                        variant={pathname === "/chat" ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          pathname === "/chat" && "bg-secondary"
                        )}
                      >
                        Voice Assistant
                      </Button>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
} 