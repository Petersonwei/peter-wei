import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ClientLogos } from "@/components/client-logos"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  const words = [
    { text: "Full" },
    { text: "Stack" },
    { text: "Developer" },
    { text: "&" },
    { text: "IT" },
    { text: "Professional" },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center">
          Peter Wei
        </h1>
        <div className="h-16 mt-4">
          <TypewriterEffect words={words} />
        </div>
        <p className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400 mx-4 mt-4">
          Passionate about building scalable and user-friendly web applications using modern frameworks and cloud technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <ClientLogos />
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <Testimonials />
        </div>
      </section>
    </>
  )
}

