"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative px-4 sm:px-8 md:px-12 py-8 min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/PortfolioWebsite/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className={`relative z-10 w-full transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
            <div className="relative">
              <div className="h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/PortfolioWebsite/profile-picture.jpg`}
                  alt="Keerthi Reddy Gudibandi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <p className="mt-4 text-muted-foreground text-lg text-center w-full">
                AI/ML | Computer Vision | Python
              </p>
            </div>

            <div className="text-center lg:text-left flex-1">
              <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Welcome to my World</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Keerthi Reddy
                <br />
                <span className="text-primary">Gudibandi</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl text-muted-foreground mb-6">
                <GraduationCap className="w-4 h-4 text-foreground" />
                <span className="text-foreground">MS in Computer Science</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">University of Florida</span>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <a
                  href="https://github.com/KeerthiReddyGudibandi14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/keerthi-reddy-gudibandi-713718273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a
                  href="mailto:kgudibandi@ufl.edu"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/projects">
                    Explore My Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:col-span-2 gap-6">
            <p className="text-muted-foreground text-xl leading-relaxed pt-8">
              Software Engineer and Computer Science graduate student specializing in machine learning, deep learning, computer vision, Generative AI, and LLMs. Experienced in building full-stack applications, backend APIs, ML-focused solutions, model evaluation workflows, LLM-powered applications, and cloud-based software systems. Passionate about developing reliable, high-performance software at the intersection of software engineering, machine learning, and applied AI.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
                <p className="text-3xl font-bold text-primary mb-1">3</p>
                <p className="text-muted-foreground text-sm">AI/ML Publications</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
                <p className="text-3xl font-bold text-primary mb-1">2</p>
                <p className="text-muted-foreground text-sm">IEEE Publications</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
                <p className="text-3xl font-bold text-primary mb-1">Fall 2026</p>
                <p className="text-muted-foreground text-sm">Internship / Co-op Target</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
