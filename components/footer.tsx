"use client"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const pathname = usePathname()
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold tracking-wider text-primary">K</span>
              <span className="text-xl font-semibold tracking-wide text-foreground">KEERTHI</span>
            </div>
            <p className="text-xm text-muted-foreground max-w-md leading-relaxed">
              Software Engineer building practical AI/ML and full-stack systems across backend APIs, GenAI, LLMs, computer vision, and scalable applications.
            </p>
            <p className="text-xm text-muted-foreground mt-2">
              United States • kgudibandi@ufl.edu 
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/experience" className={`transition-colors text-sm ${pathname === "/experience" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`transition-colors text-sm ${pathname === "/projects" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className={`transition-colors text-sm ${pathname === "/skills" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/KeerthiReddyGudibandi14" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/keerthi-reddy-gudibandi-713718273/" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:kgudibandi@ufl.edu" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xm text-muted-foreground">© 2026 Keerthi Reddy Gudibandi. All rights reserved.</p>
          <p className="text-xm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
