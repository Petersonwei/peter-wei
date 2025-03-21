import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 px-4 sm:px-8 lg:px-12 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Peter Wei. The source code is available on{" "}
            <Link href="https://github.com/Petersonwei/my-portfolio.git" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Petersonwei" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/peter-wei-it/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:tzuhsiang.wei@uq.net.au">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
