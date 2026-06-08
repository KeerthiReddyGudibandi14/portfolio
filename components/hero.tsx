"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Brain,
  Database,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-8 md:px-12 lg:px-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#0f172a_0%,#020617_45%,#000000_100%)]" />
      <div className="absolute left-20 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-24 right-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div
        className={`mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl grid-cols-1 items-center gap-14 transition-all duration-1000 lg:grid-cols-2 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* LEFT SIDE: Profile Picture */}
<div className="mb-6 flex flex-col items-center gap-6">
  <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 sm:h-56 sm:w-56 md:h-64 md:w-64">
    <img
      src="/Gitprof.jpeg"
      alt="Keerthi Reddy Gudibandi"
      className="h-full w-full object-cover object-top"
    />
  </div>

  <div className="flex gap-4">
            <a
              href="https://github.com/KeerthiReddyGudibandi14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/keerthi-reddy-gudibandi-713718273/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:kgudibandi@ufl.edu"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
</div>

        {/* RIGHT SIDE: Text Content */}
        <div>
          

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Keerthi.
            </span>
          </h1>

          

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            I build reliable software systems at the intersection of backend engineering, full-stack development, and AI/ML, with work across GenAI, computer vision, LLM applications, and scalable product workflows. I’m currently a Computer Science graduate student at the University of Florida.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2 rounded-xl bg-cyan-500 px-7 text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-400"
              asChild
            >
              <Link href="/projects">
                <Code2 className="h-5 w-5" />
                View Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-xl border-slate-700 bg-slate-950/60 px-7 text-white hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-300"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>

          

          

          
        </div>
      </div>
    </section>
  )
}